export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  photo?: string;
  skills?: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface FourPInfo {
  title: string;
  description: string;
  icon: string;
  bullets?: string[];
}

export interface ComparisonRow {
  feature: string;
  whatsapp: { status: "good" | "bad" | "warn"; text: string };
  glovo: { status: "good" | "bad" | "warn"; text: string };
  runit: { status: "good" | "bad" | "warn"; text: string };
}

export interface FundAllocation {
  category: string;
  percentage: number;
  amount: string;
  description: string;
  color: string;
}

export interface Metric {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  description: string;
}

export const unitEconomics = {
  cacCost: "₦543",
  coreRev: "₦45",
  blendedRev: "12",
  payback: "~1–2 Months",
  arpu: "₦622/mo"
};

export const fiveYearProjections = [
  { year: 1, users: "5,000",   revenue: "40.35M",  cacCost: "2.72M",   netProfit: "37.64M",  revNum: 40.35 },
  { year: 2, users: "25,000",  revenue: "201.75M", cacCost: "13.58M",  netProfit: "188.18M", revNum: 201.75 },
  { year: 3, users: "70,000",  revenue: "564.90M", cacCost: "38.01M",  netProfit: "526.89M", revNum: 564.9 },
  { year: 4, users: "120,000", revenue: "968.40M", cacCost: "65.16M",  netProfit: "903.24M", revNum: 968.4 },
  { year: 5, users: "200,000", revenue: "1.614B",  cacCost: "108.60M", netProfit: "1.505B",  revNum: 1614 },
];

export const tagline = `Campus Life Meets Convenience`;
export const subtitle = `Don't Stress It. Just Run-It.`;
export const svcgRef = `RC: 9067081`;

export const problemText = `It’s 2:00 PM. A student, exhausted after hours in a compounding lab, is desperate for lunch before a 4:00 PM exam. 

With no time for the chaotic 45-minute cafeteria queue, they turn to a fragmented WhatsApp group. An hour passes. The guy finally shows up right before the test demanding double the fee because "the sun is too hot." 

That is severe price-gouging, and the student pays it because they are out of options. Current campus logistics are chaotic, predatory, and broken.`;

export const solutionText = `Run-IT replaces that exhaustion with a high-velocity system of Optimization.
By stripping away the guesswork of informal groups and replacing them with an inDrive-style reverse-bidding engine, we deliver absolute Convenience. You no longer beg for a favor; you delegate a task to a verified peer who is already on that route, ensuring your lunch arrives in 15 minutes, not 60.

Our geofenced digital escrow doesn't just stop the gouging—it professionalizes the student hustle into a secure, scalable model for Income Generation. We turn every walk to a lecture into a business opportunity, allowing 'Runners' to monetize their movement while their peers finally buy back the time they need to succeed.

In the Run-IT ecosystem, we don't just move packages; we move the barriers to your academic success.`;

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Post Task",
    description: "Requester adds location & price. Funds are held in escrow.",
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  },
  {
    number: "02",
    title: "Bid",
    description: "Runners accept or counter-bid (maximum of 3).",
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  },
  {
    number: "03",
    title: "Execute",
    description: "Real-time status updates are provided.",
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  },
  {
    number: "04",
    title: "Complete",
    description: "Requester gives 2-step confirmation. Funds are released.",
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  },
  {
    number: "05",
    title: "Earn",
    description: "Runner withdraws earned funds to their bank.",
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
  },
];

export const whyNowReasons = [
  {
    title: "Digital Native Shift",
    description: "Mobile-first campus culture at peak",
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
  },
  {
    title: "Gig Work Acceptance",
    description: "High acceptance of student-led side hustles",
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>`,
  },
  {
    title: "CMUL Advantage",
    description: 'Highest "Need-to-Time" ratio in Nigeria',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  },
];

export const fourPs: FourPInfo[] = [
  {
    title: "Product",
    description: "Convenient errand execution platform",
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>`,
  },
  {
    title: "Price",
    description: "Low-cost, student-friendly pricing",
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/><path d="M7 7h.01"/></svg>`,
  },
  {
    title: "Place",
    description: "Campus-first → expand to urban areas",
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  },
  {
    title: "Promotion",
    description: "",
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>`,
    bullets: [
      "Campus ambassadors",
      "Referral programs",
      "WhatsApp virality",
      "Student influencers"
    ]
  }
];

export const tractionStats = [
  { value: "120+", numericValue: 120, suffix: "+", prefix: "", label: "Active Users", description: "Students actively using the platform" },
  { value: "100+", numericValue: 100, suffix: "+", prefix: "", label: "Paying Customers", description: "Active task requesters" },
  { value: "₦15K+", numericValue: 15, suffix: "K+", prefix: "₦", label: "Revenue Generated", description: "Revenue from early pilot phase" },
  { value: "MVP", numericValue: 1, suffix: "", prefix: "", label: "Working Application", description: "Fully functional PWA" },
  { value: "6", numericValue: 5, suffix: "", prefix: "", label: "Core Team", description: "Dedicated staff driving growth" }
];

export const tractionInsights = [
  { title: "Flexible Earning", description: "Students are open to movement-based, flexible earning." },
  { title: "Errands Outsource", description: "Clear demand for outsourcing various campus tasks." },
  { title: "Rapid Adoption", description: "Dense campus environments enable rapid service adoption." },
];

export const revenueTable = [
  { type: "Small (Food/Pharmacy)", fee: "\u20A6300", revenue: "\u20A675", runner: "\u20A6225" },
  { type: "Medium (Grocery/Heavy)", fee: "\u20A6350", revenue: "\u20A687.50", runner: "\u20A6262.50" },
  { type: "Complex/Multi-Stop", fee: "\u20A6500+", revenue: "\u20A6125+", runner: "\u20A6375+" },
];

export const comparisonData: ComparisonRow[] = [
  {
    feature: "Price Control",
    whatsapp: { status: "bad", text: "Fixed / Gouged" },
    glovo: { status: "bad", text: "Platform dictates" },
    runit: { status: "good", text: "You negotiate" },
  },
  {
    feature: "Campus-Specific",
    whatsapp: { status: "warn", text: "Informal only" },
    glovo: { status: "bad", text: "Generic city-wide" },
    runit: { status: "good", text: "Geofenced campus" },
  },
  {
    feature: "Payment Security",
    whatsapp: { status: "bad", text: "Cash, zero trust" },
    glovo: { status: "good", text: "Card payments" },
    runit: { status: "good", text: "Escrow + OTP" },
  },
  {
    feature: "Peer Economy",
    whatsapp: { status: "bad", text: "Unvetted runners" },
    glovo: { status: "bad", text: "Professional riders" },
    runit: { status: "good", text: "Vetted students" },
  },
  {
    feature: "Dispute Resolution",
    whatsapp: { status: "bad", text: "No resolution" },
    glovo: { status: "warn", text: "24-72 hours" },
    runit: { status: "good", text: "Within 2 hours" },
  },
  {
    feature: "Delivery Cost",
    whatsapp: { status: "bad", text: "Variable high" },
    glovo: { status: "bad", text: "\u20A6800\u2013\u20A61,500+" },
    runit: { status: "good", text: "\u20A6250\u2013\u20A6500" },
  },
];

export const unfairAdvantages = [
  { title: "Deep Campus Integration", description: "Built specifically for the CMUL/UNILAG ecosystem." },
  { title: "We Are the User", description: "The founding team are the exact demographics being served." },
  { title: "Escrow-First Architecture", description: "Trust layer purpose-built for student micro-economy." },
  { title: "The Market Sets the Price", description: "Students negotiate their own fair rates, not platform-dictated fees." },
];

export const team: TeamMember[] = [
  {
    name: "Ekundayo David",
    role: "CEO",
    initials: "ED",
    photo: "/public/images/team/david.jpeg",
    skills: ["Business Strategy", "Partnerships", "Growth"]
  },
  {
    name: "Balogun Muhammed-Awwal",
    role: "CTO",
    initials: "BM",
    photo: "/public/images/team/balogun.jpeg",
    skills: ["9+ Yrs Software Engineering", "System Architecture", "Technical Lead"]
  },
  // {
  //   name: "Ogunmola Helen",
  //   role: "Financial Analyst",
  //   initials: "OH",
  //   photo: "/public/images/team/helen.jpeg",
  //   skills: ["Financial Reporting & Analysis", "Data Analyst"]
  // },
  {
    name: "Arifalo Rufus",
    role: "CMO",
    initials: "AR",
    photo: "/public/images/team/rufus.jpeg",
    skills: ["Growth Marketing", "Brand Identity", "User Acquisition"]
  },
  // {
  //   name: "Marvelous Olubo",
  //   role: "Marketing Analyst",
  //   initials: "MO",
  //   photo: "/public/images/team/marvelous.jpeg",
  //   skills: ["Brand Storyteller", "Event and Red Carpet Host", "COO, Medicpreneur"]
  // },
  {
    name: "Obidiya Erioluwanmi",
    role: "COO",
    initials: "OE",
    photo: "/public/images/team/Eri.jpeg",
    skills: ["Operations", "Logistics", "Community Mgmt"]
  },
  {
    name: "Okereafor Destiny",
    role: "CFO",
    initials: "OD",
    photo: "/public/images/team/dezzi.jpeg",
    skills: ["Financial Models", "Risk Analysis", "Governance", "MTN Finalist 2022"]
  },
  //   {
  //   name: "Faith Dolapo, OBIDIYA",
  //   role: "Legal Counsel",
  //   initials: "FD",
  //   photo: "/public/images/team/faith.jpg",
  //   skills: ["Legal Counsel", "LL.M", "Corporate & Intellectual Property Lawyer", "Startup & Business Law Advisor"]
  // },
  // {
  //   name: "Martins Wohu-Owo",
  //   role: "Creative Director",
  //   initials: "MW",
  //   photo: "/public/images/team/martins.jpeg",
  //   skills: ["Creative Direction", "Brand Identity", "User Acquisition"]
  // }


];

export const fundAllocations: FundAllocation[] = [
  {
    category: "Product & Digital Infrastructure",
    percentage: 28,
    amount: "₦4,200,000",
    description: "MVP scaling, wallet system, backend security, native apps",
    color: "var(--purple-600)",
  },
  {
    category: "Marketing & Campus Activation",
    percentage: 32,
    amount: "₦4,800,000",
    description: "Activation across 12 universities, student influencers",
    color: "var(--purple-500)",
  },
  {
    category: "Pilot & Operations",
    percentage: 30,
    amount: "₦4,500,000",
    description: "Beta deployment at 3-5 campuses, team stipends",
    color: "var(--purple-400)",
  },
  {
    category: "Contingency Reserve",
    percentage: 10,
    amount: "₦1,500,000",
    description: "Technical glitches, regulatory changes, rapid-response",
    color: "var(--purple-300)",
  },
];

export const milestones = [
  "2,000 active users on platform",
  "5,000 transactions processed",
  "Full UNILAG ecosystem rollout",
  "Expansion to 3-5 additional campuses",
];

// Vision & Mission
export const visionText = `To become the definitive "Campus Operating System" for Africa. We envision a unified, continent-wide micro-economy where every student has the infrastructure to optimize their academic journey and unlock their full economic potential.`;
export const missionText = `To build a scalable, campus-native infrastructure that standardizes logistics and student services across Africa. We aim to empower students by converting their daily movement and skills into structured earning opportunities while providing a seamless, peer-to-peer marketplace that buys back their time.`;

// Market Funnel (replaces marketMetrics)
export const marketFunnel = [
  {
    tier: "TAM",
    headline: "Total Addressable Market",
    detail: "2.7M tertiary students × ₦400 avg task × 6 tasks/month",
    highlight: "₦6.48B/month",
  },
  {
    tier: "SOM",
    headline: "Target Adoption",
    detail: "10% initial market penetration",
    highlight: "270,000 users",
  },
  {
    tier: "UNIT",
    headline: "Revenue Per User",
    detail: "15–25% commission (₦60–₦100/task) × 6 tasks/month",
    highlight: "₦360–₦600/mo",
  },
];

export const revenueProjections = [
  { scenario: "Conservative (15%)", amount: "₦97.2M", period: "/month" },
  { scenario: "Optimistic (25%)", amount: "₦162M", period: "/month" },
];

// SWOT
export const swotAnalysis = [
  {
    category: "Strengths",
    color: "var(--green)",
    points: ["Low capital model.", "Strong campus network."],
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,
  },
  {
    category: "Weaknesses",
    color: "var(--amber)",
    points: ["Initial trust barrier.", "Runner dependency."],
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  },
  {
    category: "Opportunities",
    color: "var(--purple-500)",
    points: ["Expansion to cities.", "Partnerships (cafeterias, stores)."],
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  },
  {
    category: "Threats",
    color: "var(--red)",
    points: ["Large logistics entrants.", "Fraud risks."],
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
  },
];

// Survey Charts
export const surveyCharts = [
  {
    title: "Runner Readiness",
    subtitle: "How ready are you to Run-it?",
    sampleSize: 38,
    slices: [
      { label: "Interested, tell me more", percentage: 60.5, color: "#f43f5e" },
      { label: "Already tying my sneakers!", percentage: 39.5, color: "#8b5cf6" },
    ],
  },
  {
    title: "Academic Coverage",
    subtitle: "Current academic profile",
    sampleSize: 38,
    slices: [
      { label: "Radiography", percentage: 21.1, color: "#8b5cf6" },
      { label: "Pharmacy", percentage: 18.4, color: "#f43f5e" },
      { label: "Medicine", percentage: 15.8, color: "#6d3fd4" },
      { label: "MLS", percentage: 15.8, color: "#10b981" },
      { label: "Physiology", percentage: 13.2, color: "#f59e0b" },
      { label: "Physiotherapy", percentage: 7.9, color: "#c4b5fd" },
      { label: "Nursing", percentage: 5.3, color: "#a78bfa" },
      { label: "Dentistry", percentage: 1.5, color: "#3b2d5c" },
      { label: "Pharmacology", percentage: 1.0, color: "#ddd6fe" },
    ],
  },
];
