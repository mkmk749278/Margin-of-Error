# Who watches us in the US and the UK, and what earns them (research, 2026-11-03)

**Why this exists.** The channel is made for viewers in the US and the UK first (then Canada, Australia and European
tech hubs). Nobody on the production side lives in those markets, so how they watch, what they trust and how they
react is written down here from sources, and turned into rules (PLAYBOOK §4.1–§4.1c, §6.7, §13.8). Every figure below
has its source at the end. Our own reasoning is marked as ours.

---

## 1. How they watch: the TV set, the desk, and the phone
- **US: YouTube is the biggest single thing on American TV sets.** Nielsen's Media Distributor Gauge put YouTube at
  13.4% of all US TV usage in July 2025 (12.8% in June), the largest lead since the Gauge began; its share rose from
  7.9% in February 2023 to 11.6% in February 2025. The Gauge counts YouTube watched on TV sets (not the YouTube TV
  subscription service).
- **UK: YouTube is the second most-watched video service at home, behind only the BBC** (Ofcom, Media Nations 2025).
  In-home YouTube viewing grew 13% to about 39 minutes a day, 18 minutes of it on a TV set (informitv, from Barb and
  Ofcom). Ofcom also reported that over-55s doubled their time on the service.
- **What this means for us (our reading).** A large part of our audience sits 2–3 m from a television, in a lit or a
  dark room, and many are older; another part watches at a desk; the rest on a phone, usually turned sideways for a
  long film. The picture must read on all three, and the **phone held sideways at arm's length is the hardest case**
  for small text (§3 below). On a TV the viewer may look away for a moment, so **the number that matters is said,
  not only shown.**

## 2. What they trust, and what they react against
- **Most still prefer news without a point of view.** In 2020, 62% of UK and 60% of US respondents preferred news with
  no particular point of view (Reuters Institute Digital News Report 2020, as reported). Across all markets in 2026,
  45% prefer sources without a point of view, twice the 22% who want sources that share their view (DNR 2026).
- **The US is split down the middle on trust.** In September 2025, 56% of US adults had at least some trust in
  information from national news organisations, down 11 points from March 2025; 69% of Democrats against 44% of
  Republicans (Pew Research Center).
- **Trust in UK news has fallen a long way** (16 points since 2015, DNR 2025), and the UK is one of the most sceptical
  places about AI in news: 11% comfort with news made mostly by AI (DNR 2025). Across markets, people expect AI to make
  news cheaper (net +29) but **less trustworthy (net −18)** and less accurate (−8).
- **"AI slop" is now a named enemy, on the platform itself.** YouTube's CEO made "managing AI slop" a priority in his
  January 2026 letter; the July 2025 Partner Programme change renamed "repetitious content" to "inauthentic content"
  and targets mass-produced, templated uploads (slideshows, scrolling text, near-identical videos), applying to whole
  channels. Faceless template channels on our exact pitch already exist and get almost no views (our 2026-11-02 scan).
- **The record itself is now sensitive to AI.** In May 2026 the NTSB temporarily took its public docket system
  offline after people used AI tools to approximate cockpit voice recorder audio from spectrogram images in the UPS
  2976 docket. The NTSB: "The NTSB does not release cockpit audio recordings." Most dockets came back; some stayed
  under review (NPR, 30 May 2026). Aviation viewers saw this story; anything that looks like a reconstructed voice or
  a "recovered" recording will be read as the same thing.

**What this means for us (our reading).** These viewers are sceptical of three things at once: corporate PR, outrage
media and AI content. A faceless channel with a synthetic voice starts with the third strike against it. It wins them
only by being visibly more careful than everyone else: the real document on screen, the record id in the corner, the
finding said as a finding, the allegation said as an allegation, the correction pinned when we are wrong. That is
the channel's existing thesis; the research says it is also the only way in.

## 3. Reading on a TV, a desk and a phone (the numbers behind §6.7)
- **Reading speed needs a minimum size.** Reading research puts the critical print size (the smallest text read at
  full speed) at about 0.2° of visual angle for the lower-case x-height, about three times the acuity limit
  (Legge and colleagues; Chung, Mansfield & Legge 1998). Below it, reading slows, then fails.
- **Our arithmetic for a 1920×1080 frame.** A phone held sideways shows the 16:9 picture about 65–70 mm tall; at
  35 cm, 0.2° is about 1.2 mm, which is about 19 px of x-height, so a font of about 36 px (x-height ≈ 0.55 em in
  JetBrains Mono and Inter). The acuity limit (a third of that) is about 12–13 px of font: text below that cannot be
  read at all on a phone. A 55-inch TV at 2.5 m needs about 25 px for the same angle. So the phone is the binding case:
  **≥ 36 px for text to be read at a glance, ≥ 26 px for supporting labels, nothing that carries meaning below that.**
- **Contrast.** WCAG 2.2: 4.5:1 minimum for normal text (AA), 3:1 for large text (18 pt, or 14 pt bold), 7:1 enhanced
  (AAA). Video compression, TV room light and phone glare all lower contrast further, so small text should aim at 7:1.
  Our tokens (computed): `ink` 14.4:1 on a card, `sub` 6.9:1, **`muted` only 3.7:1 on a card and 4.1:1 on the void:
  below AA**, so `muted` is for decoration and large text only.
- **Safe areas.** EBU R95: action-safe margins 3.5% and graphics-safe margins 5% of the frame on every side, i.e. all
  text inside the central 90% (x 96–1824, y 54–1026 at 1920×1080).
- **Subtitles are big for a reason.** BBC guidance sets subtitle lines at about 8% of the picture height for 16:9
  (as reported); on-screen labels are not subtitles, but it shows the scale broadcasters use for text that must be
  read while the picture moves.

## 4. The law the films live under (why §9.6 exists)
- **England and Wales, Defamation Act 2013:** a statement is not defamatory unless it "has caused or is likely to
  cause serious harm" to the claimant's reputation (s.1(1)); for "a body that trades for profit", serious harm means
  "serious financial loss" (s.1(2)). Defences include truth (s.2), honest opinion (s.3) and publication on a matter of
  public interest (s.4). Our rule stays stricter than the law: findings attributed, allegations as allegations, no
  guilt without a verdict.
- **UK contempt of court, Contempt of Court Act 1981:** the strict liability rule applies to publications that create
  a substantial risk of serious prejudice while proceedings are "active"; in criminal cases they become active from
  an arrest, a warrant or a charge (Schedule 1). Regardless of intent. Before any UK case: check whether anyone has
  been arrested or charged.
- **The US:** different law, the same risk for us: a suit costs money whatever its merits. One standard for both.

## 5. How the two audiences differ, and what they share (our reading, from the above and the 2026-11-02 scan)
| | United States | United Kingdom |
|---|---|---|
| Institutions they know | NTSB, FAA, SEC, CSB, Congress hearings | AAIB, HSE, public inquiries, Parliament committees; may not know the NTSB by name |
| What to gloss once | a UK body ("the A - A - I - B, Britain's air accident investigator") | a US body ("the N - T - S - B, America's accident investigator") |
| Politics | trust split by party (Pew); regulation, unions and executives are loaded words | treat public bodies and companies alike: the record, not a side |
| Units in daily life | feet, miles, pounds, °F | mostly metric, with miles and mph on the roads |
| Dates | month first (01/05/2024 means January) | day first (01/05/2024 means May) |
| Spelling | American | British (they accept American spelling in a US record) |

**Shared:** both prefer evidence to adjectives, both distrust hype and PR, both know the big cases from the news and
will check us, both contain the experts the film is about (pilots, mechanics, engineers, union members, lawyers,
analysts) who will say in the comments exactly where we are wrong.

## 6. Ten rules that follow (all now in the playbook)
1. **Write for both halves of a split country.** No partisan words ("greed", "corporate fat cats", "woke",
   "deregulation" as a slur); show the dated decision and its documented effect, and let the viewer judge (§4.1c).
2. **No outsider's voice.** Never "in the West", "Americans love…", "the British way"; the channel speaks as a
   studio inside the story, in the record's own terms.
3. **Gloss each institution once** for the other country's viewers, then use its name.
4. **Dates as `05 JAN 2024`** on screen (never `01/05/2024`); times with their zone as the record gives them.
5. **The record's unit first, SI second**, as now; the narration says the record's unit.
6. **Respect the people inside the failure:** mechanics, inspectors, crews, union members. The film examines a
   system and its documented decisions, never sneers at workers or at a country.
7. **Never anything that looks like a recovered recording or a real person's voice** (the 2026 NTSB docket episode).
8. **Readable on a TV across the room and on a phone held sideways** (§6.7 sizes, contrast and safe area).
9. **Say the number that matters**; a TV viewer may not be looking.
10. **When we are wrong, say so first and plainly** (pinned correction, §13.8): these viewers forgive an error owned
    and punish one defended.

---

## Sources
- Nielsen Media Distributor Gauge: [February 2025](https://www.nielsen.com/news-center/2025/youtube-achieves-best-monthly-performance-to-date-and-pulls-ahead-in-nielsens-february-media-distributor-gauge/),
  [April 2025 (TV Technology)](https://www.tvtechnology.com/news/youtube-maintains-largest-share-of-tv-viewing),
  [July 2025 (informitv)](https://informitv.com/2025/08/26/youtube-increases-share-of-viewing/).
- Ofcom Media Nations 2025: [Ofcom summary](https://www.ofcom.org.uk/media-use-and-attitudes/media-habits-adults/tuning-into-youtube-uks-media-habits-revealed)
  (refused our fetch; figures read from coverage), [informitv, 30 July 2025](https://informitv.com/2025/07/30/the-rise-of-youtube-viewing-in-the-uk/),
  [ISPreview](https://www.ispreview.co.uk/index.php/2025/07/ofcom-youtube-and-streaming-is-slowly-taking-over-uk-tv-sets.html).
- Reuters Institute Digital News Report: [2025 executive summary](https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2025/dnr-executive-summary),
  [2026: can public demand for impartial news survive](https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2026/can-public-demand-impartial-news-survive-platforms-and-polarisation),
  2020 UK/US figures as reported by [Inside Story](https://insidestory.org.au/how-do-you-like-your-news) and
  [WGBH](https://www.wgbh.org/news/commentary/2020/06/24/trust-is-down-digital-subscriptions-are-up-and-the-demand-for-objective-news-is-falling).
- Pew Research Center: [media trust topline, May 2025](https://www.pewresearch.org/wp-content/uploads/sites/20/2025/05/SR_25.05.08_media-trust_topline.pdf),
  [trust in information topline, October 2025](https://beta.pewresearch.org/pewresearch-org/wp-content/uploads/sites/20/2025/10/SR_25.10.29_trust-in-info_topline.pdf).
- YouTube: [CEO letter coverage, Bloomberg, 21 Jan 2026](https://www.bloomberg.com/news/articles/2026-01-21/youtube-ceo-says-battling-ai-slop-a-top-priority-in-2026),
  [inauthentic content update, Search Engine Journal](https://searchenginejournal.com/youtube-targets-mass-produced-content-in-monetization-update/550337/),
  ["How this content was made" (Help 15447836)](https://support.google.com/youtube/answer/15447836?hl=en).
- NTSB docket and AI audio: [NPR, 30 May 2026](https://npr.org/2026/05/30/nx-s1-5835242/ntsb-cockpit-audio-cvr-reconstruction)
  (and its member-station copies, e.g. [KUNC](https://www.kunc.org/npr-news/2026-05-30/the-ntsb-tries-to-keep-cockpit-audio-recordings-private-ai-is-making-that-harder)).
- Reading size: [Legge & Bigelow 2011, "Does print size matter for reading?"](https://legge.dl8.umn.edu/sites/legge.psych.umn.edu/files/2020-08/Legge%20Bigelow%202011%20Does%20size%20matter%20for%20reading%3F%20A%20review%20of%20findings%20from%20vision%20science%20and%20typography.pdf),
  [Chung, Mansfield & Legge 1998](https://legge.dl8.umn.edu/sites/legge.psych.umn.edu/files/2020-08/psychophysics_of_reading._xviii._the_effect_of_print_size_on_reading_speed_in_normal_peripheral_vision_chung_mansfield_legge_1998.pdf).
- Contrast: [W3C, Understanding SC 1.4.6](https://w3c.github.io/wcag/understanding/contrast-enhanced.html),
  [WebAIM](https://webaim.org/articles/contrast/). Safe areas: [EBU R95](https://tech.ebu.ch/publications/r095).
  Subtitle size: [BBC subtitle-size talk](https://bbc.github.io/csun/how_big_should_subtitles_be/index.html).
- Law: [Defamation Act 2013, s.1](https://www.legislation.gov.uk/ukpga/2013/26/section/1) and
  [contents](https://www.legislation.gov.uk/ukpga/2013/26/contents); [Contempt of Court Act 1981](https://www.legislation.gov.uk/ukpga/1981/49/2022-02-11/data.pdf).
