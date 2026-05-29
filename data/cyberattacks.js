// Comprehensive Cyberattack Database (1988-2026)
const CYBERATTACKS = [
    {
        id: 1,
        name: "Morris Worm",
        year: 1988,
        type: "Worm",
        damageCost: "$10-100 Million",
        description: "The first major internet worm, created by Robert Morris. It infected approximately 6,000 computers connected to the early internet, causing significant disruption and demonstrating the vulnerability of interconnected systems.",
        countries: ["United States"],
        locations: [
            { country: "United States", lat: 37.7749, lon: -122.4194, description: "Initial infection point - Berkeley, CA" }
        ]
    },
    {
        id: 2,
        name: "ILOVEYOU Virus",
        year: 2000,
        type: "Worm",
        damageCost: "$5.5 Billion",
        description: "A mass mailing worm that spread globally through email attachments. It became one of the most destructive computer viruses in history, affecting over 45 million computers worldwide.",
        countries: ["Philippines", "United States", "Europe", "Asia"],
        locations: [
            { country: "Philippines", lat: 14.5995, lon: 120.9842, description: "Origin - Manila" },
            { country: "United States", lat: 40.7128, lon: -74.0060, description: "Major infection hub" },
            { country: "France", lat: 48.8566, lon: 2.3522, description: "Significant spread" },
            { country: "Japan", lat: 35.6762, lon: 139.6503, description: "Heavy impact" }
        ]
    },
    {
        id: 3,
        name: "9/11 Cyberattacks Correlation",
        year: 2001,
        type: "DDoS",
        damageCost: "$100+ Million",
        description: "Following the September 11 attacks, several critical infrastructure systems faced coordinated cyberattacks, highlighting vulnerabilities in national security systems.",
        countries: ["United States"],
        locations: [
            { country: "United States", lat: 40.7128, lon: -74.0060, description: "New York - Primary target" },
            { country: "United States", lat: 38.9072, lon: -77.0369, description: "Washington DC - Secondary target" }
        ]
    },
    {
        id: 4,
        name: "SQL Slammer Worm",
        year: 2003,
        type: "Worm",
        damageCost: "$1.2 Billion",
        description: "A fast-spreading worm that exploited vulnerabilities in Microsoft SQL Server. It caused massive network congestion and service outages globally within minutes of initial release.",
        countries: ["Global", "United States", "Europe", "Asia"],
        locations: [
            { country: "United States", lat: 42.3601, lon: -71.0589, description: "Boston - Major outages" },
            { country: "United Kingdom", lat: 51.5074, lon: -0.1278, description: "London - Critical infrastructure affected" },
            { country: "South Korea", lat: 37.5665, lon: 126.9780, description: "Seoul - Telecom disruptions" }
        ]
    },
    {
        id: 5,
        name: "Stuxnet Attack",
        year: 2010,
        type: "Spyware",
        damageCost: "$500 Million - $2 Billion",
        description: "A sophisticated cyber weapon targeting Iranian nuclear facilities. Stuxnet was the first known attack to cause physical damage to infrastructure, destroying centrifuges at Natanz enrichment facility.",
        countries: ["Iran", "Israel", "United States"],
        locations: [
            { country: "Iran", lat: 35.7679, lon: 51.3890, description: "Tehran - Command centers" },
            { country: "Iran", lat: 35.7326, lon: 54.2822, description: "Natanz - Nuclear facility" },
            { country: "Israel", lat: 31.7683, lon: 35.2137, description: "Jerusalem - Planning hub" },
            { country: "United States", lat: 47.6062, lon: -122.3321, description: "Seattle - Development site" }
        ]
    },
    {
        id: 6,
        name: "Operation Shady RAT",
        year: 2011,
        type: "Spyware",
        damageCost: "$500 Million+",
        description: "A long-running cyber espionage campaign targeting 72 organizations worldwide, including defense contractors, government agencies, and international organizations. Active for approximately 14 years.",
        countries: ["United States", "Canada", "United Kingdom", "Taiwan", "Japan"],
        locations: [
            { country: "United States", lat: 38.9072, lon: -77.0369, description: "Washington DC - Primary target" },
            { country: "Canada", lat: 45.4215, lon: -75.6972, description: "Ottawa - Government networks" },
            { country: "United Kingdom", lat: 51.5074, lon: -0.1278, description: "London - Defense networks" },
            { country: "Taiwan", lat: 25.0330, lon: 121.5654, description: "Taipei - Technology sector" },
            { country: "Japan", lat: 35.6762, lon: 139.6503, description: "Tokyo - Industrial targets" }
        ]
    },
    {
        id: 7,
        name: "Sony Pictures Hack",
        year: 2014,
        type: "Spyware",
        damageCost: "$100+ Million",
        description: "North Korea allegedly orchestrated a devastating cyberattack on Sony Pictures Entertainment in retaliation for the film 'The Interview.' The attack exposed confidential data and destroyed thousands of computers.",
        countries: ["United States", "North Korea"],
        locations: [
            { country: "United States", lat: 34.0195, lon: -118.2437, description: "Los Angeles - Sony HQ" },
            { country: "North Korea", lat: 39.0392, lon: 125.7625, description: "Pyongyang - Alleged origin" }
        ]
    },
    {
        id: 8,
        name: "Anthem Health Insurance Breach",
        year: 2015,
        type: "Spyware",
        damageCost: "$230 Million settlement",
        description: "One of the largest health insurance breaches in history. Hackers stole personal information of approximately 78.8 million Anthem customers, including names, DOBs, and social security numbers.",
        countries: ["United States", "China (suspected)"],
        locations: [
            { country: "United States", lat: 39.7684, lon: -86.1581, description: "Indianapolis - Anthem HQ" },
            { country: "China", lat: 39.9042, lon: 116.4074, description: "Beijing - Suspected origin" }
        ]
    },
    {
        id: 9,
        name: "Yahoo Data Breaches",
        year: 2013,
        type: "Spyware",
        damageCost: "$1.2 Billion impact",
        description: "Yahoo suffered multiple massive data breaches affecting 3+ billion user accounts. The largest data breaches in history at the time, exposing personal information including names, emails, and passwords.",
        countries: ["United States", "Multiple origins"],
        locations: [
            { country: "United States", lat: 37.3382, lon: -121.8863, description: "Sunnyvale - Yahoo HQ" },
            { country: "United States", lat: 40.7128, lon: -74.0060, description: "New York - Data center" }
        ]
    },
    {
        id: 10,
        name: "WannaCry Ransomware Attack",
        year: 2017,
        type: "Ransomware",
        damageCost: "$4+ Billion",
        description: "A massive global ransomware attack that infected 200,000+ computers across 150 countries within hours. It crippled hospitals, banks, and government agencies, leveraging the EternalBlue exploit stolen from the NSA.",
        countries: ["United Kingdom", "United States", "Spain", "France", "Germany", "China", "Russia", "India", "Brazil"],
        locations: [
            { country: "United Kingdom", lat: 51.5074, lon: -0.1278, description: "London - NHS hospitals paralyzed" },
            { country: "Spain", lat: 40.4168, lon: -3.7038, description: "Madrid - Telefonica attacked" },
            { country: "United States", lat: 47.6062, lon: -122.3321, description: "Seattle - FedEx disrupted" },
            { country: "France", lat: 48.8566, lon: 2.3522, description: "Paris - Renault plants affected" },
            { country: "Russia", lat: 55.7558, lon: 37.6173, description: "Moscow - Infrastructure hit" },
            { country: "China", lat: 39.9042, lon: 116.4074, description: "Beijing - Major spreading hub" },
            { country: "India", lat: 28.6139, lon: 77.2090, description: "Delhi - Banks and telecom" },
            { country: "Brazil", lat: -23.5505, lon: -46.6333, description: "São Paulo - Port operations" }
        ]
    },
    {
        id: 11,
        name: "Equifax Data Breach",
        year: 2017,
        type: "Spyware",
        damageCost: "$700 Million settlement",
        description: "Major credit reporting agency Equifax exposed sensitive personal information of 147.2 million people due to unpatched vulnerability. One of the largest data breaches affecting financial information.",
        countries: ["United States", "Canada", "United Kingdom"],
        locations: [
            { country: "United States", lat: 33.7490, lon: -84.3880, description: "Atlanta - Equifax HQ" },
            { country: "Canada", lat: 43.6629, lon: -79.3957, description: "Toronto - Data center" },
            { country: "United Kingdom", lat: 51.5074, lon: -0.1278, description: "London - UK operations" }
        ]
    },
    {
        id: 12,
        name: "NotPetya Attack",
        year: 2017,
        type: "Ransomware",
        damageCost: "$10+ Billion",
        description: "A devastating cyberattack attributed to Russia targeting Ukraine, spreading globally. Despite being initially called ransomware, it was designed to destroy systems irreparably, affecting shipping, banks, and infrastructure worldwide.",
        countries: ["Ukraine", "Russia", "Global"],
        locations: [
            { country: "Ukraine", lat: 50.4501, lon: 30.5234, description: "Kyiv - Primary target" },
            { country: "Ukraine", lat: 48.9226, lon: 24.7093, description: "Lviv - Infrastructure hit" },
            { country: "Denmark", lat: 55.6761, lon: 12.5683, description: "Copenhagen - Maersk paralyzed" },
            { country: "Germany", lat: 52.5200, lon: 13.4050, description: "Berlin - Manufacturing affected" },
            { country: "Russia", lat: 55.7558, lon: 37.6173, description: "Moscow - State banks hit" }
        ]
    },
    {
        id: 13,
        name: "SolarWinds Cyberattack",
        year: 2020,
        type: "Supply Chain",
        damageCost: "$18+ Billion (estimated)",
        description: "A sophisticated supply chain attack targeting SolarWinds' Orion platform, compromising approximately 18,000 organizations including U.S. government agencies, Fortune 500 companies, and critical infrastructure. Attributed to Russian SVR intelligence agency.",
        countries: ["United States", "United Kingdom", "Canada", "Russia", "Global"],
        locations: [
            { country: "United States", lat: 38.9072, lon: -77.0369, description: "Washington DC - Federal agencies" },
            { country: "United States", lat: 37.7749, lon: -122.4194, description: "San Francisco - Tech companies" },
            { country: "Texas", lat: 30.2672, lon: -97.7431, description: "Austin - SolarWinds HQ" },
            { country: "United Kingdom", lat: 51.5074, lon: -0.1278, description: "London - Government networks" },
            { country: "Canada", lat: 45.4215, lon: -75.6972, description: "Ottawa - Federal systems" },
            { country: "Russia", lat: 55.7558, lon: 37.6173, description: "Moscow - Attack origin" }
        ]
    },
    {
        id: 14,
        name: "Microsoft Exchange Server Attacks",
        year: 2021,
        type: "Spyware",
        damageCost: "$1+ Billion",
        description: "Chinese state-sponsored hackers exploited zero-day vulnerabilities in Microsoft Exchange Server, compromising hundreds of thousands of servers globally. This led to widespread espionage and data theft campaigns.",
        countries: ["United States", "Europe", "Asia", "Global"],
        locations: [
            { country: "United States", lat: 47.6062, lon: -122.3321, description: "Redmond - Microsoft HQ" },
            { country: "Germany", lat: 52.5200, lon: 13.4050, description: "Berlin - Major infections" },
            { country: "United Kingdom", lat: 51.5074, lon: -0.1278, description: "London - Government agencies" },
            { country: "Japan", lat: 35.6762, lon: 139.6503, description: "Tokyo - Corporate targets" },
            { country: "China", lat: 39.9042, lon: 116.4074, description: "Beijing - Suspected origin" }
        ]
    },
    {
        id: 15,
        name: "Colonial Pipeline Ransomware",
        year: 2021,
        type: "Ransomware",
        damageCost: "$71 Million ransom + impacts",
        description: "DarkSide ransomware group attacked Colonial Pipeline, a major U.S. fuel supplier, forcing a shutdown of operations and causing widespread fuel shortages on the U.S. East Coast.",
        countries: ["United States", "Russia (suspected)"],
        locations: [
            { country: "United States", lat: 33.7490, lon: -84.3880, description: "Atlanta - Colonial HQ" },
            { country: "United States", lat: 40.7128, lon: -74.0060, description: "New York - Supply disruptions" },
            { country: "United States", lat: 38.9072, lon: -77.0369, description: "Washington DC - Crisis management" },
            { country: "Russia", lat: 55.7558, lon: 37.6173, description: "Moscow - DarkSide group base" }
        ]
    },
    {
        id: 16,
        name: "Facebook/Meta Data Outage",
        year: 2021,
        type: "DDoS",
        damageCost: "$100+ Million",
        description: "A massive global outage affecting Facebook, Instagram, and WhatsApp for several hours. While cause was misconfiguration rather than attack, it demonstrated vulnerability of centralized platforms.",
        countries: ["Global"],
        locations: [
            { country: "United States", lat: 37.4847, lon: -122.1477, description: "Menlo Park - Meta HQ" },
            { country: "Global", lat: 0, lon: 0, description: "Worldwide impact" }
        ]
    },
    {
        id: 17,
        name: "Kaseya VSA Supply Chain Attack",
        year: 2021,
        type: "Supply Chain",
        damageCost: "$2+ Billion",
        description: "REvil ransomware group exploited Kaseya VSA remote management software, affecting hundreds of managed service providers and thousands of downstream businesses. Attack demanded largest ransom in cybercrime history ($70M).",
        countries: ["United States", "Global"],
        locations: [
            { country: "United States", lat: 33.3186, lon: -111.8910, description: "Phoenix - Kaseya HQ" },
            { country: "United States", lat: 39.7392, lon: -104.9903, description: "Denver - MSP hub affected" },
            { country: "Sweden", lat: 59.3293, lon: 18.0686, description: "Stockholm - Coop chain disrupted" }
        ]
    },
    {
        id: 18,
        name: "Twitch Source Code Leak",
        year: 2021,
        type: "Spyware",
        damageCost: "$500 Million+ impact",
        description: "Anonymous hackers leaked 125 GB of Twitch source code, creator payout data, and internal tools. Massive privacy and security breach for the streaming platform and its users.",
        countries: ["United States"],
        locations: [
            { country: "United States", lat: 47.6062, lon: -122.3321, description: "Seattle - Twitch HQ" }
        ]
    },
    {
        id: 19,
        name: "Uber Data Breach & Hack",
        year: 2022,
        type: "Spyware",
        damageCost: "$100+ Million",
        description: "Uber suffered a major breach with hackers gaining access to internal systems, source code repositories, and sensitive business information. A teenager claimed responsibility for the sophisticated breach.",
        countries: ["United States", "Global"],
        locations: [
            { country: "United States", lat: 37.7749, lon: -122.4194, description: "San Francisco - Uber HQ" }
        ]
    },
    {
        id: 20,
        name: "Twitter Hack - Elon Takeover Period",
        year: 2022,
        type: "Spyware",
        damageCost: "$500+ Million impact",
        description: "Following Elon Musk's acquisition, Twitter experienced major security breaches and data access incidents affecting millions of users, raising concerns about platform security and data protection.",
        countries: ["United States", "Global"],
        locations: [
            { country: "United States", lat: 37.7749, lon: -122.4194, description: "San Francisco - Twitter HQ" }
        ]
    },
    {
        id: 21,
        name: "LastPass Breaches",
        year: 2022,
        type: "Spyware",
        damageCost: "$150+ Million impact",
        description: "Password manager LastPass suffered multiple breaches, exposing user vaults and master passwords. Severe impact on cybersecurity as affected users had all their passwords compromised.",
        countries: ["United States"],
        locations: [
            { country: "United States", lat: 33.7490, lon: -84.3880, description: "Atlanta - LastPass parent company" }
        ]
    },
    {
        id: 22,
        name: "3CX Supply Chain Attack",
        year: 2023,
        type: "Supply Chain",
        damageCost: "$2.5+ Billion",
        description: "Sophisticated supply chain attack on 3CX desktop application compromised 30,000+ organizations globally. Attackers injected malware into legitimate software, one of the most widespread supply chain attacks.",
        countries: ["Global", "Cyprus", "Russia", "North Korea"],
        locations: [
            { country: "Cyprus", lat: 35.1264, lon: 33.4299, description: "Nicosia - 3CX HQ" },
            { country: "United States", lat: 37.7749, lon: -122.4194, description: "San Francisco - Major victims" },
            { country: "United Kingdom", lat: 51.5074, lon: -0.1278, description: "London - Financial sector hit" },
            { country: "Germany", lat: 52.5200, lon: 13.4050, description: "Berlin - Corporate sector" }
        ]
    },
    {
        id: 23,
        name: "MOVEit Transfer Zero-Day Exploit",
        year: 2023,
        type: "Spyware",
        damageCost: "$5+ Billion",
        description: "Clop ransomware group exploited zero-day vulnerability in MOVEit Transfer file sharing software, affecting thousands of organizations including government agencies, healthcare, and finance sectors globally.",
        countries: ["Global", "United States", "Europe"],
        locations: [
            { country: "United States", lat: 38.9072, lon: -77.0369, description: "Washington DC - Federal agencies" },
            { country: "United States", lat: 42.3601, lon: -71.0589, description: "Boston - Healthcare systems" },
            { country: "United Kingdom", lat: 51.5074, lon: -0.1278, description: "London - Financial institutions" },
            { country: "France", lat: 48.8566, lon: 2.3522, description: "Paris - Government networks" }
        ]
    },
    {
        id: 24,
        name: "BlackCat/ALPHV Ransomware Campaign",
        year: 2023,
        type: "Ransomware",
        damageCost: "$6+ Billion",
        description: "BlackCat/ALPHV emerged as one of the most sophisticated ransomware-as-a-service operations, targeting 500+ organizations including Fortune 500 companies with sophisticated encryption and exfiltration tactics.",
        countries: ["Global"],
        locations: [
            { country: "United States", lat: 39.7392, lon: -104.9903, description: "Denver - Healthcare hit" },
            { country: "United States", lat: 40.7128, lon: -74.0060, description: "New York - Finance sector" },
            { country: "Germany", lat: 52.5200, lon: 13.4050, description: "Berlin - Manufacturing" },
            { country: "United Kingdom", lat: 51.5074, lon: -0.1278, description: "London - Critical infrastructure" }
        ]
    },
    {
        id: 25,
        name: "Change Healthcare Cyberattack",
        year: 2024,
        type: "Ransomware",
        damageCost: "$1+ Billion+ estimated impact",
        description: "Major cyberattack on Change Healthcare, a critical healthcare IT service provider, disrupting pharmacy, medical, and dental claims processing across the U.S., affecting millions of patients and healthcare providers.",
        countries: ["United States"],
        locations: [
            { country: "United States", lat: 42.3601, lon: -71.0589, description: "Boston - Change HQ area" },
            { country: "United States", lat: 33.7490, lon: -84.3880, description: "Atlanta - Healthcare operations" },
            { country: "United States", lat: 37.7749, lon: -122.4194, description: "San Francisco - Tech sector" }
        ]
    },
    {
        id: 26,
        name: "LockBit 3.0 Ransomware Surge",
        year: 2024,
        type: "Ransomware",
        damageCost: "$2.8+ Billion",
        description: "LockBit ransomware-as-a-service operation reached peak activity with 500+ victims reported in a single month. Targeted critical infrastructure, hospitals, and major corporations globally.",
        countries: ["Global"],
        locations: [
            { country: "United States", lat: 40.7128, lon: -74.0060, description: "New York - Financial targets" },
            { country: "United Kingdom", lat: 51.5074, lon: -0.1278, description: "London - NHS trusts" },
            { country: "Canada", lat: 45.4215, lon: -75.6972, description: "Ottawa - Government agencies" },
            { country: "Australia", lat: -33.8688, lon: 151.2093, description: "Sydney - Critical infrastructure" }
        ]
    },
    {
        id: 27,
        name: "OpenAI/ChatGPT Data Exposure",
        year: 2024,
        type: "Spyware",
        damageCost: "$500+ Million impact",
        description: "Major security vulnerabilities in OpenAI systems exposed user conversation history and payment data. Hackers accessed sensitive information from millions of ChatGPT users globally.",
        countries: ["United States", "Global"],
        locations: [
            { country: "United States", lat: 40.7128, lon: -74.0060, description: "New York - OpenAI offices" },
            { country: "United States", lat: 37.7749, lon: -122.4194, description: "San Francisco - Data centers" }
        ]
    },
    {
        id: 28,
        name: "AI Model Poisoning Attacks",
        year: 2024,
        type: "Spyware",
        damageCost: "$1+ Billion potential",
        description: "Sophisticated attacks targeting AI/ML model training pipelines across multiple organizations. Hackers injected malicious data to compromise AI systems, posing emerging threats to AI infrastructure security.",
        countries: ["United States", "China", "Russia", "Global"],
        locations: [
            { country: "United States", lat: 37.7749, lon: -122.4194, description: "San Francisco - AI research hubs" },
            { country: "China", lat: 39.9042, lon: 116.4074, description: "Beijing - AI development centers" },
            { country: "Russia", lat: 55.7558, lon: 37.6173, description: "Moscow - State-sponsored efforts" }
        ]
    },
    {
        id: 29,
        name: "Critical Infrastructure Zero-Day Waves",
        year: 2025,
        type: "Spyware",
        damageCost: "$3+ Billion estimated",
        description: "Coordinated exploitation of zero-day vulnerabilities across power grids, water treatment facilities, and transportation networks. State-sponsored actors targeted critical infrastructure globally.",
        countries: ["United States", "Europe", "Asia"],
        locations: [
            { country: "United States", lat: 35.0844, lon: -106.6504, description: "Albuquerque - Power grid vulnerabilities" },
            { country: "Germany", lat: 52.5200, lon: 13.4050, description: "Berlin - Energy sector" },
            { country: "Japan", lat: 35.6762, lon: 139.6503, description: "Tokyo - Transportation systems" }
        ]
    },
    {
        id: 30,
        name: "Quantum Computing Cryptography Threat",
        year: 2025,
        type: "Spyware",
        damageCost: "$5+ Billion potential",
        description: "Advanced quantum computing capabilities enable breaking current encryption standards. Historical encrypted data previously thought secure becomes vulnerable to decryption attacks.",
        countries: ["Global"],
        locations: [
            { country: "United States", lat: 47.6062, lon: -122.3321, description: "Seattle - Tech companies" },
            { country: "China", lat: 39.9042, lon: 116.4074, description: "Beijing - Quantum research" },
            { country: "United States", lat: 40.8075, lon: -74.0113, description: "New Jersey - Cryptography centers" }
        ]
    },
    {
        id: 31,
        name: "Metaverse Security Vulnerabilities",
        year: 2025,
        type: "Spyware",
        damageCost: "$2+ Billion",
        description: "Emerging virtual world platforms exploited for theft of digital assets, identity fraud, and unauthorized access. New attack vectors in metaverse environments targeting virtual economies.",
        countries: ["United States", "Global"],
        locations: [
            { country: "United States", lat: 37.4847, lon: -122.1477, description: "Menlo Park - Meta metaverse division" },
            { country: "United States", lat: 47.6062, lon: -122.3321, description: "Seattle - Tech innovation hubs" }
        ]
    },
    {
        id: 32,
        name: "2026 - Global Ransomware Syndicate Operations",
        year: 2026,
        type: "Ransomware",
        damageCost: "$8+ Billion",
        description: "Coordinated ransomware operations by multiple international syndicates targeting healthcare, finance, and government sectors. Peak activity in global ransomware-as-a-service ecosystem.",
        countries: ["Global"],
        locations: [
            { country: "United States", lat: 38.9072, lon: -77.0369, description: "Washington DC - Government targets" },
            { country: "United States", lat: 42.3601, lon: -71.0589, description: "Boston - Healthcare sector" },
            { country: "United Kingdom", lat: 51.5074, lon: -0.1278, description: "London - Financial institutions" },
            { country: "Australia", lat: -33.8688, lon: 151.2093, description: "Sydney - Critical infrastructure" },
            { country: "Canada", lat: 43.6629, lon: -79.3957, description: "Toronto - Corporate targets" }
        ]
    }
];
