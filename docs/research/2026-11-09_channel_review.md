# Channel review, 2026-11-09: the monetisation sprint

Read by `scripts/channel_stats.py` (the channel's own token), 09 NOV 2026.

## Where we are
| | Now | Needed |
|---|---|---|
| Subscribers | 0 | 1,000 |
| Public long-form watch hours (365-day rolling) | under 2 (one 18:30 film, 5 views) | 4,000 now; **8,000 for applications from 01 FEB 2027** |
| Public videos | 1 (*The $40 Billing Rule That Caused East Palestine*, 07 NOV) | — |
| Likes / comments | 0 / 0 | — |
| Shorts | 0 | Shorts route: 10M views in 90 days now, 20M from 01 FEB 2027 |

The YouTube Partner Program change (reported widely, 2026): from 01 FEB 2027, new applicants need 8,000 public watch
hours in 365 days (or 20M Shorts views in 90 days); existing members are not affected; the window is rolling, so hours
earned now still count later. What happens to a channel that qualifies but isn't accepted by 31 JAN is not settled in
the reports: check YouTube's own announcement before we count on the old bar.

## What is going wrong
1. **The channel is invisible.** One public film and 5 views give YouTube nothing to recommend from. Film 1 (*The Four
   Missing Bolts*, Marcus 4K master, package ready) has not been re-uploaded since the voice-1 version came down.
2. **The live title is the one we rejected.** "The $40 Billing Rule That Caused East Palestine": no record gives $40,
   and the NTSB's probable cause is the bearing's failure; the film itself says no investigator links the billing line
   to the cause. A viewer who knows the case reads it as clickbait (trust), and a company named in it reads it as a
   claim we can't support (legal risk). Package title 1, "East Palestine's Alarm Line Came From a Billing Rule", says
   the same hook on the record.
3. **We can't see our own numbers.** The token has no Analytics scope (HTTP 403), so watch hours, retention, CTR and
   traffic sources come only from Studio.
4. **No Shorts and no engagement signal.** Shorts views earn no watch hours, but they are the cheapest way to reach the
   1,000 subscribers, and every subscriber is notified of the next long film.

## The maths of 4,000 hours by 31 JAN 2027 (12 weeks)
4,000 hours is 240,000 minutes. If a viewer watches about 6 minutes of a 15–20 minute film (an assumption until
Studio gives our real figure), that is **about 40,000 views**; with about 22 films out by then, about 1,800 views a
film. That is a stretch for a channel starting at zero, so the plan aims at it and treats **8,000 hours inside the
rolling year** as the floor.

**What earns watch hours fastest:**
- **Long-form stays the engine.** Only long-form public views count; a 15–20 minute film watched well earns three to
  five times the hours of a 5 minute one. Shorter films would cut hours, not add them.
- **Case choice is the biggest lever.** Cases people already search for, first: the final reports YouTube covered too
  early (Key Bridge, the Potomac midair, UPS 2976, Titan), then evergreen giants (Challenger, Columbia, the 737 MAX
  MCAS story, Deepwater Horizon, Hyatt Regency).
- **The case name first** in the title, thumbnail, description line 1 and the first spoken minute.
- **Every film feeds the next:** end screen and playlist to the next film of the same kind, a pinned comment that asks
  a real question.
- **Shorts for subscribers:** two or three per film, each linked to its film.
- **Speed:** the reusable scene kit cuts build time; the four owner gates stay.

## This week
**The owner (about 10 minutes, from the phone):**
1. Upload *The Four Missing Bolts* from Drive `four-missing-bolts/renders/four-missing-bolts_master_4k_marcus.mp4`
   with `films/four-missing-bolts/youtube/package.md` (title 1, thumbnail G, description, chapters, SRT).
2. Change the East Palestine title to package title 1 (Studio → the video → Details).
3. Give us the numbers: either Studio screenshots once a week (Analytics → Overview, Reach, Engagement; each video's
   retention curve), or a re-authorised token with the `yt-analytics.readonly` scope.

**Us:** Shorts from both live films (three each, 9:16, linked to the film); the case order re-ranked by search demand;
Key Bridge (Tuesday) and transformers (Friday) into treatment.
