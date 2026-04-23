-- =============================================================
-- SEED: Challenge Categories
-- =============================================================
insert into challenges (id, name, description, emoji, sdg_mapping, color_class, sort_order) values
  ('a1000000-0000-0000-0000-000000000001', 'Poverty', 'Over 700 million people live on less than $2.15 a day. Economic exclusion, lack of financial tools, and broken safety nets trap communities in cycles of deprivation.', '💸', 'SDG 1: No Poverty', 'challenge-poverty', 1),
  ('a1000000-0000-0000-0000-000000000002', 'Hunger', 'Nearly 800 million people go to bed hungry every night while a third of all food produced globally is lost or wasted. Supply chain failures and climate shocks are making it worse.', '🌾', 'SDG 2: Zero Hunger', 'challenge-hunger', 2),
  ('a1000000-0000-0000-0000-000000000003', 'Ocean & Climate', 'Oceans absorb 90% of excess heat and 30% of CO₂ emissions, yet face unprecedented acidification, plastic pollution, and warming that is collapsing marine ecosystems.', '🌊', 'SDG 13 & 14: Climate Action / Life Below Water', 'challenge-ocean', 3),
  ('a1000000-0000-0000-0000-000000000004', 'Health', 'Two billion people lack access to essential medicines. Preventable diseases kill millions annually, disproportionately in low-income countries with fragile health infrastructure.', '🩺', 'SDG 3: Good Health & Well-Being', 'challenge-health', 4)
on conflict (id) do nothing;

-- =============================================================
-- SEED: Problems — Poverty
-- =============================================================
insert into seeded_problems (id, title, description, source_url, location, challenge_id, is_featured) values
  ('b1000000-0000-0000-0000-000000000001',
   'Informal workers locked out of credit',
   'Over 1.4 billion adults globally are unbanked. Informal workers — street vendors, day laborers, gig workers — cannot access credit or savings products because they lack formal employment records or collateral.',
   'https://www.worldbank.org/en/topic/financialinclusion',
   'Sub-Saharan Africa, South & Southeast Asia',
   'a1000000-0000-0000-0000-000000000001', true),

  ('b1000000-0000-0000-0000-000000000002',
   'Remittance fees trap migrant families',
   'Migrant workers send $860B home annually, but fees average 6.2% — costing families over $50B that should reach the poorest households. In Africa, fees exceed 8% on average.',
   'https://www.worldbank.org/en/topic/migrationremittancesdiasporaissues',
   'Global, highest impact in Africa & Latin America',
   'a1000000-0000-0000-0000-000000000001', true),

  ('b1000000-0000-0000-0000-000000000003',
   'Emergency cash assistance fails to reach crisis-affected households',
   'During floods, droughts, and conflict displacement, government cash transfers often fail the people who need them most — due to broken ID systems, no mobile accounts, and last-mile logistics failures.',
   'https://www.cgap.org/topics/humanitarian-cash-transfers',
   'South Asia, East Africa',
   'a1000000-0000-0000-0000-000000000001', false)
on conflict (id) do nothing;

-- =============================================================
-- SEED: Problems — Hunger
-- =============================================================
insert into seeded_problems (id, title, description, source_url, location, challenge_id, is_featured) values
  ('b2000000-0000-0000-0000-000000000001',
   'Smallholder farmers have no access to market price data',
   '500 million smallholder farms feed 70% of the developing world, yet most farmers sell at whatever price local middlemen offer — with no visibility into actual market rates. They lose 20–40% of potential income.',
   'https://www.fao.org/smallfamily-farming/en/',
   'East Africa, South Asia',
   'a1000000-0000-0000-0000-000000000002', true),

  ('b2000000-0000-0000-0000-000000000002',
   'Post-harvest food loss destroys 14% of global food supply',
   'Across sub-Saharan Africa, 40% of food is lost between farm and fork — due to poor storage, lack of cold chain, and no early-warning for spoilage. This loss happens while millions go hungry nearby.',
   'https://www.fao.org/platform-food-loss-waste/en/',
   'Sub-Saharan Africa',
   'a1000000-0000-0000-0000-000000000002', true),

  ('b2000000-0000-0000-0000-000000000003',
   'School feeding programs collapse during supply shocks',
   'National school meal programs in low-income countries are among the most effective hunger interventions, but they lack supply chain resilience — a drought or price spike can shut down programs serving millions of children.',
   'https://www.wfp.org/school-meals',
   'West Africa, Central America',
   'a1000000-0000-0000-0000-000000000002', false)
on conflict (id) do nothing;

-- =============================================================
-- SEED: Problems — Ocean & Climate
-- =============================================================
insert into seeded_problems (id, title, description, source_url, location, challenge_id, is_featured) values
  ('b3000000-0000-0000-0000-000000000001',
   'Coral reef bleaching is accelerating without early warning systems',
   'Scientists estimate 50% of the world''s coral reefs have died since 1950. Current bleaching events are detected weeks late — by which time intervention is impossible. Real-time thermal monitoring at scale doesn''t exist.',
   'https://coralreefwatch.noaa.gov/',
   'Great Barrier Reef, Southeast Asia, Caribbean',
   'a1000000-0000-0000-0000-000000000003', true),

  ('b3000000-0000-0000-0000-000000000002',
   'Fishing communities have no access to climate adaptation planning tools',
   'Small-scale fishers — 600 million people depend on fisheries — face rapidly changing fish migration patterns due to ocean warming, but have no tools to model or adapt their fishing routes and timing.',
   'https://www.fao.org/fishery/en/topic/16901',
   'Pacific Islands, Southeast Asia, West Africa',
   'a1000000-0000-0000-0000-000000000003', true),

  ('b3000000-0000-0000-0000-000000000003',
   'Plastic waste monitoring in ocean gyres is manually intensive and costly',
   'The Great Pacific Garbage Patch is estimated at 1.6 million km², but tracking plastic accumulation zones still relies on manual boat surveys. Automated, AI-powered monitoring doesn''t yet exist at scale.',
   'https://theoceancleanup.com/great-pacific-garbage-patch/',
   'Pacific Ocean, Atlantic Gyre',
   'a1000000-0000-0000-0000-000000000003', false)
on conflict (id) do nothing;

-- =============================================================
-- SEED: Problems — Health
-- =============================================================
insert into seeded_problems (id, title, description, source_url, location, challenge_id, is_featured) values
  ('b4000000-0000-0000-0000-000000000001',
   'Community health workers lack digital tools for patient follow-up',
   'In low-income countries, community health workers (CHWs) are the primary point of care for 1 billion+ people — but they track patients on paper, miss follow-ups, and can''t escalate urgent cases without walking to a clinic.',
   'https://www.who.int/teams/primary-health-care/community-health-workers',
   'Sub-Saharan Africa, South Asia',
   'a1000000-0000-0000-0000-000000000004', true),

  ('b4000000-0000-0000-0000-000000000002',
   'Medication counterfeiting kills 500,000 people annually in Africa',
   'Up to 30% of medicines in low-income countries are substandard or falsified. Patients have no way to verify authenticity at point of purchase, and supply chains lack end-to-end verification infrastructure.',
   'https://www.who.int/news-room/fact-sheets/detail/substandard-and-falsified-medical-products',
   'Sub-Saharan Africa, South & Southeast Asia',
   'a1000000-0000-0000-0000-000000000004', true),

  ('b4000000-0000-0000-0000-000000000003',
   'Mental health crisis with no accessible first-line intervention tools',
   'Depression affects 280 million people globally, yet 75% receive no treatment in low-income countries. There aren''t enough therapists — but there''s growing evidence that structured digital CBT interventions can bridge the gap at scale.',
   'https://www.who.int/news-room/fact-sheets/detail/depression',
   'Global, highest gap in low-income countries',
   'a1000000-0000-0000-0000-000000000004', false)
on conflict (id) do nothing;

-- =============================================================
-- SEED: Ideas — Poverty / Informal Workers Credit
-- =============================================================
insert into seeded_ideas (id, title, description, approach_tags, challenge_id, problem_id, is_featured) values
  ('c1000000-0000-0000-0000-000000000001',
   'Cash Flow Passport',
   'A mobile app that builds a financial identity for informal workers using alternative data — mobile money history, utility payments, and peer vouching — to generate a portable credit score accepted by local microfinance partners.',
   array['mobile app', 'fintech', 'alternative data', 'microfinance'],
   'a1000000-0000-0000-0000-000000000001', 'b1000000-0000-0000-0000-000000000001', true),

  ('c1000000-0000-0000-0000-000000000002',
   'Savings Circle Digitizer',
   'A USSD + WhatsApp tool that formalizes rotating savings groups (ROSCAs) common across Africa and Asia — automating contribution tracking, building group credit history, and connecting groups to licensed lenders.',
   array['USSD', 'WhatsApp', 'savings', 'community finance'],
   'a1000000-0000-0000-0000-000000000001', 'b1000000-0000-0000-0000-000000000001', true)
on conflict (id) do nothing;

-- =============================================================
-- SEED: Ideas — Poverty / Remittances
-- =============================================================
insert into seeded_ideas (id, title, description, approach_tags, challenge_id, problem_id, is_featured) values
  ('c1000000-0000-0000-0000-000000000003',
   'Fee Transparency Comparison Tool',
   'A simple web/SMS app that lets migrant workers compare live remittance fees across providers for their specific corridor (e.g., US→Ghana). Aggregates real-time data from public APIs and highlights the cheapest, fastest option.',
   array['data aggregation', 'financial literacy', 'SMS'],
   'a1000000-0000-0000-0000-000000000001', 'b1000000-0000-0000-0000-000000000002', true),

  ('c1000000-0000-0000-0000-000000000004',
   'Community Remittance Pooling Network',
   'An app that coordinates migrants from the same community to pool transfers — reducing per-transaction fees by batching and enabling collective negotiation with providers.',
   array['community coordination', 'mobile app', 'cost reduction'],
   'a1000000-0000-0000-0000-000000000001', 'b1000000-0000-0000-0000-000000000002', false)
on conflict (id) do nothing;

-- =============================================================
-- SEED: Ideas — Hunger / Smallholder Market Data
-- =============================================================
insert into seeded_ideas (id, title, description, approach_tags, challenge_id, problem_id, is_featured) values
  ('c2000000-0000-0000-0000-000000000001',
   'FarmPrice SMS Oracle',
   'A lightweight SMS service that delivers real-time commodity prices for specific crops and local markets to farmers — no smartphone required. Aggregates data from public market databases and commodity exchanges.',
   array['SMS', 'market data', 'agriculture', 'feature phone'],
   'a1000000-0000-0000-0000-000000000002', 'b2000000-0000-0000-0000-000000000001', true),

  ('c2000000-0000-0000-0000-000000000002',
   'Harvest Timing Optimizer',
   'A mobile app for smallholder farmers that uses satellite crop-maturity data and local market price forecasts to recommend the optimal harvest timing and nearest buyer for maximum income.',
   array['satellite data', 'machine learning', 'mobile app', 'decision support'],
   'a1000000-0000-0000-0000-000000000002', 'b2000000-0000-0000-0000-000000000001', true)
on conflict (id) do nothing;

-- =============================================================
-- SEED: Ideas — Ocean & Climate / Coral Bleaching
-- =============================================================
insert into seeded_ideas (id, title, description, approach_tags, challenge_id, problem_id, is_featured) values
  ('c3000000-0000-0000-0000-000000000001',
   'Reef Alert Network',
   'An open-source thermal monitoring dashboard that aggregates satellite SST (sea surface temperature) data and sends early-warning alerts to reef managers and dive operators when bleaching risk thresholds are crossed — weeks before visual symptoms appear.',
   array['satellite data', 'open source', 'alert system', 'climate monitoring'],
   'a1000000-0000-0000-0000-000000000003', 'b3000000-0000-0000-0000-000000000001', true),

  ('c3000000-0000-0000-0000-000000000002',
   'Citizen Bleaching Tracker',
   'A mobile app for scuba divers and snorkelers to photograph and geo-tag reef health observations. AI image classification scores bleaching severity; data feeds into a public dashboard used by marine biologists and NGOs.',
   array['citizen science', 'computer vision', 'mobile app', 'open data'],
   'a1000000-0000-0000-0000-000000000003', 'b3000000-0000-0000-0000-000000000001', true)
on conflict (id) do nothing;

-- =============================================================
-- SEED: Ideas — Health / Community Health Workers
-- =============================================================
insert into seeded_ideas (id, title, description, approach_tags, challenge_id, problem_id, is_featured) values
  ('c4000000-0000-0000-0000-000000000001',
   'CHW Companion App',
   'A low-bandwidth Android app for community health workers that digitizes patient registers, sends automated follow-up SMS reminders to patients, and flags overdue visits — with an offline-first design that works without reliable internet.',
   array['offline-first', 'Android', 'SMS', 'patient management'],
   'a1000000-0000-0000-0000-000000000004', 'b4000000-0000-0000-0000-000000000001', true),

  ('c4000000-0000-0000-0000-000000000002',
   'Escalation Hotline Triage Bot',
   'A WhatsApp chatbot that guides community health workers through a structured triage protocol for common emergencies (fever + rash, difficulty breathing, severe malnutrition signs) — deciding whether to refer immediately or manage at home, with voice note support for low-literacy users.',
   array['WhatsApp', 'chatbot', 'clinical triage', 'voice support'],
   'a1000000-0000-0000-0000-000000000004', 'b4000000-0000-0000-0000-000000000001', true)
on conflict (id) do nothing;
