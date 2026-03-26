export interface TeamMember {
  name: string;
  role: string;
  initials: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
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

export const tagline = "Campus Life Meets Convenience";
export const subtitle = "Don't Stress It. Just Run-It.";
export const svcgRef = "University of Lagos (UNILAG) | S-VCG Application Ref: SVC-2025-000J6I";

export const problemText = "Time-starved university students balancing heavy academic loads face chaotic, fragmented campus logistics with unreliable informal solutions and severe price-gouging.";

export const solutionText = "An inDrive-style reverse-bidding PWA with secure Digital Escrow and Geofenced Two-Step Market Flow that eliminates fraud and wasted journeys.";

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

export const marketMetrics: Metric[] = [
  {
    value: "3K+",
    numericValue: 3000,
    suffix: "K+",
    label: "CMUL Students",
    description: "Initial launch ecosystem at College of Medicine, University of Lagos",
  },
  {
    value: "2.7M+",
    numericValue: 2700000,
    suffix: "M+",
    label: "Nigerian Students",
    description: "Currently enrolled in tertiary institutions nationwide",
  },
  {
    value: "9M+",
    numericValue: 9000000,
    suffix: "M+",
    label: "Sub-Saharan Africa",
    description: "Students in education or training by 2026",
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

export const tractionStats = [
  { value: "100%", numericValue: 100, suffix: "%", label: "Runner Readiness", description: "Interest in participating as Founding Runners" },
  { value: "~100", numericValue: 100, suffix: "", prefix: "~", label: "Early Client Interest", description: "Students willing to use RunIt during pilot" },
  { value: "1:3", numericValue: 3, suffix: "", label: "Supply-to-Demand", description: "Ensuring high runner utilization" },
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

export const unitEconomics: Metric[] = [
  { value: "\u20A6450", numericValue: 450, suffix: "", label: "Customer Acquisition Cost", description: "Flyers + campus ambassadors" },
  { value: "6", numericValue: 6, suffix: "", label: "Monthly Frequency", description: "Runs per user (~1.5 per week)" },
  { value: "<1", numericValue: 1, suffix: "", label: "Payback Period", description: "Month for CAC recovery" },
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

export const team: (TeamMember & { photo?: string })[] = [
  { name: "Ekundayo David", role: "CEO", initials: "ED", photo: "/public/images/team/david.jpeg" },
  { name: "Balogun Muhammed-Awwal", role: "CTO", initials: "BM", photo: "/public/images/team/balogun.jpeg" },
  { name: "Arifalo Rufus", role: "CMO", initials: "AR", photo: "/public/images/team/rufus.jpeg" },
  { name: "Obidiya Erioluwanmi", role: "COO", initials: "OE" },
  { name: "Okerafor Destiny", role: "CFO", initials: "OD" },
];

export const fundAllocations: FundAllocation[] = [
  {
    category: "Product & Digital Infrastructure",
    percentage: 28,
    amount: "\u20A614,000,000",
    description: "MVP scaling, wallet system, backend security, native apps",
    color: "var(--purple-600)",
  },
  {
    category: "Marketing & Campus Activation",
    percentage: 32,
    amount: "\u20A616,000,000",
    description: "Activation across 12 universities, student influencers",
    color: "var(--purple-500)",
  },
  {
    category: "Pilot & Operations",
    percentage: 30,
    amount: "\u20A615,000,000",
    description: "Beta deployment at 3-5 campuses, team stipends",
    color: "var(--purple-400)",
  },
  {
    category: "Contingency Reserve",
    percentage: 10,
    amount: "\u20A66,000,000",
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
