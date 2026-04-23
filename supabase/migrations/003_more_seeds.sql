-- =============================================================
-- SEED: Ideas — Poverty / Emergency Cash Assistance
-- =============================================================
insert into seeded_ideas (id, title, description, approach_tags, challenge_id, problem_id, is_featured) values
  ('c1000000-0000-0000-0000-000000000005',
   'Digital Voucher Delivery via SMS',
   'An SMS-based system that delivers unique one-time voucher codes to crisis-affected households via field agent registration — redeemable at a network of local shops via USSD. No mobile money account required; the shopkeeper scans the code and is reimbursed by the NGO weekly. Built with Africa''s Talking SMS API and a lightweight voucher ledger.',
   array['SMS', 'voucher system', 'feature phone', 'last-mile delivery'],
   'a1000000-0000-0000-0000-000000000001', 'b1000000-0000-0000-0000-000000000003', true),

  ('c1000000-0000-0000-0000-000000000006',
   'Proxy Identity Enrollment Bot',
   'A WhatsApp chatbot that lets community leaders vouch for displaced neighbors lacking ID — collecting biometric photos, GPS location, and household composition. Creates a lightweight proxy identity that unlocks cash transfers through partner NGOs while the household pursues formal documentation in parallel.',
   array['WhatsApp', 'identity', 'community vouching', 'humanitarian'],
   'a1000000-0000-0000-0000-000000000001', 'b1000000-0000-0000-0000-000000000003', true),

  ('c1000000-0000-0000-0000-000000000007',
   'Offline Cash Transfer Kiosk App',
   'A Progressive Web App for field agents that queues transfer approvals locally when offline, syncing to the central system when connectivity is restored. Uses biometric fingerprint matching (via device sensor) to verify recipients without network dependency. Targets the last-mile connectivity gap during disaster response.',
   array['offline-first', 'PWA', 'biometric', 'field agent'],
   'a1000000-0000-0000-0000-000000000001', 'b1000000-0000-0000-0000-000000000003', false)
on conflict (id) do nothing;

-- =============================================================
-- SEED: Ideas — Hunger / Post-Harvest Food Loss
-- =============================================================
insert into seeded_ideas (id, title, description, approach_tags, challenge_id, problem_id, is_featured) values
  ('c2000000-0000-0000-0000-000000000003',
   'Spoilage Early Warning SMS',
   'A low-cost IoT sensor (temperature + humidity, ~$5 each) placed inside grain storage bags sends readings via SMS gateway to a central server. When conditions cross spoilage thresholds, the farmer receives an SMS alert to sell immediately or move produce to a better-conditioned facility. Built for feature phones with no app required.',
   array['IoT', 'SMS', 'agriculture', 'feature phone'],
   'a1000000-0000-0000-0000-000000000002', 'b2000000-0000-0000-0000-000000000002', true),

  ('c2000000-0000-0000-0000-000000000004',
   'Cold Chain Marketplace Connector',
   'A mobile app that maps verified cold storage facilities within 50km of farming communities, shows real-time available capacity and pricing, and lets farmers book storage slots by SMS or in-app. Aggregates data from cooperatives, cold storage operators, and small traders — creating a marketplace that previously didn''t exist.',
   array['mobile app', 'cold chain', 'marketplace', 'logistics'],
   'a1000000-0000-0000-0000-000000000002', 'b2000000-0000-0000-0000-000000000002', true),

  ('c2000000-0000-0000-0000-000000000005',
   'Harvest-to-Buyer Matching Bot',
   'A WhatsApp chatbot that matches farmers with excess harvest to verified buyers (restaurants, schools, food processors) within 24 hours of harvest — before spoilage begins. Farmers report harvest type, quantity, and location; the bot runs a matching algorithm and connects them directly to buyers who confirm pickup.',
   array['WhatsApp', 'chatbot', 'marketplace', 'food waste'],
   'a1000000-0000-0000-0000-000000000002', 'b2000000-0000-0000-0000-000000000002', false)
on conflict (id) do nothing;

-- =============================================================
-- SEED: Ideas — Hunger / School Feeding Programs
-- =============================================================
insert into seeded_ideas (id, title, description, approach_tags, challenge_id, problem_id, is_featured) values
  ('c2000000-0000-0000-0000-000000000006',
   'School Meal Supply Chain Tracker',
   'A mobile app for school feeding program coordinators to log daily meal delivery, flag shortfalls, and trigger automatic reorder requests to district suppliers. Aggregates data across hundreds of schools into a dashboard that NGO program managers use to pre-position buffer stock before disruptions hit.',
   array['mobile app', 'supply chain', 'dashboard', 'education'],
   'a1000000-0000-0000-0000-000000000002', 'b2000000-0000-0000-0000-000000000003', true),

  ('c2000000-0000-0000-0000-000000000007',
   'Local Supplier Discovery Platform',
   'A web platform that maps local smallholder cooperatives willing to supply schools within a district — reducing dependency on national suppliers vulnerable to price shocks. Schools post their monthly requirements; cooperatives bid on contracts; the platform handles basic price comparison and contract documentation.',
   array['web platform', 'procurement', 'local sourcing', 'cooperative'],
   'a1000000-0000-0000-0000-000000000002', 'b2000000-0000-0000-0000-000000000003', true),

  ('c2000000-0000-0000-0000-000000000008',
   'Meal Attendance & Nutrition Tracker',
   'A simple Android app for teachers to record daily meal attendance and flag children who skip meals repeatedly — a proxy indicator for household food insecurity. Aggregated anonymized data helps NGOs identify which communities need emergency feeding support before a crisis is visually apparent.',
   array['Android', 'nutrition', 'attendance tracking', 'early warning'],
   'a1000000-0000-0000-0000-000000000002', 'b2000000-0000-0000-0000-000000000003', false)
on conflict (id) do nothing;

-- =============================================================
-- SEED: Ideas — Ocean & Climate / Fishing Community Adaptation
-- =============================================================
insert into seeded_ideas (id, title, description, approach_tags, challenge_id, problem_id, is_featured) values
  ('c3000000-0000-0000-0000-000000000003',
   'Fish Migration Forecast SMS',
   'An SMS service that delivers weekly fish location forecasts to small-scale fishers based on sea surface temperature and chlorophyll-a satellite data (free from NASA OceanColor). Fishers register their boat ID and nearest port; the service sends coordinates of likely fish aggregation zones relevant to their region.',
   array['SMS', 'satellite data', 'fisheries', 'climate adaptation'],
   'a1000000-0000-0000-0000-000000000003', 'b3000000-0000-0000-0000-000000000002', true),

  ('c3000000-0000-0000-0000-000000000004',
   'Seasonal Fishing Calendar App',
   'A mobile app that combines historical catch data (crowd-sourced from fisherfolk) with climate model projections to generate community-specific seasonal fishing calendars — showing when and where target species are likely to be present given current ocean conditions. Includes offline map support.',
   array['mobile app', 'offline maps', 'climate data', 'fisheries'],
   'a1000000-0000-0000-0000-000000000003', 'b3000000-0000-0000-0000-000000000002', true),

  ('c3000000-0000-0000-0000-000000000005',
   'Livelihood Diversification Navigator',
   'A WhatsApp chatbot for fishing communities that assesses a household''s existing skills, assets, and location, then recommends specific alternative livelihood options (seaweed farming, aquaculture, ecotourism) with step-by-step guidance on how to start — linking to micro-grant programs and training opportunities nearby.',
   array['WhatsApp', 'chatbot', 'livelihoods', 'climate resilience'],
   'a1000000-0000-0000-0000-000000000003', 'b3000000-0000-0000-0000-000000000002', false)
on conflict (id) do nothing;

-- =============================================================
-- SEED: Ideas — Ocean & Climate / Plastic Waste Monitoring
-- =============================================================
insert into seeded_ideas (id, title, description, approach_tags, challenge_id, problem_id, is_featured) values
  ('c3000000-0000-0000-0000-000000000006',
   'Drone Plastic Detection Pipeline',
   'An open-source pipeline that runs a computer vision model on drone footage to automatically detect and classify ocean plastic (bottles, nets, foam) — producing density maps that researchers and cleanup crews can use to prioritize collection areas. Built on YOLOv8 with a free annotated ocean litter dataset.',
   array['computer vision', 'drone', 'open source', 'ocean plastic'],
   'a1000000-0000-0000-0000-000000000003', 'b3000000-0000-0000-0000-000000000003', true),

  ('c3000000-0000-0000-0000-000000000007',
   'Beach Cleanup Coordination App',
   'A mobile app that lets volunteer groups report plastic hotspots with geo-tagged photos, coordinate cleanup events, and log collected waste by type. Data feeds into a public map used by municipal authorities and NGOs to prioritize cleanup resources and track progress over time.',
   array['citizen science', 'mobile app', 'open data', 'plastic'],
   'a1000000-0000-0000-0000-000000000003', 'b3000000-0000-0000-0000-000000000003', true),

  ('c3000000-0000-0000-0000-000000000008',
   'Satellite Gyre Drift Tracker',
   'A web dashboard that uses publicly available Copernicus satellite imagery and ocean current models to predict where surface plastic will accumulate over the next 7–30 days — giving cleanup organizations advance notice to position vessels efficiently. Automated alerts when predicted density exceeds threshold.',
   array['satellite data', 'ocean modeling', 'dashboard', 'cleanup logistics'],
   'a1000000-0000-0000-0000-000000000003', 'b3000000-0000-0000-0000-000000000003', false)
on conflict (id) do nothing;

-- =============================================================
-- SEED: Ideas — Health / Medication Counterfeiting
-- =============================================================
insert into seeded_ideas (id, title, description, approach_tags, challenge_id, problem_id, is_featured) values
  ('c4000000-0000-0000-0000-000000000003',
   'Medicine Authenticity USSD Checker',
   'A USSD app (*384#) that lets anyone verify a medicine''s authenticity by entering the batch number and manufacturer code printed on the packaging. Cross-references a database maintained by national drug regulatory authorities. Works on any feature phone with no internet or smartphone required.',
   array['USSD', 'feature phone', 'drug verification', 'public health'],
   'a1000000-0000-0000-0000-000000000004', 'b4000000-0000-0000-0000-000000000002', true),

  ('c4000000-0000-0000-0000-000000000004',
   'Pharmacist Reporting Network',
   'A WhatsApp chatbot for licensed pharmacists to report suspected counterfeit medicines with photos, batch numbers, and supplier details — feeding a verified tip database used by national drug regulators for targeted inspections. Includes an anonymized public map of reported hotspots for community awareness.',
   array['WhatsApp', 'reporting', 'pharmacist network', 'supply chain'],
   'a1000000-0000-0000-0000-000000000004', 'b4000000-0000-0000-0000-000000000002', true),

  ('c4000000-0000-0000-0000-000000000005',
   'QR + Blockchain Medication Passport',
   'A web app that lets pharmaceutical manufacturers register batch QR codes on a public blockchain ledger at point of production. Distributors and pharmacists scan at each handoff; consumers scan at purchase to see the full verified chain of custody. Solo-developer buildable using Ethereum L2 or Polygon for low gas costs.',
   array['blockchain', 'QR code', 'supply chain', 'consumer verification'],
   'a1000000-0000-0000-0000-000000000004', 'b4000000-0000-0000-0000-000000000002', false)
on conflict (id) do nothing;

-- =============================================================
-- SEED: Ideas — Health / Mental Health
-- =============================================================
insert into seeded_ideas (id, title, description, approach_tags, challenge_id, problem_id, is_featured) values
  ('c4000000-0000-0000-0000-000000000006',
   'Structured CBT WhatsApp Bot',
   'A WhatsApp chatbot that delivers a clinician-reviewed 6-week cognitive behavioral therapy (CBT) program for mild-to-moderate depression — adapted for low-literacy users with voice message support. Each daily session takes under 10 minutes. Built on WhatsApp Cloud API with a simple state machine; no ongoing therapist required.',
   array['WhatsApp', 'chatbot', 'CBT', 'mental health'],
   'a1000000-0000-0000-0000-000000000004', 'b4000000-0000-0000-0000-000000000003', true),

  ('c4000000-0000-0000-0000-000000000007',
   'Community Listener Network App',
   'A mobile app that trains and coordinates a network of lay counselors ("listeners") in communities — non-professionals who receive a 3-day structured listening skills training and are matched with people in distress via the app. Includes a simple case notes system, weekly supervisor check-ins via the app, and escalation pathways to clinical staff.',
   array['mobile app', 'peer support', 'task-shifting', 'mental health'],
   'a1000000-0000-0000-0000-000000000004', 'b4000000-0000-0000-0000-000000000003', true),

  ('c4000000-0000-0000-0000-000000000008',
   'SMS Mental Health Check-In System',
   'A weekly SMS check-in system that sends a 3-question PHQ-2 depression screening to enrolled users and flags responses indicating high distress to a human counselor for follow-up. No smartphone needed; the screening algorithm runs server-side and auto-responds with local helpline numbers when risk is detected.',
   array['SMS', 'mental health screening', 'feature phone', 'PHQ-2'],
   'a1000000-0000-0000-0000-000000000004', 'b4000000-0000-0000-0000-000000000003', false)
on conflict (id) do nothing;
