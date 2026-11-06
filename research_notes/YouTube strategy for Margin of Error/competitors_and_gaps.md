# Competitive landscape: YouTube channels on corporate failures, engineering disasters, accident investigations and business documentaries (2024–2026)

**Method and dating.** (1) Live scrape of each channel's public `/videos` tab on **2026-11-06** (subscribers, video count,
the 24 most recent uploads with views, relative age and length), parsed from YouTube's own page data. (2) Live YouTube
search pages on 2026-11-06 for each named case. (3) Top comments (YouTube's default "top" order, first page, ~20 per
video) scraped on 2026-11-06 from seven competitor videos. (4) The repo's own scan of 1,045 long videos via the YouTube
Data API on 2026-11-02 (`docs/research/2026-11-02_youtube_scan.csv`, lifetime views on that date). (5) A few web
searches on platform policy and AI-voice reception.
"Median views" = median of the last 24 uploads (all ages mixed, so recent uploads are under-counted). Relative ages
("1y ago") are YouTube's own rounding. Confidence: **strong** = read directly off YouTube's page or API on the date
given; **medium** = derived/computed from those numbers or from one decent secondary source; **weak** = from prior
knowledge not re-verified in this session, a single marketing blog, or Reddit-type sources.

Channel URL pattern used for every scraped profile: `https://www.youtube.com/@<handle>/videos`; video URL pattern
`https://www.youtube.com/watch?v=<id>`.

---

## 1. Channel profiles (who they are, how big, how often, how they look and sound)

### Takeaway
The big incumbents split into three camps that do not overlap: **aviation-accident narrators** (Mentour, Green Dot,
Disaster Breakdown, Captain Steeeve, Mayday) who stay in the cockpit; **business-story channels** (ColdFusion, Modern
MBA, Wendover, Company Man, GEN, More Perfect Union, MagnatesMedia) who tell the money story with thin or no
engineering; and **engineering-failure channels** (Practical Engineering, Plainly Difficult, Brick Immortar, Fascinating
Horror, USCSB) who solve the mechanism but treat the boardroom lightly. Several well-known names (MagnatesMedia,
LEMMiNO, Business Casual, Mustard) are dormant or near-dormant as of Nov 2026.

### Cited Findings

**A. Business / corporate documentaries**

| Channel | Subs (06 NOV 2026) | Typical length | Cadence (last 24 uploads) | Median views, last 24 | Top recent | Confidence |
|---|---|---|---|---|---|---|
| ColdFusion (@ColdFusion) | 5.26M, 590 videos | ~19 min | ~weekly; 24 uploads in ~7 months | ~1.0M | "Why Building AI Data Centres Isn't Working Anymore" 1.6M (4 mo); "The AI Industry is a Complete Mess" 1.5M | strong |
| Company Man (@companyman114) | 1.8M, 503 videos | ~11–12 min, fixed | ~weekly or faster (24 in ~5 months) | ~0.17M | "Gatorade vs. Powerade" 625K | strong |
| Modern MBA (@ModernMBA) | 845K, 84 videos | ~41 min | ~monthly (15 of 24 inside 12 months) | ~0.29M | "The Crumbling Business of Marijuana" 1.7M (1y); "Why Buffets Suddenly Disappeared" 834K (1 mo) | strong |
| Wendover Productions (@Wendoverproductions) | 4.92M, 291 videos | ~19 min | ~2/month (24 in 11 months) | ~1.05M | "How the Channel Tunnel Works" 2.3M (2 mo) | strong |
| MagnatesMedia (@MagnatesMedia) | 1.86M, 255 videos | ~33 min | **No upload newer than "1y ago"** | ~0.75M | "Rockefeller: The World's First Billionaire" 7.7M (2y) | strong (dormancy = medium, inferred from upload ages) |
| Business Casual (@BusinessCasual) | 1.15M, 91 videos | ~9 min | **Newest upload "4y ago": dormant** | ~0.38M | "J.P. Morgan Documentary" 5.3M (6y) | strong |
| GEN | 819K (02 NOV 2026, API) | ~21–23 min | active 2026 | — | "How Private Equity Turns Your Favorite Channels Into Slop" 5.2M (Apr 2026); "How Private Equity Killed Fast Food" 1.79M (Aug 2026) | strong (repo CSV + search page) |
| More Perfect Union (@moreperfectunion) | 4.18M, 2K videos | ~15 min | several/week | ~1.2M | "I Tracked Down the Company Ruining Fruit" 9.5M (2 mo) | strong; framing is labour/advocacy (medium, from titles/comments) |
| fern (@fern-tv) | 5.65M, 147 videos | ~29 min | ~weekly | ~4.15M | "The Death of Educational Content on YouTube" 11M; "Disneyland's Most Preventable Tragedy" 3.54M (Jan 2026); "The 13-Year Investigation Into Flight 103" 4.31M (Mar 2026) | strong |
| neo (@neoexplains) | 3.05M, 80 videos | ~19 min | slow (4 of 24 in 12 months) | ~6.05M | "The Deepwater Horizon Disaster" 5.81M (May 2025) | strong |

**B. Engineering / science**

| Channel | Subs | Length | Cadence | Median views | Top recent | Conf. |
|---|---|---|---|---|---|---|
| Practical Engineering (@PracticalEngineeringChannel) | 4.84M, 253 videos | ~19 min | ~2/month | ~1.05M | "Stopping the Unstoppable" 5.5M (2 mo); "The Wild Story of the Taum Sauk Dam Failure" 11.5M (Oct 2024); "The Mind-Blowing Flaw That Flooded New Orleans" 2.0M (Jul 2026) | strong |
| Real Engineering (@RealEngineering) | 5.12M, 297 videos | ~23 min | ~monthly (11 of 24 in 12 months) | ~1.5M | "NASA's Plutonium Problem" 4.1M (1y); "How the Boeing 787 Works" 2.55M (May 2025, 65 min) | strong |
| Veritasium (@veritasium) | 21.4M, 547 videos | ~34 min | ~2/month+ | ~9.7M | "The Insane Real Engineering of the Nazi Enigma Machine" 21M; "The Biggest Chemical Coverup in History" (3M/PFAS) 37.4M (May 2025) | strong |
| Kyle Hill (@kylehill) | 2.83M, 488 videos | ~15 min | ~2–3/month | ~0.51M | "Chernobyl's Breach is Worse Than Anyone Thought" 1.4M | strong |
| Asianometry (@Asianometry) | 968K, 744 videos | ~22 min | ~2/week | ~0.22M | ~0.4M ceiling recently (semiconductors, power) | strong |
| Mustard (@MustardChannel) | 2.4M, 61 videos | ~14 min | **3 uploads in 12 months** | ~7.25M (lifetime-heavy) | "What Happened To The Nautilus?" 20M (2y) | strong |
| The B1M (@TheB1M) | 4.09M | ~17 min | several/week | ~1.3M | "The Grenfell Tower Fire: London's High-Rise Scandal" 1.30M (Jun 2025) | strong |

**C. Disaster / accident narrators**

| Channel | Subs | Length | Cadence | Median views | Top recent | Conf. |
|---|---|---|---|---|---|---|
| Plainly Difficult (@PlainlyDifficult) | 1.1M, 404 videos | **~11 min now** (was 25–41 min in 2022) | ~weekly (24 in 5 months) | ~0.22M | "Every Corner Cut Led to 27 Lives Lost" 626K (2 mo); Key Bridge film "Instant Collapse" 130K (Mar 2026) | strong |
| Fascinating Horror (@FascinatingHorror) | 1.46M, 471 videos | ~11 min, fixed | ~2/week | ~0.44M | "This Led To The Sterile Cockpit Rule: Eastern Airlines 212" 2.3M (1 mo) | strong |
| Brick Immortar (@BrickImmortar) | 402K, **53 videos** | 30 min → now **1h40–3h15** | 2 uploads in 12 months | ~1.6M | "OFFSHORE NIGHTMARE: Texas Tower 4" 2.5M (1y); "A COLLISION OF BLAME: … Key Bridge" 545K (3 mo, 1h50) | strong |
| Disaster Breakdown (@DisasterBreakdown) | 263K, 190 videos | ~49 min (up to 1h28) | ~bi-monthly | ~0.28M | "The BOEING 737 MAX Crashes: A Comprehensive Analysis" 0.58M (Mar 2024, 97 min) | strong |
| Mentour Pilot (@MentourPilot) | 2.54M, 821 videos | ~44 min | ~weekly | ~1.0M | "This Should NOT Have Been POSSIBLE!" 1.8M (7 mo); "Boeing 737MAX BlowOut!! The Scandal behind Alaska Airlines flight 1282" 1.95M (Mar 2024) | strong |
| Mentour Now! (@MentourNow) | 646K | ~23 min | several/week (news) | ~0.31M | "The FlyDubai Story Just Got Even CRAZIER!" 2.2M (3 wk) | strong |
| Green Dot Aviation (@GreenDotAviation) | 631K, 102 videos | ~34 min | ~monthly | ~0.84M | "What HAPPENED Emirates 521??" 1.9M (1y); "What Netflix got WRONG – MH370" 13.3M (Dec 2023) | strong |
| Captain Steeeve (@CaptainSteeeve) | 1.27M, 1.1K videos | ~19 min | daily-ish, breaking news | ~0.56M | Learjet Palm Beach crash films 5.0M and 3.7M within 1–3 days (Nov 2026) | strong |
| 74 Gear (@74gear) | 1.41M, 333 videos | ~18 min | ~monthly+ | ~0.47M | "Delta Pilot Arrested 20 Minutes Before Departure" 11M (1y): pilot-life/news, not investigation | strong |
| Mayday: Air Disaster (@MaydayAirDisaster) | 1.13M, 1.5K videos | ~50 min (TV episodes) | many/week | ~0.12M recent | older uploads 4–6M (repo CSV) | strong |
| Air Safety Institute (@AirSafetyInstitute) | 242K, 305 videos | ~6 min | weekly+ | low (most <0.1M) | "Accident Case Study: High Desert Disaster" 217K | strong |

**D. Official channels (the record itself)**

| Channel | Subs | Length | Cadence | Median | Top | Conf. |
|---|---|---|---|---|---|---|
| USCSB (@USCSB) | 431K, 106 videos | ~15 min animations | ~every 1–3 months | ~0.70M (lifetime) | "The Danger of Popcorn Polymer: TPC Group" 3.8M (3y); "Blowout in Oklahoma" 4.36M (2019); recent animations 0.4–0.65M each (BP-Husky 643K, Foundation Food Group 647K) | strong |
| NTSBgov (@NTSBgov) | 115K, 859 videos | animations 4–7 min; hearings 4–9 h | many/month | ~0.03M | "NTSB Animation – Engine-to-Wing Attachment Design" 378K (5 mo); DCA midair animation 348K; East Palestine hearing presentations ~7–8K each | strong |

**E. General-history / big-faceless channels (adjacent)**

| Channel | Subs | Length | Cadence | Median | Conf. |
|---|---|---|---|---|---|
| LEMMiNO (@LEMMiNO) | 5.93M, 171 videos | ~19 min | **no upload newer than "1y ago"** | lifetime 7.4M (Cicada 3301 43M, MH370 30M) | strong |
| Johnny Harris (@johnnyharris) | 8.01M | ~43 min | ~weekly | ~3.65M; geopolitics, outside our domain | strong |
| Thoughty2 (@Thoughty2) | 5.7M, 1K videos | ~24 min | ~monthly+ | ~0.61M | strong |
| Simple History (@Simplehistory) | 5.12M, 1.4K videos | ~10 min | several/week | ~0.29M | strong |

**Face / narration / documents (qualitative):**
- Faceless with a human voice: Plainly Difficult, Fascinating Horror, Brick Immortar, Disaster Breakdown, Business Casual, MagnatesMedia, Company Man, ColdFusion (host voice, rarely on camera), Modern MBA, Wendover, Real Engineering, LEMMiNO, Simple History, neo, fern. — weak (prior knowledge, not re-verified this session).
- On camera: Mentour Pilot, Captain Steeeve, 74 Gear, Practical Engineering (partly), Veritasium, Kyle Hill, Johnny Harris, More Perfect Union reporters. — weak (prior knowledge).
- Brick Immortar viewers explicitly credit "real subtitles", "not using AI", "a cable demo" (practical demonstration) and long research time: top comments on the Key Bridge film — [YouTube d8o54wmXpV0](https://www.youtube.com/watch?v=d8o54wmXpV0) (strong; comments scraped 06 NOV 2026).
- Use of primary documents: CSB and NTSB channels are the documents (animations of their own findings); Mentour, Green Dot, Disaster Breakdown and Captain Steeeve routinely read final-report text on screen; business channels (ColdFusion, Wendover, Modern MBA, Company Man) rarely show filings, relying on press reporting. — weak/medium (prior knowledge plus title evidence such as "One Of The WORST Reports I've EVER Read!", Mentour Pilot, 1.7M, strong for the title).

**Newer 2024–2026 breakouts (from the repo scan, lifetime views 02 NOV 2026, strong):** The Fool (91.5K subs) "OceanGate Is Worse Than You Thought" 3.24M (May 2026); Jet Crumbs (35K) "How Boeing Strategically Killed The A380?" 1.8M (Mar 2026); Cowl Unit Productions (19.3K) "How Norfolk Southern PURGED 703 Locomotives" 70K (Dec 2025); Business Explains (240K) hospital/CEO film 0.84M; GEN 5.2M (Apr 2026); fern's disaster-adjacent films 3.5–4.3M (2026). Source: `docs/research/2026-11-02_youtube_scan.csv` (repo), video ids in that file.

### Inferences
- The most-subscribed "names" in the brief are not the most active competitors: MagnatesMedia, LEMMiNO, Business Casual and Mustard have produced little or nothing for about a year (medium). Live competition is ColdFusion, Wendover, Modern MBA, GEN, fern, More Perfect Union (business) and Mentour, Captain Steeeve, Plainly Difficult, Fascinating Horror, Brick Immortar (disaster).
- Two winning shapes coexist: **short and frequent** (Plainly Difficult and Fascinating Horror at ~11 min, 1–2/week, 0.2–0.5M median) and **rare and huge** (Brick Immortar: 53 videos, 1–3 h, ~1.6M median; Veritasium, fern). Our 16–22 min, ~monthly cadence sits between them and must win on depth per minute (medium).
- The official channels prove demand for the record itself: CSB animations average ~0.4–0.7M with zero packaging craft; NTSB animations reach 0.3–0.4M (strong numbers, medium inference).

### Gaps
- No verified per-channel 2024–2026 subscriber growth (Social Blade / Playboard not fetched); only point-in-time counts.
- GEN's handle/ID not resolved (scrape failed); its sub count is from 02 NOV 2026 API data.
- "Swiss Cheese"-named accident channels: none found with traction in searches; not profiled.
- Face/voice attributes not re-verified per channel this session (marked weak).

---

## 2. Case-by-case: which videos exist on our launch-slate cases, and which angles are missing

### Takeaway
Every case has strong *event* coverage (breaking news, the crash or collapse retold, the cockpit or the hull); almost
none has a film that ties a **dated corporate decision** in the record (SEC filing, docket exhibit, court document) to
the **physical margin it removed**. The "final report is out" moment is served by news clips, 4–9 hour official
hearings, and a crowd of tiny faceless channels with a few dozen views each.

### Cited Findings (views lifetime; 02 NOV 2026 API scan unless "06 NOV" = live search)

**East Palestine derailment (Norfolk Southern, Feb 2023)**
- More Perfect Union, "How A Multibillion Dollar Company Blew Up A Train", 1.29M (Jul 2025), labour/advocacy frame; its top comments are overwhelmingly partisan and anti-corporate ("lobbying is legal bribery", Trump/Vance arguments, "THE CORPORATION'S ARE THE GOVERNMENT") — [YouTube fwELoxAAJWY](https://www.youtube.com/watch?v=fwELoxAAJWY) (strong)
- The Real News Network, "Railroad workers explain why Wall St is to blame", 511K (Feb 2023); Bloomberg Originals 51K (May 2023); NTSB media availability 25K; NTSB hearing presentations ~7–8K each (06 NOV live search) (strong)
- Cowl Unit Productions (19.3K subs) "How Norfolk Southern PURGED 703 Locomotives" 70K (Dec 2025): railfan comments link PSR to cost cuts ("PSR – Trying to cheat physics") — [YouTube ztMpiZV8X1E](https://www.youtube.com/watch?v=ztMpiZV8X1E) (strong)
- Last Week Tonight "Freight Trains" 7.0M (Dec 2023), the biggest PSR film (strong)
- **Missing:** a neutral film from the NTSB final report and docket (hot-bearing detector spacing and thresholds, the vent-and-burn decision record) joined to Norfolk Southern's documented operating/capex decisions in SEC filings (medium).

**Alaska Airlines 1282 door plug (Jan 2024)**
- Mentour Pilot "The Scandal behind Alaska Airlines flight 1282" 1.95M (Mar 2024, 41 min) — before the NTSB final report (strong)
- CBS Evening News pilot interview 196K; NTSB media brief 46K; NTSB investigative hearing Day 1 20K, Day 2 8.8K (8 h each); The Boeing 737 Technical Channel preliminary report 26K (strong)
- Live search 06 NOV 2026 for "Alaska 1282 NTSB final report": **a swarm of new ~9–13 min faceless films posted in the last 1–3 weeks with 7–260 views each**: "Drawn to Failure" 7 views, "OSF" 76, "Dissected" 260, "Lessons Logged" 13, "IN PERSPECTIVE" 14, "Cause Ledger" 11, "Final Report" (channel) 54 (strong)
- **Missing:** a film from the final report + hearing exhibits that shows the paperwork chain (the removal record that did not exist) and Boeing's documented production-rate and quality decisions. The template-faceless attempts exist but reach nobody (medium).

**Boeing 737 MAX (2018–2019 crashes and aftermath)**
- FRONTLINE "Boeing's Fatal Flaw" 5.33M (2021) and its 2024 update 3.77M; Mayday "A Crash That Made Boeing Change Their System" 5.44M; 60 Minutes Australia 3.05M (2019); Mentour Now! "Designed by Clowns!" 1.34M (Dec 2024); Plainly Difficult 1.21M; Explorist "The Disturbing Downfall of Boeing" 1.09M; Wendover "How Boeing Lost Its Way" 2.81M (Feb 2024); ColdFusion "Boeing's Downfall [Greed Over Safety] feat. Mentour" 1.64M (Feb 2024); Disaster Breakdown 0.58M (97 min) (strong)
- **Missing:** least-open of all cases. Possible edge only in specific record sets (DOJ deferred prosecution agreement, House T&I report, MCAS single-sensor design documents) shown as exhibits (medium/weak).

**Baltimore Key Bridge / MV Dali (Mar 2024)**
- Brick Immortar "A COLLISION OF BLAME" 542–545K (Jul 2026, 1h49); Oceanliner Designs 337K (Mar 2024); What's Going on With Shipping? NTSB report film 302K (Nov 2025); jeffostroff "NTSB: Scary Wire ERROR…" 220K (Nov 2025); Daily Mail timeline 211K; Plainly Difficult 130K (Mar 2026); NTSB board meeting 11K; NTSB media briefing 26K (strong)
- Brick Immortar's commenters praise detail on the flushing-pump bypass, "undervoltage release device", fracture-critical spans and a physical cable demonstration — [YouTube d8o54wmXpV0](https://www.youtube.com/watch?v=d8o54wmXpV0) (strong)
- **Missing:** the bridge-owner/pier-protection side (who decided pier protection levels, the cost record) and the ship operator's documented maintenance practice set against the NBC-reported charges (May 2026, 93K views) — a pending case, to be said as pending (medium).

**Titan submersible (OceanGate, Jun 2023)**
- Two Bit da Vinci 15.9M (Jun 2023); Dr Chris Raynor 5.9M; 60 Minutes Australia James Cameron interview 4.86M (Dec 2024); 7NEWS "Fatal Flaws" 3.39M (Jun 2024); The Fool "OceanGate Is Worse Than You Thought" 3.24M (May 2026, 91.5K-sub channel); Scott Manley NTSB film 2.35M (Sep 2024) and "NTSB's Report On OceanGate Titan" 1.18M (1y ago); jeffostroff NTSB final 174K; CNN Coast Guard report 350K (strong)
- Top comments on Scott Manley's NTSB-report film are engineering-literate (ply orientation, hand-laid resin, acoustic monitoring ignored): "Real-time monitoring data doesn't work if you don't monitor the data" (3.2K likes) — [YouTube FAAQVntpk00](https://www.youtube.com/watch?v=FAAQVntpk00) (strong)
- Top comments on The Fool's film react to the founder's quotes ("At some point, safety is just pure waste") and regulation ("No one has died in submarines in years… because of the regulations", 27K likes) — [YouTube yKmK0ZnrW3M](https://www.youtube.com/watch?v=yKmK0ZnrW3M) (strong)
- **Missing:** little; the most saturated case. Only a record-led take (USCG MBI exhibits, the hull test data) is distinct, and demand is proven (medium).

**Grenfell Tower (fire 2017; Inquiry Phase 2 report Sep 2024)**
- Plainly Difficult 1.38M (Dec 2022); The B1M "London's High-Rise Scandal" 1.30M (Jun 2025); BBC News final-report coverage 110K; Grenfell Tower Inquiry's own channel (7.15K subs) panel statement 12.5K; Guardian/Express/Sky clips 0.4–8K (strong)
- Plainly Difficult's Grenfell comments: residents' and building professionals' testimony, anger at the borough and regulators, "7 years later and still no one has been held accountable" — [YouTube XcMy2QIYR34](https://www.youtube.com/watch?v=XcMy2QIYR34) (strong)
- **Missing:** a film built on the Inquiry Phase 2 findings about the cladding/insulation manufacturers' test and marketing record. **UK contempt risk applies while prosecutions are pending** (medium).

**Post Office Horizon (UK)**
- Live search 06 NOV 2026: "Scandal" channel "The British Post Office Scandal: Worse than you Know" 473K (2y); London Standard investigator clip 943K (7 min); Good Morning Britain "Full Story (So Far)" 286K; Channel 4 News "secret Fujitsu contract revealed" 278K (10 mo); Computerphile 219K (5y) (strong). ColdFusion's film ~0.44M per the repo's 02 NOV landscape note (medium: from our own earlier note, not re-checked)
- **Missing:** no long-form, document-led film above ~0.5M; the Inquiry evidence (Fujitsu/Post Office documents) is vast and public. But it is software, not physics, so it fits our "mechanism" rule only loosely (medium).

**CrowdStrike outage (19 JUL 2024)**
- Dave's Garage 2.19M (13 min); Fireship 2.48M and 1.38M (4–6 min); Computerphile 300K; The PrimeTime "IT WAS A REGEX?!? – Full CrowdStrike Report Released" 344K (51 min); NationSquid 150K; all ~2 years old (strong)
- **Missing:** no long-form documentary; coverage is developer explainers. Corporate angle (release-process decisions, the RCA document, SEC disclosures, Delta litigation) is unclaimed (medium). Outside our "physical failure" core.

**Camp Fire / PG&E (Nov 2018)**
- FRONTLINE "Fire in Paradise" 1.94M (2019); Golden Eagle Films 325K (7y); AJ+ 179K; ABC10 "Fire – Power – Money" series 13–119K (2020–2022); nothing notable since 2022 except a 63-view faceless film (strong)
- **Missing:** the clearest gap on the list: the Caribou-Palermo line's documented maintenance/capex record (CPUC filings, the Butte County DA report, PG&E's guilty plea in 2020 per court record) with the physics (C-hook wear, the worn hanger hole) solved. No one has done it on YouTube since FRONTLINE (medium; plea and C-hook details must be confirmed from primary records before use).

### Inferences
- **Case openness, most to least open:** Camp Fire/PG&E > East Palestine (neutral version) > Alaska 1282 (final-report version) > CrowdStrike > Post Office > Key Bridge > Grenfell > 737 MAX > Titan (medium).
- The tiny-faceless swarm on Alaska 1282 shows the "final report" angle alone is not enough; what is missing is quality and trust you can see (medium).

### Gaps
- No view data on non-English versions or on Netflix/streaming documentaries ("Downfall: The Case Against Boeing" etc.), which shape what viewers already know.
- Post Office ColdFusion figure not re-verified on 06 NOV.

---

## 3. What commenters ask for, praise and criticise

### Takeaway
On engineering-led films, top comments are **experts adding detail and thanking the creator for accuracy, time taken
and "not using AI"**; on advocacy films they are **partisan arguments**. Viewers reward patience (long gaps between
uploads are forgiven), caption quality and practical demonstrations.

### Cited Findings
- Brick Immortar (Key Bridge): "Your diligence and care for accuracy are what keep us sticking by you"; "Thank you for using real subtitles… Also thanks for not using AI"; "This is the one we've all been waiting for. We are thankful for you taking your time to get all the facts" (1.3K likes); "Doing your own cable demo is amazing!!!"; small corrections from locals (channel name origin at 30:00) — [YouTube d8o54wmXpV0](https://www.youtube.com/watch?v=d8o54wmXpV0) (strong)
- Experts self-identify and extend the mechanism: "Electrical engineer working in marine drilling here…", "retired Naval Engineering Officer…" (Brick Immortar); "Former composite M&P here…" (3.6K likes) and a commenter who says he sent OceanGate a pro-bono window analysis (Scott Manley) — [d8o54wmXpV0](https://www.youtube.com/watch?v=d8o54wmXpV0), [FAAQVntpk00](https://www.youtube.com/watch?v=FAAQVntpk00) (strong)
- Ignored warnings are the emotional hook: "Crazy how the early warning system actually worked and was just ignored" (11K likes) — [FAAQVntpk00](https://www.youtube.com/watch?v=FAAQVntpk00) (strong)
- The money line drives top comments on business films: "The five largest carriers spent 17 million dollars lobbying to block the bill. There you are. We found the problem." (4.6K) — [fwELoxAAJWY](https://www.youtube.com/watch?v=fwELoxAAJWY) (strong); several top comments there are partisan (Trump, JD Vance, EPA) (strong)
- Grenfell: residents, neighbours and housing professionals share first-hand accounts; anger at regulators as well as the borough — [XcMy2QIYR34](https://www.youtube.com/watch?v=XcMy2QIYR34) (strong)
- AI backlash in documentaries is reported in news (e.g. complaints about AI-generated narration in a Netflix documentary, Feb 2025; a YouTube true-crime documentary accused of AI use) but I found **no rigorous study** isolating viewer reaction to AI narration — [Dexerto](https://jamtest.dexerto.com/tv-movies/jcs-jim-cant-swim-ambers-afternoon-true-crime-complaint-ai-allegations-3209913) (weak); a claimed "43% lower watch time" for AI narration has no named source — [Rewarx](https://www.rewarx.com/blogs/youtube-ai-slop-crackdown-audiences-reject) (weak, do not use)

### Inferences
- Our target audience shows up in the comments as working engineers who will check the mechanism; being right in detail earns the most-liked comments, and errors will be caught publicly (medium).
- Advocacy framing buys views but turns the comment section into a partisan fight, which conflicts with our "both halves of a split US" rule (medium).

### Gaps
- Only first-page top comments for 7 videos (3 others failed to load: Mentour 1282, Plainly Difficult Key Bridge, B1M Grenfell); no systematic sentiment count.
- No comment sample from an AI-voiced faceless documentary with traction.

---

## 4. Packaging: title formulas and thumbnail styles of the most-viewed videos

### Takeaway
Winning titles promise a **hidden reason, a verdict or an emotional judgment** about one named case, in 4–8 words;
lists and generic "explained" titles underperform. Several channels use a fixed brand formula.

### Cited Findings (titles strong, read off YouTube; thumbnail styles weak, not viewed this session)
- "What REALLY happened" / "The Real Reason": "Oceangate Submarine Disaster – What REALLY Happened" 15.9M; "The Real Reason The Boeing Starliner Failed" 3.3M (repo note) — repo CSV (strong)
- Worse-than-you-think / hidden: "OceanGate Is Worse Than You Thought" 3.24M; "Chernobyl's Breach is Worse Than Anyone Thought" 1.4M; "Meta's Legal Troubles Are Worse than You Think" 1.3M (ColdFusion) (strong)
- Moral verdict about the decision: "Every Corner Cut Led to 27 Lives Lost" 626K (Plainly Difficult's best recent); "Disneyland's Most Preventable Tragedy" 3.54M (fern); "How A Multibillion Dollar Company Blew Up A Train" 1.29M (strong)
- "How [company] [verb]ed [thing]": "How Boeing Lost Its Way" 2.81M; "How Private Equity Killed Fast Food" 1.79M; "How A Single Hedge Fund Killed Chipotle" 0.60M (strong)
- Brand formulas: Brick Immortar "ALL-CAPS VERDICT: The Loss of X" (e.g. "DISASTROUS INDIFFERENCE: The Loss of SS El Faro" 4.8M); Company Man "The Decline of X…What Happened?"; Fascinating Horror "[hook] | Fascinating Horror"; CSB "[Two-word verdict]: [Event] at [Company]" e.g. "Designed to Fail: Chemical Release at LyondellBasell" 711K (strong)
- Aviation channels lean on caps and exclamation: "This Should NOT Have Been POSSIBLE!", "WHY Did They Flip The Switch BACK?!" (Mentour, 1.8M / 2.36M) (strong)
- The zero-view faceless swarm uses literal, report-summary titles: "Alaska Airlines Door Plug: What the NTSB Final Report Found" (7 views), "Four bolts nobody reinstalled: what the NTSB found inside Alaska 1282" (13 views) (strong)

### Inferences
- A literal "what the report found" title is the losing pattern; a verdict on the decision ("preventable", "every corner cut", "worse than you thought") plus a named case wins (medium). Brick Immortar and CSB show a clinical, verdict-style title works without hype words (medium).

### Gaps
- Thumbnails not inspected (no image analysis this session). Prior knowledge (weak): high-contrast single object or wreck, red arrows/circles on aviation channels, large faces on Mentour/Captain Steeeve, minimal 2–3-word text.

---

## 5. Faceless and AI-voiced channels in this niche: performance and reception

### Takeaway
Faceless with a distinctive human voice is the dominant successful format (Plainly Difficult, Fascinating Horror,
Brick Immortar, LEMMiNO, fern, neo). Template faceless/AI channels on the same cases are numerous and almost
universally ignored, and YouTube tightened enforcement against mass-produced content in 2025–2026.

### Cited Findings
- New faceless films on Alaska 1282 (published 1–3 weeks before 06 NOV 2026) have 7–260 views each across at least 7 channels; a 4-day-old "Evidence Drawer" Titan Short has 101 views (strong, live search)
- Repo scan found more zero-view faceless channels on our exact pitch ("The 8-K Dossier", "Vanishing Assets", "The Fragile Grid", "Red Ink Law") — `docs/research/2026-11-02_landscape.md` (strong, repo)
- YouTube search for "faceless documentary AI voice engineering disaster" returns mainly how-to-automate tutorials ("1 Click = Full Vox-Style AI Documentary", "I Reverse Engineered a Viral AI Documentary Channel" 15K views), showing the supply side is crowded (strong, live search)
- YouTube renamed its "repetitious content" monetisation rule "inauthentic content" in July 2025, described by TeamYouTube as a minor update; enforcement aimed at mass-produced, templated content rather than AI tools as such — [AIR Media-Tech](https://air.io/en/news-air/how-youtube-treats-ai-in-2026-new-update); [The Next Web](https://thenextweb.com/news/youtube-ai-slop-crackdown-faceless-creators-collateral-damage) (medium)
- Reported January 2026 terminations of 16 channels (35M subscribers, 4.7B views) under the policy — multiple secondary sources, not verified against YouTube's own statement (weak); a claim of 18,000 suspensions is uncorroborated (weak, do not use)
- Kapwing audit: 104 of the first 500 videos (21%) shown to a new signed-out account were AI-generated — reported via secondary coverage (weak/medium; primary not fetched) — [eWEEK](https://www.eweek.com/fr/news/ai-slop-conquers-youtube-algorithm/)
- Faceless human creators report collateral demonetisation — [The Next Web](https://thenextweb.com/news/youtube-ai-slop-crackdown-faceless-creators-collateral-damage) (weak/medium)
- ColdFusion itself made "YouTube is Already 20% AI Slop" (500K, 5 months ago), and GEN's anti-"slop" film hit 5.2M: the audience is primed to spot and reject slop (strong for views; medium inference)

### Inferences
- A synthetic voice is a known liability with this audience; our channel voice must sound clearly authored, and visible care (real exhibits, record ids, real captions) has to show in the first minute (medium).
- Channel-level enforcement means the whole catalogue must look non-templated (distinct cold opens, distinct builds per film) (medium).

### Gaps
- No public performance data for a successful AI-voiced channel in this exact niche; I found none with traction.
- YouTube's own policy page wording not fetched.

---

## 6. Gap analysis: what no one does well

### Takeaway
No active channel consistently delivers **the documented corporate decision that removed a safety margin, proven from
primary records (NTSB/CSB dockets, SEC filings, court records), with the physics solved, in a neutral voice**. Each
neighbour does one or two of the four parts.

### Cited Findings (the evidence for each "missing part" is above; summary of who does what)
- Physics solved, boardroom thin: Practical Engineering (Taum Sauk 11.5M), Scott Manley (Titan), Brick Immortar (Key Bridge), USCSB (sections 1–2) (strong for views; medium for "boardroom thin", from titles/comments)
- Boardroom told, physics thin and/or advocacy: Wendover, ColdFusion, GEN, More Perfect Union, Modern MBA (sections 1–2) (medium)
- Cockpit and crew, not the organisation: Mentour, Green Dot, Disaster Breakdown, Captain Steeeve, Mayday (repo landscape note) (medium)
- The record itself, unpackaged: NTSB and CSB channels (hearings 8–20K views; animations 0.3–0.7M) (strong)

### Inferences
- **Specific unclaimed slots:** (1) "final report is out" films that are *good* (the slot is crowded only by zero-view templates); (2) Camp Fire/PG&E from the record; (3) a neutral East Palestine film; (4) CSB cases with a corporate-decision layer (CSB itself already draws 0.4–0.7M on bare animations); (5) a document-led Post Office or Grenfell film for the UK (contempt rules permitting) (medium).
- **Format gap:** between the 11-minute weekly narrators and the 2-hour Brick Immortar epics there is room for a ~20-minute film with Brick Immortar-level accuracy plus the documents on screen (medium).
- **Trust gap:** commenters reward accuracy, captions and no-AI; no business channel shows the filing on screen (weak/medium).

### Gaps
- Not every competitor film was watched; "no one shows the documents" is an inference from titles, comments and prior knowledge, not a viewing audit.
