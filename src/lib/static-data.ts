export const STATIC_PROBLEMS: Record<string, { title: string; description: string; location: string; source_url: string }[]> = {
  'a1000000-0000-0000-0000-000000000001': [
    {
      title: 'Informal workers locked out of credit',
      description: 'Over 1.4 billion adults globally are unbanked. Informal workers — street vendors, day laborers, gig workers — cannot access credit or savings products because they lack formal employment records or collateral.',
      location: 'Sub-Saharan Africa, South & Southeast Asia',
      source_url: 'https://www.worldbank.org/en/topic/financialinclusion',
    },
    {
      title: 'Remittance fees trap migrant families',
      description: 'Migrant workers send $860B home annually, but fees average 6.2% — costing families over $50B that should reach the poorest households. In Africa, fees exceed 8% on average.',
      location: 'Global, highest impact in Africa & Latin America',
      source_url: 'https://www.worldbank.org/en/topic/migrationremittancesdiasporaissues',
    },
    {
      title: 'Emergency cash assistance fails to reach crisis-affected households',
      description: 'During floods, droughts, and conflict displacement, government cash transfers often fail the people who need them most — due to broken ID systems, no mobile accounts, and last-mile logistics failures.',
      location: 'South Asia, East Africa',
      source_url: 'https://www.cgap.org/topics/humanitarian-cash-transfers',
    },
  ],
  'a1000000-0000-0000-0000-000000000002': [
    {
      title: 'Smallholder farmers have no access to market price data',
      description: '500 million smallholder farms feed 70% of the developing world, yet most farmers sell at whatever price local middlemen offer — with no visibility into actual market rates. They lose 20–40% of potential income.',
      location: 'East Africa, South Asia',
      source_url: 'https://www.fao.org/smallfamily-farming/en/',
    },
    {
      title: 'Post-harvest food loss destroys 14% of global food supply',
      description: 'Across sub-Saharan Africa, 40% of food is lost between farm and fork — due to poor storage, lack of cold chain, and no early-warning for spoilage. This loss happens while millions go hungry nearby.',
      location: 'Sub-Saharan Africa',
      source_url: 'https://www.fao.org/platform-food-loss-waste/en/',
    },
    {
      title: 'School feeding programs collapse during supply shocks',
      description: 'National school meal programs in low-income countries are among the most effective hunger interventions, but they lack supply chain resilience — a drought or price spike can shut down programs serving millions of children.',
      location: 'West Africa, Central America',
      source_url: 'https://www.wfp.org/school-meals',
    },
  ],
  'a1000000-0000-0000-0000-000000000003': [
    {
      title: 'Coral reef bleaching is accelerating without early warning systems',
      description: "Scientists estimate 50% of the world's coral reefs have died since 1950. Current bleaching events are detected weeks late — by which time intervention is impossible. Real-time thermal monitoring at scale doesn't exist.",
      location: 'Great Barrier Reef, Southeast Asia, Caribbean',
      source_url: 'https://coralreefwatch.noaa.gov/',
    },
    {
      title: 'Fishing communities have no access to climate adaptation planning tools',
      description: 'Small-scale fishers — 600 million people depend on fisheries — face rapidly changing fish migration patterns due to ocean warming, but have no tools to model or adapt their fishing routes and timing.',
      location: 'Pacific Islands, Southeast Asia, West Africa',
      source_url: 'https://www.fao.org/fishery/en/topic/16901',
    },
    {
      title: 'Plastic waste monitoring in ocean gyres is manually intensive and costly',
      description: "The Great Pacific Garbage Patch is estimated at 1.6 million km², but tracking plastic accumulation zones still relies on manual boat surveys. Automated, AI-powered monitoring doesn't yet exist at scale.",
      location: 'Pacific Ocean, Atlantic Gyre',
      source_url: 'https://theoceancleanup.com/great-pacific-garbage-patch/',
    },
  ],
  'a1000000-0000-0000-0000-000000000004': [
    {
      title: 'Community health workers lack digital tools for patient follow-up',
      description: "In low-income countries, community health workers (CHWs) are the primary point of care for 1 billion+ people — but they track patients on paper, miss follow-ups, and can't escalate urgent cases without walking to a clinic.",
      location: 'Sub-Saharan Africa, South Asia',
      source_url: 'https://www.who.int/teams/primary-health-care/community-health-workers',
    },
    {
      title: 'Medication counterfeiting kills 500,000 people annually in Africa',
      description: 'Up to 30% of medicines in low-income countries are substandard or falsified. Patients have no way to verify authenticity at point of purchase, and supply chains lack end-to-end verification infrastructure.',
      location: 'Sub-Saharan Africa, South & Southeast Asia',
      source_url: 'https://www.who.int/news-room/fact-sheets/detail/substandard-and-falsified-medical-products',
    },
    {
      title: 'Mental health crisis with no accessible first-line intervention tools',
      description: "Depression affects 280 million people globally, yet 75% receive no treatment in low-income countries. There aren't enough therapists — but there's growing evidence that structured digital CBT interventions can bridge the gap at scale.",
      location: 'Global, highest gap in low-income countries',
      source_url: 'https://www.who.int/news-room/fact-sheets/detail/depression',
    },
  ],
}

export const STATIC_IDEAS: Record<string, { title: string; description: string; approach_tags: string[] }[]> = {
  'b1000000-0000-0000-0000-000000000001': [
    {
      title: 'Cash Flow Passport',
      description: 'A mobile app that builds a financial identity for informal workers using alternative data — mobile money history, utility payments, and peer vouching — to generate a portable credit score accepted by local microfinance partners.',
      approach_tags: ['mobile app', 'fintech', 'alternative data', 'microfinance'],
    },
    {
      title: 'Savings Circle Digitizer',
      description: 'A USSD + WhatsApp tool that formalizes rotating savings groups (ROSCAs) common across Africa and Asia — automating contribution tracking, building group credit history, and connecting groups to licensed lenders.',
      approach_tags: ['USSD', 'WhatsApp', 'savings', 'community finance'],
    },
  ],
  'b1000000-0000-0000-0000-000000000002': [
    {
      title: 'Fee Transparency Comparison Tool',
      description: 'A simple web/SMS app that lets migrant workers compare live remittance fees across providers for their specific corridor (e.g., US→Ghana). Aggregates real-time data from public APIs and highlights the cheapest, fastest option.',
      approach_tags: ['data aggregation', 'financial literacy', 'SMS'],
    },
    {
      title: 'Community Remittance Pooling Network',
      description: 'An app that coordinates migrants from the same community to pool transfers — reducing per-transaction fees by batching and enabling collective negotiation with providers.',
      approach_tags: ['community coordination', 'mobile app', 'cost reduction'],
    },
  ],
  'b1000000-0000-0000-0000-000000000003': [
    {
      title: 'Digital Voucher Delivery via SMS',
      description: "An SMS-based system that delivers unique one-time voucher codes to crisis-affected households via field agent registration — redeemable at a network of local shops via USSD. No mobile money account required; the shopkeeper scans the code and is reimbursed by the NGO weekly.",
      approach_tags: ['SMS', 'voucher system', 'feature phone', 'last-mile delivery'],
    },
    {
      title: 'Proxy Identity Enrollment Bot',
      description: 'A WhatsApp chatbot that lets community leaders vouch for displaced neighbors lacking ID — collecting biometric photos, GPS location, and household composition. Creates a lightweight proxy identity that unlocks cash transfers through partner NGOs.',
      approach_tags: ['WhatsApp', 'identity', 'community vouching', 'humanitarian'],
    },
  ],
  'b2000000-0000-0000-0000-000000000001': [
    {
      title: 'FarmPrice SMS Oracle',
      description: 'A lightweight SMS service that delivers real-time commodity prices for specific crops and local markets to farmers — no smartphone required. Aggregates data from public market databases and commodity exchanges.',
      approach_tags: ['SMS', 'market data', 'agriculture', 'feature phone'],
    },
    {
      title: 'Harvest Timing Optimizer',
      description: 'A mobile app for smallholder farmers that uses satellite crop-maturity data and local market price forecasts to recommend the optimal harvest timing and nearest buyer for maximum income.',
      approach_tags: ['satellite data', 'machine learning', 'mobile app', 'decision support'],
    },
  ],
  'b2000000-0000-0000-0000-000000000002': [
    {
      title: 'Spoilage Early Warning SMS',
      description: 'A low-cost IoT sensor placed inside grain storage bags sends temperature/humidity readings via SMS gateway. When conditions cross spoilage thresholds, the farmer receives an alert to sell immediately or move produce to a better-conditioned facility.',
      approach_tags: ['IoT', 'SMS', 'agriculture', 'feature phone'],
    },
    {
      title: 'Harvest-to-Buyer Matching Bot',
      description: 'A WhatsApp chatbot that matches farmers with excess harvest to verified buyers (restaurants, schools, food processors) within 24 hours of harvest — before spoilage begins. Farmers report harvest type, quantity, and location; the bot connects them to buyers who confirm pickup.',
      approach_tags: ['WhatsApp', 'chatbot', 'marketplace', 'food waste'],
    },
  ],
  'b2000000-0000-0000-0000-000000000003': [
    {
      title: 'School Meal Supply Chain Tracker',
      description: 'A mobile app for school feeding program coordinators to log daily meal delivery, flag shortfalls, and trigger automatic reorder requests to district suppliers. Aggregates data across hundreds of schools into a dashboard that NGO program managers use to pre-position buffer stock before disruptions hit.',
      approach_tags: ['mobile app', 'supply chain', 'dashboard', 'education'],
    },
    {
      title: 'Local Supplier Discovery Platform',
      description: "A web platform that maps local smallholder cooperatives willing to supply schools within a district — reducing dependency on national suppliers vulnerable to price shocks. Schools post their monthly requirements; cooperatives bid on contracts.",
      approach_tags: ['web platform', 'procurement', 'local sourcing', 'cooperative'],
    },
  ],
  'b3000000-0000-0000-0000-000000000001': [
    {
      title: 'Reef Alert Network',
      description: 'An open-source thermal monitoring dashboard that aggregates satellite SST data and sends early-warning alerts to reef managers and dive operators when bleaching risk thresholds are crossed — weeks before visual symptoms appear.',
      approach_tags: ['satellite data', 'open source', 'alert system', 'climate monitoring'],
    },
    {
      title: 'Citizen Bleaching Tracker',
      description: 'A mobile app for scuba divers and snorkelers to photograph and geo-tag reef health observations. AI image classification scores bleaching severity; data feeds into a public dashboard used by marine biologists and NGOs.',
      approach_tags: ['citizen science', 'computer vision', 'mobile app', 'open data'],
    },
  ],
  'b3000000-0000-0000-0000-000000000002': [
    {
      title: 'Fish Migration Forecast SMS',
      description: 'An SMS service that delivers weekly fish location forecasts to small-scale fishers based on sea surface temperature and chlorophyll-a satellite data. Fishers register their boat ID and nearest port; the service sends coordinates of likely fish aggregation zones.',
      approach_tags: ['SMS', 'satellite data', 'fisheries', 'climate adaptation'],
    },
    {
      title: 'Livelihood Diversification Navigator',
      description: "A WhatsApp chatbot for fishing communities that assesses a household's existing skills, assets, and location, then recommends specific alternative livelihood options (seaweed farming, aquaculture, ecotourism) with step-by-step guidance — linking to micro-grant programs and training opportunities nearby.",
      approach_tags: ['WhatsApp', 'chatbot', 'livelihoods', 'climate resilience'],
    },
  ],
  'b3000000-0000-0000-0000-000000000003': [
    {
      title: 'Drone Plastic Detection Pipeline',
      description: 'An open-source pipeline that runs a computer vision model on drone footage to automatically detect and classify ocean plastic — producing density maps that researchers and cleanup crews can use to prioritize collection areas. Built on YOLOv8 with a free annotated ocean litter dataset.',
      approach_tags: ['computer vision', 'drone', 'open source', 'ocean plastic'],
    },
    {
      title: 'Beach Cleanup Coordination App',
      description: 'A mobile app that lets volunteer groups report plastic hotspots with geo-tagged photos, coordinate cleanup events, and log collected waste by type. Data feeds into a public map used by municipal authorities and NGOs to prioritize cleanup resources.',
      approach_tags: ['citizen science', 'mobile app', 'open data', 'plastic'],
    },
  ],
  'b4000000-0000-0000-0000-000000000001': [
    {
      title: 'CHW Companion App',
      description: "A low-bandwidth Android app for community health workers that digitizes patient registers, sends automated follow-up SMS reminders to patients, and flags overdue visits — with an offline-first design that works without reliable internet.",
      approach_tags: ['offline-first', 'Android', 'SMS', 'patient management'],
    },
    {
      title: 'Escalation Hotline Triage Bot',
      description: 'A WhatsApp chatbot that guides community health workers through a structured triage protocol for common emergencies — deciding whether to refer immediately or manage at home, with voice note support for low-literacy users.',
      approach_tags: ['WhatsApp', 'chatbot', 'clinical triage', 'voice support'],
    },
  ],
  'b4000000-0000-0000-0000-000000000002': [
    {
      title: 'Medicine Authenticity USSD Checker',
      description: "A USSD app that lets anyone verify a medicine's authenticity by entering the batch number and manufacturer code printed on the packaging. Cross-references a database maintained by national drug regulatory authorities. Works on any feature phone.",
      approach_tags: ['USSD', 'feature phone', 'drug verification', 'public health'],
    },
    {
      title: 'Pharmacist Reporting Network',
      description: 'A WhatsApp chatbot for licensed pharmacists to report suspected counterfeit medicines with photos, batch numbers, and supplier details — feeding a verified tip database used by national drug regulators for targeted inspections.',
      approach_tags: ['WhatsApp', 'reporting', 'pharmacist network', 'supply chain'],
    },
  ],
  'b4000000-0000-0000-0000-000000000003': [
    {
      title: 'Structured CBT WhatsApp Bot',
      description: 'A WhatsApp chatbot that delivers a clinician-reviewed 6-week cognitive behavioral therapy (CBT) program for mild-to-moderate depression — adapted for low-literacy users with voice message support. Each daily session takes under 10 minutes.',
      approach_tags: ['WhatsApp', 'chatbot', 'CBT', 'mental health'],
    },
    {
      title: 'SMS Mental Health Check-In System',
      description: 'A weekly SMS check-in system that sends a 3-question PHQ-2 depression screening to enrolled users and flags responses indicating high distress to a human counselor for follow-up. No smartphone needed.',
      approach_tags: ['SMS', 'mental health screening', 'feature phone', 'PHQ-2'],
    },
  ],
}
