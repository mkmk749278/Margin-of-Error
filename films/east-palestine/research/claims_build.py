"""Draft claims.csv for east-palestine: every quote checked against the downloaded source text."""
# RETIRED 2026-11-05: the fact-check (review/factcheck_v1.md) edited claims.csv directly; re-running this would overwrite those rows.
import csv, html, re, sys
from pathlib import Path
SRC = Path(sys.argv[1]); OUT = Path(sys.argv[2])
def norm(s):
    s = s.replace('’', "'").replace('‘', "'").replace('“', '"').replace('”', '"').replace('—', '-').replace('–', '-')
    return re.sub(r'\s+', ' ', s).strip().lower()
def htmltext(p):
    return html.unescape(re.sub(r'<[^>]+>', ' ', p.read_text(errors='ignore')))
def transcript(p):
    lines = []
    for l in p.read_text(errors='ignore').splitlines():
        if re.search(r'FREE STATE REPORTING|Court Reporting|D\.C\. Area|Balt\. & Annap\.', l) or re.fullmatch(r'\s*\d+\s*', l):
            continue
        lines.append(re.sub(r'^\s*\d{1,2}\s{2,}', '', l))
    return '\n'.join(lines)
R = 'https://www.ntsb.gov/investigations/AccidentReports/Reports/RIR2405%20CORRECTED.pdf'
H2 = 'https://data.ntsb.gov/Docket/Document/docBLOB?ID=16501748&FileExtension=pdf&FileName=DCA23HR001_NS%20Investigative%20Hearing.06-23-23.Day2-Rel.pdf'
PR = 'https://www.sec.gov/Archives/edgar/data/702165/000070216519000015/nspr-0811191.htm'
K19 = 'https://www.sec.gov/Archives/edgar/data/702165/000070216520000011/nsc-20191231.htm'
K20 = 'https://www.sec.gov/Archives/edgar/data/702165/000070216521000006/nsc-20201231.htm'
K22 = 'https://www.sec.gov/Archives/edgar/data/702165/000070216523000010/nsc-20221231.htm'
K23 = 'https://www.sec.gov/Archives/edgar/data/702165/000070216524000005/nsc-20231231.htm'
K25 = 'https://www.sec.gov/Archives/edgar/data/702165/000162828026006268/nsc-20251231.htm'
Q = 'https://data.ntsb.gov/Docket/Document/docBLOB?ID=16623716&FileExtension=pdf&FileName=CLASS%201%20WAYSIDE%20QUESTIONNAIRE%20RESULTS-Rel.pdf'
RULE = 'https://data.ntsb.gov/Docket/Document/docBLOB?ID=16604436&FileExtension=pdf&FileName=NS%20OPERATING%20RULE%20-%20DEFECTIVE%20EQUIPMENT%20DETECTORS-Rel.pdf'
CRS = 'https://www.congress.gov/crs_external_products/R/PDF/R47911/R47911.7.pdf'
RECS = 'https://www.ntsb.gov/investigations/Documents/East%20Palestine%20Safety%20Recommendations%20status%20as%20of%202-3-2025.pdf'
NS25 = 'https://norfolksouthern.investorroom.com/2024-06-25-Norfolk-Southern-Safety-Enhancements-Align-with-NTSB-East-Palestine-Final-Recommendations'
CD = 'https://www.govinfo.gov/content/pkg/USCOURTS-ohnd-4_23-cv-00517/pdf/USCOURTS-ohnd-4_23-cv-00517-4.pdf'
CL = 'https://www.govinfo.gov/content/pkg/USCOURTS-ohnd-4_23-cv-00242/pdf/USCOURTS-ohnd-4_23-cv-00242-22.pdf'
K21 = 'https://www.sec.gov/Archives/edgar/data/702165/000070216522000007/nsc-20211231.htm'
FR = 'https://www.govinfo.gov/content/pkg/FR-2024-07-17/html/2024-15691.htm'
P21 = 'https://www.sec.gov/Archives/edgar/data/702165/000155278121000163/e21086_nsc-def14a.htm'
TEXT = {
    R: norm((SRC / 'RIR2405.txt').read_text(errors='ignore')),
    H2: norm(transcript(SRC / 'docket/16501748.txt')),
    PR: norm(htmltext(SRC / 'pr_20190211.htm')),
    K19: norm(htmltext(SRC / 'tenk/nsc-20191231.htm')),
    K20: norm(htmltext(SRC / 'tenk/nsc-20201231.htm')),
    K22: norm(htmltext(SRC / 'tenk/nsc-20221231.htm')),
    P21: norm(htmltext(SRC / 'def14a_2021.htm')),
    K23: norm(htmltext(SRC / 'tenk/nsc-20231231.htm')),
    K25: norm(htmltext(SRC / 'tenk/nsc-20251231.htm')),
    Q: norm((SRC / 'docket/16623716.txt').read_text(errors='ignore')),
    RULE: norm((SRC / 'docket/16604436.txt').read_text(errors='ignore')),
    CRS: norm((SRC / 'status/crs_R47911_7.txt').read_text(errors='ignore')),
    RECS: norm((SRC / 'status/ntsb_recs_2025.txt').read_text(errors='ignore')),
    NS25: norm(htmltext(SRC / 'status/ns_20240625.htm')),
    CD: norm((SRC / 'status/gi/4.txt').read_text(errors='ignore')),
    CL: norm((SRC / 'status/gi242/22.txt').read_text(errors='ignore')),
    K21: norm(htmltext(SRC / 'tenk/nsc-20211231.htm')),
    FR: norm(htmltext(SRC / 'status/fr_2024_15691_gi.htm')),
}
ROWS = [
 ('On 03 FEB 2023 about 8:54 p.m., eastbound Norfolk Southern train 32N derailed 38 freight cars at milepost 49.5 in East Palestine, Ohio', R, 'On February 3, 2023, about 8:54 p.m., eastbound Norfolk Southern Railway (NS) train 32N derailed 38 mixed freight railcars at milepost 49.5', 'p. x'),
 ('The train had 3 locomotives and 149 cars, weighed 17,977 tons and was 9,309 feet long', R, 'the train weighed 17,977 tons and was 9,309 feet long', 'p. 3; about 1.76 miles. The spec title "Thirty-Mile Train" is wrong'),
 ('At 7:37 p.m. the Sebring HBD (MP 79.8) read the failing bearing at 38°F above ambient; no alert or alarm', R, 'At 7:37 p.m., train 32N passed over an HBD at MP 79.8 in Sebring, Ohio. The HBD recorded a temperature 38°F above ambient', 'p. 5; "The bearing temperatures did not result in any alert or alarm."'),
 ('Surveillance cameras in Salem showed a fire on wheelset 1 of the hopper car', R, 'The images showed a fire on wheelset #1 of the hopper car.', 'p. 6, fig. 5 (8:11–8:14 p.m.)'),
 ('At 8:13 p.m. the Salem HBD (MP 69.01) read the L1 bearing at 103°F above ambient', R, 'The HBD recorded a temperature 103°F above ambient on the L1 bearing of the hopper car', 'p. 6'),
 ("NS's non-critical alert threshold was 90°F above ambient", R, "temperature exceeding NS's 90°F above-ambient threshold for a non-critical alert", 'p. 7'),
 ('103°F was below the 170°F threshold that would have broadcast an alarm to the crew; the crew did not know', R, 'This measurement was below the 170°F threshold that would have triggered an alarm broadcast to the train crew, which remained unaware that a bearing was showing unusual behavior.', 'p. 104'),
 ('The Salem alert went to a desk, not to the crew', R, "did not broadcast an alarm to the train's crew", 'p. 7'),
 ('The desk analyst did not see the Salem alert while on higher-priority alerts; seeing it would not have prevented the derailment', R, 'immediately seeing the Salem HBD alert would not have prevented the derailment', 'p. 104; say both halves'),
 ('At East Palestine the train was doing about 43 mph; the limit was 50 mph', R, 'Locomotive event recorder data showed the train was traveling about 43 mph. The maximum authorized speed in the area was 50 mph.', 'p. 7'),
 ('The East Palestine HBD read 253°F above ambient and broadcast a critical alarm', R, 'this HBD recorded a temperature 253°F above ambient on', 'p. 7–8; "The HBD immediately transmitted a critical alarm."'),
 ('253°F was more than 50°F above the critical alarm threshold', R, 'Its exterior temperature measurement had reached at least 253°F, more than 50°F above the critical bearing alarm threshold.', 'p. 105'),
 ('The next detector after Salem was about 19 miles away', R, 'by the time the train reached the next HBD, about 19 miles away in East Palestine, the L1 bearing was already failing', 'p. 105'),
 ('The bearing separated less than a minute after the alarm, as the crew began to stop', R, 'The bearing separated less than a minute later, as the crew began to stop the train.', 'p. 106'),
 ("The crew's train handling and response to the alarm did not contribute (finding 1)", R, "the train crew's proper train handling and appropriate response to the bearing alarm and derailment", 'finding 1'),
 ('The bearing went from below the alert threshold to separated in about 30 miles', R, 'the bearing that led to the derailment went from below the alert threshold to separated in about 30 miles', 'p. 107'),
 ('The Salem alert did not reflect the true temperature of the bearing (finding 4)', R, 'did not reflect the true temperature and failing condition of the L1 wheel bearing', 'finding 4'),
 ('NS procedures (monitor only on a non-critical alert), detector limits and spacing did not give the crew adequate warning (finding 6)', R, 'did not give the train\'s crew adequate warning to stop the train before the suspect bearing failed and caused the derailment', 'finding 6'),
 ('Why the bearing failed is not known: the fire erased the evidence', R, "the root cause of the bearing's failure remains unclear", 'p. 111; answers the "$7 tube of grease" belief'),
 ('The heat erased traces of fatigue, loss of lubrication or water ingress', R, 'were erased by the high temperatures of the burn-off and subsequent fire exposure', 'p. 111'),
 ('NS did not inspect the hopper car; it was added at the TRRA yard', R, 'NS did not inspect the hopper car relevant to the East Palestine derailment because it had been added to the train in the TRRA yard', 'p. 86'),
 ('Insufficient evidence whether the TRRA inspection missed signs of failure (finding 3)', R, 'There is insufficient evidence to determine if the Terminal Railroad', 'finding 3'),
 ("The AAR definition of an overheated bearing is based on what makes a repair billable to the car's owner", R, 'the AAR definition of an overheated bearing is based on what makes a railcar repair billable to the railcar owner or lessor', 'p. 106; testimony of the AAR SVP'),
 ('Railroads choose thresholds balancing preventing bearing failures against avoiding unnecessary stops', R, 'balancing between preventing bearing failures and avoiding unnecessary stops', 'p. 106'),
 ("AAR Rule 36 defines an overheated bearing as at least 170 degrees above ambient", H2, 'an overheated bearing is defined as measured by a wayside detector at least 170 degrees above ambient temperature', 'hearing day 2, 23 JUN 2023, p. 214, NTSB question'),
 ('AAR witness: the thresholds are in the car repair billing rules', H2, "Those are thresholds in AAR's car repair billing rules which authorize the ability of a railroad to take a car out of service", 'p. 215, AAR (Mr. Rush)'),
 ('AAR witness: thresholds too low cause a lot of false stops', H2, "if you put the thresholds too low, you're going to have a lot of false stops", 'p. 215'),
 ('NTSB asked if the thresholds are a standard for removal and billing; the AAR answered "Correct."', H2, 'they are a standard at which bearings can be removed from service and billing and the car owners could be billed for it? MR. RUSH: Correct.', 'p. 216'),
 ('AAR witness: it is in the operating railroad\'s interest not to have derailments from hot bearings', H2, "it's in the interest of the operating railroad not to have derailments attributable to hot bearings", 'p. 216; the other side, always beside C26–C28'),
 ('Post-accident checks found FRA-reportable defects on 26% of the non-derailed cars, all inspected by NS or TRRA', R, 'identified FRA-reportable defects on 26% of the railcars, all of which had received NS or TRRA mechanical inspections', 'p. 86; "Most defects were minor."'),
 ('An NS senior general foreman email appeared to state a 90-second inspection target per car', R, 'appearing to state a target time of 90 seconds for both inbound and outbound railcars', 'p. 86; say "appeared to"'),
 ('The NTSB could not determine whether inspection time goals contributed', R, 'does not support a determination of whether mechanical inspection time goals contributed', 'p. 103'),
 ('The NTSB opened a special investigation into NS organization and safety culture in March 2023', R, "In March 2023, the NTSB announced that we would conduct a special investigation of NS's organization and safety culture.", 'p. 86; status of its report to check'),
 ('A 1-mile evacuation zone affected about 2,000 residents', R, 'Emergency responders established a 1-mile evacuation zone that affected about 2,000 residents.', 'p. x'),
 ('The incident commander did not know of the shipper\'s dissenting opinions', R, 'The incident commander was not aware of dissenting opinions the VCM shipper had provided to NS and its contractors.', 'p. x'),
 ('A contractor hired by NS breached the five VCM cars at 4:37 p.m. on 06 FEB 2023', R, 'A contractor hired by NS breached the VCM tank cars at 4:37 p.m. on February 6', 'p. x'),
 ('The vent and burn was not necessary to prevent a polymerization explosion', R, 'The vent and burn procedure was not necessary to prevent a polymerization-induced explosion.', 'p. xi'),
 ('No injuries were reported in the derailment or response', R, 'No injuries were reported during the derailment or emergency response.', 'p. x'),
 ('Phasing out DOT-111 cars early is feasible but unlikely because of economic and business disincentives (finding 19)', R, 'such action is unlikely because of economic and business disincentives', 'finding 19'),
 ('DOT-111 cars in flammable liquids service must be gone by 01 MAY 2029', R, 'by May 1, 2029, tank cars transporting flammable liquids must meet the newer DOT-117 specification', 'p. 47'),
 ('The FRA found cost and lease rates a disincentive to phase out DOT-111 cars faster', R, 'provided a disincentive for tank car owners and shippers to phase out DOT-111 cars faster than required', 'p. 89'),
 ('Probable cause: the L1 bearing on the 23rd car overheated and the axle separated', R, 'the failure of the L1 bearing on the 23rd railcar in the consist that overheated and caused the axle to separate', 'p. xi, probable cause'),
 ('On 11 FEB 2019 NS announced a plan targeting a 60 percent operating ratio by 2021', PR, 'targeting an operating ratio of 60 percent by 2021', 'NS 8-K Ex. 99.1'),
 ('NS said it was implementing precision scheduled railroading', PR, 'As we implement precision scheduled railroading', 'CEO quote, same release'),
 ('The plan continued share repurchases using free cash flow and borrowing capacity', PR, 'continuance of share repurchases using free cash flow and borrowing capacity', 'same release'),
 ('The same plan named working safely among five principles', PR, 'serving our customers, managing our assets, controlling our costs, working safely, and developing our people', 'fairness: always shown with C43'),
 ("NS's 2018 operating ratio was 65.4 percent", PR, 'our 2018 operating ratio of 65.4 percent', 'same release'),
 ('NS averaged 30,456 employees in 2015 and 24,587 in 2019', K19, 'Average number of employees 24,587 26,662 27,110 28,044 30,456', '2019 10-K five-year table, 2019→2015'),
 ('NS averaged 18,900 employees in 2022', K22, 'We employed an average of 18,900 employees during 2022', '2022 10-K; 2015→2022 is −38% (OUR CALCULATION)'),
 ('NS share repurchases were $1,439 million in 2020', K20, 'Share repurchases ( 7 ) ( 59 ) ( 1,373 ) ( 1,439 )', '2020 10-K equity statement'),
 ('NS share repurchases were $3,110 million in 2022', K22, 'Share repurchases ( 13 ) ( 108 ) ( 2,989 ) ( 3,110 )', '2022 10-K equity statement'),
 ('The 2020 executive annual incentive was based on operating ratio and operating income', P21, 'payable based on our performance relative to pre-determined performance measures for operating ratio and operating income', '2021 proxy (DEF 14A); check whether later years added safety'),
 ('The cab speakers broadcast: Critical alarm, critical alarm, critical alarm. Norfolk Southern milepost 49.8, track 1 hotbox, axle 101, south rail', R, 'Critical alarm, critical alarm, critical alarm. Norfolk Southern milepost 49.8, track 1 hotbox, axle 101, south rail.', 'p. 8; captured by in-cab audio; shown as TEXT only, never as audio'),
 ('A critical alarm requires the crew to stop at once and inspect', R, 'a critical alarm requires a train\'s crew to immediately stop the train and inspect the wheelset that triggered the alarm', 'p. 8'),
 ('253°F above ambient is the maximum that type of detector can read; the real temperature may have been higher', R, 'A reading of 253°F above ambient is the maximum reading for the type of HBD installed at MP 49.81; the actual temperature may have been higher.', 'p. 8, footnote 15'),
 ('The head end travelled about 1,160 feet and stopped 38 seconds after the emergency application', R, 'The head-end locomotives then traveled about 1,160 feet before coming to a stop 38 seconds later.', 'p. 8'),
 ('The first 911 call came at 8:56:49 p.m.', R, 'received the first 911 call reporting a derailment, explosion, and fire at 8:56:49', 'p. 8'),
 ('48 agencies responded', R, 'indicate that 48 agencies were involved in the emergency response', 'p. 9'),
 ('The shipper, Oxy Vinyls, assessed a low probability of polymerization on the 6:00 p.m. call of 04 FEB', R, 'Oxy Vinyls assessed a low probability of polymerization based on the observed PRD behavior', 'p. 22'),
 ('Oxy Vinyls was not invited to the 06 FEB meetings', R, 'Representatives from Oxy Vinyls were not present and had not been invited to attend.', 'p. 27'),
 ("Norfolk Southern's chief executive was in the second, smaller meeting", R, 'SRS personnel, including the chief executive officer of NS', 'p. 28; public role only'),
 ('The incident commander was told he had 13 minutes to decide', R, 'he had 13 minutes to decide whether to allow them to proceed with the vent and burn', 'p. 28; his account in interview'),
 ('He was told 153–158°F would mean an uncontrolled polymerization reaction', R, 'if the temperature in a tank car reached 153–158°F, the result would be an uncontrolled polymerization reaction', 'p. 28'),
 ('The NTSB found that range in no written guidance consulted at the scene', R, 'The NTSB did not find this temperature range in written guidance about VCM consulted at the scene', 'p. 28, footnote 55'),
 ('The hottest car had fallen from about 138°F to about 126°F by the meetings', R, 'the highest tank car temperatures had fallen from about 138°F the previous afternoon to about 126°F', 'p. 28'),
 ('The charges went off at 4:37 p.m., so 3:00 p.m. was not a hard deadline', R, 'indicating that 3:00 p.m. was not a hard deadline for the procedure', 'p. 132'),
 ('The NTSB: NS and its contractors compromised the integrity of the decision by creating unwarranted urgency', R, 'NS and its contractors compromised the integrity of the vent and burn decision by creating unwarranted urgency', 'p. 132'),
 ('The incident commander said he bore the responsibility for the decision', R, 'the incident commander said that he bore the responsibility for this decision', 'p. 28; fairness: his own words'),
 ('NS recognised $1,116 million of incident expenses in 2023, net of $101 million insurance', K23, 'the Company has recognized $1,116 million of expenses for costs directly attributable to the Incident, which is presented net of $101 million in insurance recoveries', '2023 10-K'),
 ('NS incurred net incident expenses of $325 million in 2024, net of $650 million insurance', K25, 'we incurred net expenses of $325 million associated with the Incident', '2025 10-K'),
 ('In 2025 recoveries exceeded incident expenses by $254 million', K25, 'insurance and other recoveries that exceeded additional Incident-related expenses by $254 million', '2025 10-K'),
 ('The NTSB: the AAR definition relates to billing for repairs, not directly to safety or wayside detection', R, 'it relates to billing for repairs, not directly to safety or wayside detection', 'p. 107'),
 ('NS based its thresholds on its own experience with HBDs and AAR standards (NS testimony)', R, 'NS based its alert and alarm temperature thresholds on its own experience with HBDs and AAR standards', 'p. 106; NS side, always with C23'),
 ('NS testified its average detector spacing on key routes was 13.9 miles', H2, 'Our average spacing on our key routes is currently 13.9 miles across our system', 'hearing day 2 p. 259, NS (Mr. Hopewell); identifies Railroad #2 in the Class I questionnaire'),
 ('An NTSB questioner: NS had come back with a higher number than the AAR recommendations', H2, "They've come back with a higher number than what the AAR recommendations", 'hearing day 2 p. 259'),
 ('AAR witness: not all railroads used 170; some used higher; all are now committed to 170', H2, 'They are now all committed to using 170 degrees on their railroad to take a look at bearings', 'hearing day 2 p. 263'),
 ('Railroad #2 (13.9-mile spacing = NS) had a critical alarm at 200°F above ambient before 02 FEB 2023, 170°F after', Q, 'Critical 200', 'docket item 70 table: prior "Critical 200 / Non-Critical between 170 and 200", post 170; #2 = NS by C74 and NTSB p. 105 (253 more than 50 above critical)'),
 ('NS rule: on a CRITICAL ALARM the train must be immediately stopped for inspection', RULE, 'The train must be immediately stopped for inspection', 'NS Operating Rule 147(a), eff. 01 JAN 2019, docket item 68'),
 ('NS rule: on a non-critical defect message, slow to not less than 8 MPH, then stop for inspection once the rear clears', RULE, 'the train must immediately reduce speed to not less than 8 MPH until the rear of the train clears the detector at which point the train must be stopped for inspection', 'NS Operating Rule 147(b)'),
 ('The NTSB recovered the L1 bearing parts on 05 FEB 2023, west of the pileup, the day before the vent and burn', R, 'On February 5, after photographing the L1 bearing and journal in their as-found condition, the NTSB recovered the separated axle journal and several bearing components', 'p. 46; answers "the burn destroyed the evidence"'),
 ('The bearing parts were found west of the pileup, far from the rest of the wheelset', R, 'The components’ positions west of the pileup and far from the rest of the wheelset indicate that they became separated from the hopper car in the earliest moments of the derailment', 'p. 102'),
 ('The hopper car was owned by GATX and leased to Braskem America', R, 'GPLX75465 was a covered hopper railcar owned by the GATX Corporation and leased to Braskem America, Inc.', 'p. 45'),
 ('The crew was an engineer, a conductor and a conductor trainee', R, 'an engineer, a conductor, and a conductor trainee', 'p. 4; three in the cab'),
 ('As of 24 JUL 2026, federal regulations did not require wayside detectors or set temperature thresholds', CRS, 'Federal regulations do not currently require the use of wayside defect detectors or specify temperature thresholds for inspection or removal of cars with overheating bearings', 'CRS R47911, updated 24 JUL 2026, p. 10'),
 ('Train 32N did not qualify as a High Hazard Flammable Train', CRS, 'The train that derailed in East Palestine did not qualify as such due to the type and quantity of cargo it carried', 'CRS summary'),
 ('The ECP brake requirement (for high-hazard flammable unit trains) was removed in 2018 after costs were found to exceed benefits', CRS, "When the rule's costs were found to exceed its benefits, the ECP requirement was removed in 2018", 'CRS p. 6; applied to HHFUTs only'),
 ('NTSB R-24-03 asks the FRA for minimum requirements including alert and alarm thresholds and maximum detector spacing', RECS, 'minimum requirements for bearing defect detection systems, including criteria for bearing alert and alarm thresholds and maximum distances between wayside detectors', 'NTSB status document as of 03 FEB 2025: Open - Initial Response Received'),
 ('FRA Safety Advisory 2023-01 asks railroads to review the adequacy of their trend analysis and thresholds', FR, "to determine the adequacy of the railroad's current trend analysis and thresholds levels", '89 FR (17 JUL 2024), second supplement; an advisory, not a rule'),
 ("NS: its and its contractors' only motivation in recommending the vent and burn was the health and safety of the community and first responders", NS25, "Norfolk Southern and its expert contractors' only motivation in recommending the vent and burn to the Unified Command was the health and safety of the community and first responders", 'NS statement 25 JUN 2024; the other side at the NTSB finding'),
 ('NS: Unified Command was advised about 20 hours ahead that a vent and burn might be necessary', NS25, 'Unified Command was advised that a vent and burn procedure might be necessary approximately 20 hours before the Unified Command made the final decision', 'NS statement 25 JUN 2024'),
 ('NS: 187 additional hot bearing detectors, average spacing about 12 miles on its core network', NS25, 'Installing 187 additional hot bearing detectors, reducing core network average distance between detectors to approximately 12 miles', 'NS statement 25 JUN 2024 (company claim)'),
 ('The 153–158°F range came from the SPSI president and SRS project manager (NS contractors)', R, 'The SPSI president and SRS project manager told the incident commander that if a tank car', 'p. 28'),
 ('The NTSB found no evidence attendees other than NS and its contractors knew of Oxy\'s dissent', R, 'The NTSB did not find evidence that attendees other than NS and its contractors were aware that Oxy Vinyls had developed a dissenting opinion about polymerization', 'p. 27'),
 ('Polymerization: small molecules combine into larger ones; VCM becomes PVC, a hard plastic', R, 'VCM polymerizes into polyvinyl chloride (PVC), a hard plastic', 'p. 18 n.'),
 ('On-scene temperature trends did not indicate polymerization, and post-accident examinations confirmed it', R, 'On-scene temperature trends did not indicate that a polymerization reaction was occurring and postaccident examinations confirmed this.', 'p. xi'),
 ('The United States moved for entry of the federal consent decree on 10 OCT 2024', CD, 'On October 10, 2024 the United States filed a motion for entry of a consent decree', 'N.D. Ohio 4:23-cv-517, Doc. 301, 09 MAR 2026'),
 ('On 09 MAR 2026 the court let residents intervene and stayed pending motions; the decree was not yet entered', CD, 'Accordingly, the motion to intervene is GRANTED', 'Doc. 301; status to re-check on upload day'),
 ('The judge: this is not a rubber stamp court', CD, 'this is not a rubber stamp court', 'Doc. 301 quoting Doc. 219'),
 ('The class settlement is a non-reversionary $600 million fund, approved 27 SEP 2024', CL, 'The Settlement creates a non-reversionary fund of $600 million', 'N.D. Ohio 4:23-cv-242, Doc. 1053 (01 MAY 2026); final approval ECF 557, 27 SEP 2024'),
 ('The Sixth Circuit dismissed the objectors\' appeals on 05 NOV 2025; certiorari denied 02 MAR 2026', CL, 'cert. denied, No. 25-929, 2026 WL 568332 (March 2, 2026)', 'Doc. 1053 n. 1; dismissal on 05 NOV 2025 at p. 15'),
 ('On 01 MAY 2026 the court denied motions to reopen the class judgment', CL, '994) are denied', 'Doc. 1053'),
 ('NS share repurchases were $2,781 million in 2018', K19, 'Share repurchases ( 17 ) ( 125 ) ( 2,639 ) ( 2,781 )', '2019 10-K equity statement (2018 column)'),
 ('NS share repurchases were $2,099 million in 2019', K21, 'Share repurchases ( 11 ) ( 88 ) ( 2,000 ) ( 2,099 )', '2021 10-K equity statement'),
 ('NS share repurchases were $3,390 million in 2021', K21, 'Share repurchases ( 13 ) ( 106 ) ( 3,271 ) ( 3,390 )', '2021 10-K; 2018–2022 total $12,819M, OUR CALCULATION'),
]
bad = 0
with OUT.open('w', newline='') as f:
    w = csv.writer(f); w.writerow(['id','claim','on_screen','timecode','status','source_url','source_quote','note'])
    for i, (claim, url, quote, note) in enumerate(ROWS, 1):
        ok = norm(quote) in TEXT[url]
        if not ok: bad += 1; print('MISS', i, quote[:80])
        w.writerow([f'C{i:02d}', claim, '', '', 'confirmed' if ok else 'unverified', url, quote, note])
print(len(ROWS), 'rows,', bad, 'misses')
