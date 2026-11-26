#!/usr/bin/env bash
# Drive handoff to the Gemini workspace agent (PLAYBOOK §14.6). Claude writes a request, this script puts it in the
# film's Drive folder as handoff/to_gemini.md, and the session sends the [GEMINI-HANDOFF] wake-up email through the
# Gmail connector (printed below; no SMTP password anywhere). Gemini answers in handoff/from_gemini (.md or a Google
# Doc), or by an email whose subject starts [GEMINI-RESULT]. Gemini's answer is a list of leads, never a verdict.
#
#   scripts/gemini_handoff.sh new    <slug> <task>            write films/<slug>/handoff/to_gemini.md from the template
#   scripts/gemini_handoff.sh push   <slug> <task> [REQ.md] [--attach FILE ...]
#                                                              lint, upload attachments + request, print the email
#   scripts/gemini_handoff.sh pull   <slug> [DEST.md]          newest reply newer than the request -> films/<slug>/review/gemini_<task>.md
#   scripts/gemini_handoff.sh status <slug>                    what is in the film's Drive handoff/ folder
#
# Tasks: research | fact-check | fresh-facts | narration-review | audio-audit | cut-audit | analytics-audit | second-opinion
# Drive: Margin-of-Error/<slug>/handoff/. Needs GDRIVE_RCLONE_TOKEN (as the other Drive scripts). Exit 4 = no reply yet.
set -euo pipefail
REPO=Margin-of-Error
FOLDER_ID=${GDRIVE_FOLDER_ID:-1-_G3XZkhZNlziKrdMrc3baMqOFcxjcfn}
DRIVE_PREFIX=""     # path of a film's folder inside the channel root, before <slug>
LOCAL_PREFIX="films/"            # the film's folder in this repo, before <slug>
BAN_SHA='0a962987762ad656 895068efba2c78cc 8cd4276cf696fc6f f69e488b03a90da6 86b77f2817b251dd 86a14aee989386de 9f483025039db444'   # sha256[:16] of 1–3-word phrases a request must never carry (channel isolation)
TASKS="research fact-check fresh-facts narration-review audio-audit cut-audit analytics-audit second-opinion"
RCLONE_VER=v1.71.1
ROOT=$(cd "$(dirname "$0")/.." && pwd)
CACHE="$ROOT/.cache/rclone"
TEMPLATES="$ROOT/prompts/gemini_handoff.md"
cmd=${1:-}; shift || true
usage() { sed -n 2,15p "$0"; exit 2; }
[[ -n $cmd ]] || usage
slug=${1:-}; [[ -n $slug ]] || usage
[[ $slug =~ ^[A-Za-z0-9._-]+$ ]] || { echo "bad slug: $slug" >&2; exit 2; }
HAND="${DRIVE_PREFIX}${slug}/handoff"
LOCAL="$ROOT/${LOCAL_PREFIX}${slug}"
ist() { python3 -c 'import datetime as d; print((d.datetime.now(d.timezone.utc)+d.timedelta(hours=5,minutes=30)).strftime("%Y-%m-%d %H:%M IST"))'; }
check_task() { [[ " $TASKS " == *" $1 "* ]] || { echo "unknown task '$1' (one of: $TASKS)" >&2; exit 2; }; }

if [[ $cmd == new ]]; then
  task=${2:?task}; check_task "$task"
  out="$LOCAL/handoff/to_gemini.md"; mkdir -p "$(dirname "$out")"
  [[ ! -e $out || ${3:-} == --force ]] || { echo "$out exists (add --force to replace)" >&2; exit 2; }
  python3 - "$TEMPLATES" "$task" "$REPO" "$slug" "$(ist)" "${HAND}/from_gemini.md" "$out" <<'PY'
import re, sys
tpl, task, repo, slug, now, ret, out = sys.argv[1:]
text = open(tpl, encoding="utf-8").read()
m = re.search(r"^## task: " + re.escape(task) + r"\n(.*?)(?=^## task: |\Z)", text, re.S | re.M)
if not m:
    sys.exit(f"no '## task: {task}' section in {tpl}")
body = m.group(1).strip().replace("<slug>", slug)
open(out, "w", encoding="utf-8").write(
    f"---\nrepo: {repo}\nslug: {slug}\ntask_type: {task}\ncreated_ist: {now}\nreturn_path: {ret}\n---\n\n"
    f"# Request for Gemini: {task}, {slug}\n\n{body}\n")
print(out)
PY
  echo "Fill every <...> line, then: scripts/gemini_handoff.sh push $slug $task" >&2
  exit 0
fi

[[ -n ${GDRIVE_RCLONE_TOKEN:-} ]] || { echo "GDRIVE_RCLONE_TOKEN is not set" >&2; exit 3; }
RCLONE="$CACHE/rclone-$RCLONE_VER-linux-amd64/rclone"
if [[ ! -x $RCLONE ]]; then
  mkdir -p "$CACHE"
  # the same pinned release from two hosts; downloads.rclone.org is blocked in cloud sessions
  curl -fsSL -m 300 -o "$CACHE/rclone.zip" "https://downloads.rclone.org/$RCLONE_VER/rclone-$RCLONE_VER-linux-amd64.zip" \
    || curl -fsSL -m 300 -o "$CACHE/rclone.zip" "https://github.com/rclone/rclone/releases/download/$RCLONE_VER/rclone-$RCLONE_VER-linux-amd64.zip"
  (cd "$CACHE" && unzip -q -o rclone.zip && rm rclone.zip)
fi
# A token pasted through an app's secret field can lose its JSON wrapping; rebuild it (only the refresh token matters).
TOKEN=$(python3 - <<'PY'
import json, os, re
t = os.environ["GDRIVE_RCLONE_TOKEN"].strip()
try:
    json.loads(t); print(t)
except ValueError:
    rt = re.search(r'refresh_token"?\s*:\s*"?([^",}\s]+)', t)
    if not rt:
        raise SystemExit("GDRIVE_RCLONE_TOKEN has no refresh_token; run rclone authorize again")
    print(json.dumps({"access_token": "", "token_type": "Bearer", "refresh_token": rt.group(1),
                      "expiry": "2000-01-01T00:00:00Z"}))
PY
)
export RCLONE_CONFIG_GD_TYPE=drive RCLONE_CONFIG_GD_SCOPE=drive RCLONE_CONFIG_GD_TOKEN="$TOKEN"
export RCLONE_CONFIG_GD_ROOT_FOLDER_ID="$FOLDER_ID" RCLONE_CONFIG=/dev/null
R=("$RCLONE" --retries 4 --low-level-retries 10 --drive-export-formats md,txt)
link() {  # a just-created Drive folder can take a few seconds to list
  local j i; for i in 1 2 3 4 5 6; do
    j=$("${R[@]}" lsjson --stat --no-mimetype "gd:$1" 2>/dev/null) && [[ -n $j ]] && break; sleep 5; done
  [[ -n $j ]] || { echo "cannot find gd:$1 after upload" >&2; return 1; }
  python3 -c 'import json,sys; print("https://drive.google.com/file/d/"+json.loads(sys.argv[1])["ID"]+"/view")' "$j"; }

case "$cmd" in
  push)
    task=${2:?task}; check_task "$task"; shift 2
    req="$LOCAL/handoff/to_gemini.md"
    if [[ ${1:-} && ${1:-} != --attach ]]; then req=$1; shift; fi
    [[ -f $req ]] || { echo "no request file $req (run: $0 new $slug $task)" >&2; exit 2; }
    att=(); if [[ ${1:-} == --attach ]]; then shift; att=("$@"); fi
    python3 - "$req" "$REPO" "$slug" "$task" "${BAN_SHA:-}" <<'PY'
import hashlib, re, sys
req, repo, slug, task, ban = sys.argv[1:]
t = open(req, encoding="utf-8").read()
fm = dict(re.findall(r"^(\w+):\s*(.+?)\s*$", t.split("---")[1], re.M)) if t.startswith("---") else {}
bad = []
for k, v in (("repo", repo), ("slug", slug), ("task_type", task)):
    if fm.get(k, "").split("#")[0].strip() != v:
        bad.append(f"front matter {k} should be '{v}'")
for k in ("created_ist", "return_path"):
    if k not in fm:
        bad.append(f"front matter has no {k}")
for ph in re.findall(r"<(?:FILE_ID|fill[^>]*|link[^>]*|TODO[^>]*)>", t, re.I):
    bad.append(f"placeholder left: {ph}")
if re.search(r"ya29\.|1//0|AIza[0-9A-Za-z_-]{20}|sk-[A-Za-z0-9]{20}|gh[pousr]_[A-Za-z0-9]{20}|[\w.+-]+@[\w-]+\.[\w.]+", t):
    bad.append("looks like a secret or an email address (never in a handoff file)")
words = re.findall(r"[a-z0-9]+", t.lower())
hit = {" ".join(words[i:i + n]) for n in (1, 2, 3) for i in range(len(words) - n + 1)
       if hashlib.sha256(" ".join(words[i:i + n]).encode()).hexdigest()[:16] in ban.split()}
if hit:
    bad.append("channel isolation: names from outside this channel -> " + ", ".join(sorted(hit)))
if bad:
    sys.exit("request not pushed:\n  " + "\n  ".join(bad))
PY
    tmp=$(mktemp -d); cp "$req" "$tmp/to_gemini.md"
    if (( ${#att[@]} )); then
      printf '\n## Uploaded with this request (Drive, folder %s/)\n' "$HAND" >> "$tmp/to_gemini.md"
      for f in "${att[@]}"; do
        n=$(basename "$f")
        "${R[@]}" copyto --drive-chunk-size 64M --stats-one-line --stats 30s "$f" "gd:$HAND/$n" >&2
        echo "- $n: $(link "$HAND/$n")" >> "$tmp/to_gemini.md"
      done
    fi
    "${R[@]}" copyto "$tmp/to_gemini.md" "gd:$HAND/to_gemini.md"
    url=$(link "$HAND/to_gemini.md"); rm -rf "$tmp"
    cat <<MAIL
Pushed: $url

=== WAKE-UP EMAIL (send with the Gmail connector to the owner's own Gmail address; plain text) ===
Subject: [GEMINI-HANDOFF] $REPO $slug $task
Repo: $REPO
Slug: $slug
Handoff File: $url
=== END ===
MAIL
    ;;
  pull)
    dest=${2:-}
    python3 - "${R[@]}" -- "${DRIVE_PREFIX}${slug}" "$HAND" "$LOCAL" "$dest" <<'PY'
import json, os, re, subprocess, sys, tempfile
i = sys.argv.index("--"); R = sys.argv[1:i]; folder, hand, local, dest = sys.argv[i + 1:]
ls = subprocess.run(R + ["lsjson", "-R", "--max-depth", "3", "--files-only", f"gd:{folder}"],
                    capture_output=True, text=True)
items = json.loads(ls.stdout or "[]")
req = [f for f in items if f["Path"] == "handoff/to_gemini.md"]
since = req[0]["ModTime"] if req else ""
# Gemini may save a Google Doc ("from_gemini", exported as .md/.txt) or a file, sometimes in the wrong sub-folder
cands = sorted((f for f in items if re.match(r"from_gemini", f["Name"], re.I) and f["ModTime"] > since
                and "archive" not in f["Path"]), key=lambda f: f["ModTime"])
if not cands:
    print(f"no reply in Drive {hand}/ newer than the request ({since or 'no request found'}); "
          "also search Gmail for subject [GEMINI-RESULT]", file=sys.stderr)
    sys.exit(4)
f = cands[-1]
with tempfile.TemporaryDirectory() as t:
    r = subprocess.run(R + ["backend", "copyid", "gd:", f["ID"], t + "/"], capture_output=True, text=True)
    got = os.listdir(t)
    if not got:
        subprocess.run(R + ["copy", f"gd:{folder}/{f['Path']}", t], check=True)
        got = os.listdir(t)
    text = open(os.path.join(t, got[0]), encoding="utf-8", errors="replace").read().lstrip("\ufeff")
if f.get("Size", 0) < 0:  # a Google Doc: its Markdown export escapes punctuation ("\\---", "task\\_type") and pads lines
    text = "\n".join(re.sub(r"\\([-\\`*_{}\[\]()#+.!|>~=<])", r"\1", l).rstrip() for l in text.splitlines()) + "\n"
fm = dict(re.findall(r"^(\w+):\s*(.+?)\s*$", text.split("---")[1], re.M)) if text.lstrip().startswith("---") else {}
task = fm.get("task_type", "reply").split("#")[0].strip()
out = dest or os.path.join(local, "review", f"gemini_{task}.md")
os.makedirs(os.path.dirname(out), exist_ok=True)
open(out, "w", encoding="utf-8").write(text)
print(f"{f['Path']} ({f['ModTime']}) -> {out}")
print(f"verdict: {fm.get('verdict', '(none given)')}   completed: {fm.get('completed_ist', '?')}")
if fm.get("slug") and fm["slug"].strip() != os.path.basename(local):
    print(f"WARNING: reply is for slug {fm['slug']}", file=sys.stderr)
PY
    ;;
  status) "${R[@]}" lsjson --no-mimetype "gd:$HAND" | python3 -c '
import json,sys
for f in json.load(sys.stdin): print(f["ModTime"][:16].replace("T"," "), "UTC ", f["Name"], "(folder)" if f["IsDir"] else "")' ;;
  *) usage ;;
esac
