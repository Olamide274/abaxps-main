import heroBoardroom from "@/assets/hero-boardroom.jpg";
import heroDesk from "@/assets/hero-desk.jpg";
import heroTower from "@/assets/hero-tower.jpg";
import auditReadinessNeutral from "@/assets/blog/audit-readiness-neutral.jpg";
import taxReformNeutral from "@/assets/blog/tax-reform-neutral.jpg";
import boardEffectivenessNeutral from "@/assets/blog/board-effectiveness-neutral.jpg";
import financialReportingClean from "@/assets/blog/financial-reporting-clean.jpg";
import internalControlsClean from "@/assets/blog/internal-controls-clean.jpg";
import dueDiligenceClean from "@/assets/blog/due-diligence-clean.jpg";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  cover: string;
  content: string[];
}

export const posts: BlogPost[] = [
  {
    slug: "audit-readiness-2025",
    title: "Audit Readiness in 2025: A Practical Playbook",
    excerpt:
      "From close-the-books discipline to documentation hygiene — how finance teams can be audit-ready year round.",
    category: "Audit & Assurance",
    date: "March 12, 2025",
    readTime: "6 min read",
    author: "Babafunke Ajibade, FCA",
    cover: auditReadinessNeutral,
    content: [
      "A successful audit is rarely about the three weeks of fieldwork — it is the result of habits formed throughout the year. The most prepared finance teams treat the audit as a routine outcome of disciplined monthly close, not a fire drill in Q1.",
      "Start with the close. A reliable month-end calendar, owners assigned to every reconciliation, and a one-page exception report make 80% of audit queries answerable in minutes rather than days. Pair this with a documented sign-off trail and the auditor's risk assessment becomes a conversation, not an investigation.",
      "Second, treat documentation as a deliverable. Every estimate, judgement, and significant transaction should leave a memo: what was decided, why, and what evidence supported it. The memo is the audit trail.",
      "Finally, build a quarterly mock walkthrough. Sit with the team, open the trial balance, and ask the questions an auditor will ask. The first time you hear them should never be in fieldwork.",
    ],
  },
  {
    slug: "tax-reform-nigeria-implications",
    title: "Nigeria's Tax Reform: What It Means for Mid-Market Companies",
    excerpt:
      "Recent changes to the tax landscape carry real implications for compliance, planning, and cash flow.",
    category: "Tax & Compliance",
    date: "February 28, 2025",
    readTime: "5 min read",
    author: "Anthony Ebele, ACTI",
    cover: taxReformNeutral,
    content: [
      "The reforms passed in late 2024 are the most significant restructuring of Nigeria's tax regime in a generation. For mid-market companies — those past the early stage but not yet at multinational scale — the practical implications fall into three buckets: compliance burden, effective tax rate, and cash management.",
      "Compliance burden is going up before it comes down. Transition rules require dual reporting in many cases, and tax authorities are still refining administrative guidance. Building a clean mapping between your chart of accounts and the new return formats now will save weeks later.",
      "Effective tax rates are moving in different directions depending on sector. Manufacturing and export-oriented businesses benefit from new incentives; service firms with high intercompany flows should re-model their structure before year-end.",
      "Cash management is the silent risk. Changes to WHT timing and VAT recoverability shift working capital. Re-forecast quarterly cash needs against the new rules — don't wait for the surprise.",
    ],
  },
  {
    slug: "governance-board-effectiveness",
    title: "Board Effectiveness: Five Questions Every Director Should Ask",
    excerpt:
      "Strong governance is not about more meetings — it is about the right questions, asked clearly and often.",
    category: "Governance & Risk",
    date: "February 14, 2025",
    readTime: "4 min read",
    author: "Ayo Alamutu, FCA, CISA",
    cover: boardEffectivenessNeutral,
    content: [
      "Boards drift not because directors lack skill, but because the questions go unasked. The most effective boards we work with revisit a short list of five questions in every quarterly cycle.",
      "1. What did we believe last quarter that turned out to be wrong? 2. Where is management's confidence highest, and is the evidence proportionate? 3. Which risks are we monitoring out of habit, and which deserve renewed focus? 4. What is the one decision we are postponing? 5. Are we hearing the truth from second-line management, or only the curated version?",
      "The discipline is not in the questions — it is in returning to them. Boards that ritualise reflection make better decisions than those that simply add more items to the agenda.",
    ],
  },
  {
    slug: "ifrs-sustainability-disclosures",
    title: "IFRS S1 & S2: Getting Sustainability Disclosures Right",
    excerpt:
      "Sustainability reporting has moved from voluntary narrative to investor-grade disclosure. Here is what good looks like.",
    category: "Financial Reporting",
    date: "January 30, 2025",
    readTime: "7 min read",
    author: "Fusi Akinkugbe, FCA",
    cover: financialReportingClean,
    content: [
      "IFRS S1 and S2 mark the formal arrival of sustainability into the audited financial reporting stack. The bar is no longer 'tell a story' — it is 'disclose with the rigour investors expect from any material risk.'",
      "Good disclosure starts with materiality assessment grounded in evidence: which sustainability matters could reasonably affect the entity's cash flows, access to finance, or cost of capital over the short, medium, and long term?",
      "Climate disclosures under S2 require both qualitative narrative and quantitative metrics — Scope 1, 2, and increasingly 3 emissions. Begin data collection now; the systems take longer to mature than the policy work.",
      "Finally, internal controls over sustainability information matter. The same governance, review, and audit-trail discipline applied to financial statements should apply here.",
    ],
  },
  {
    slug: "internal-controls-mid-market",
    title: "Internal Controls for Growing Companies: Right-Sizing the Framework",
    excerpt:
      "Controls do not need to be bureaucratic. They need to match the organisation's risk profile and stage.",
    category: "Governance & Risk",
    date: "January 15, 2025",
    readTime: "5 min read",
    author: "Ayo Alamutu, FCA, CISA",
    cover: internalControlsClean,
    content: [
      "Growing companies often over- or under-engineer their control environment. The right framework is calibrated to the business — its size, complexity, and risk appetite — not copied from a Fortune 500 template.",
      "Start with the five or six processes where errors would be most consequential: revenue recognition, cash disbursements, payroll, period-end close, IT access. Document the controls that already exist informally and assess whether they are operating as intended.",
      "From there, build outward only as the business grows. A 50-person company does not need a SOX-style framework — but it should know exactly which controls would fail first under stress.",
    ],
  },
  {
    slug: "transaction-advisory-due-diligence",
    title: "Due Diligence That Actually Informs the Deal",
    excerpt:
      "The best due diligence challenges the investment thesis. The worst confirms what management already believes.",
    category: "Advisory",
    date: "December 18, 2024",
    readTime: "6 min read",
    author: "Olapeju Sofowora, FCA, FCIT",
    cover: dueDiligenceClean,
    content: [
      "Due diligence done well is not a checklist exercise. It is a structured attempt to stress-test the investment thesis: what would have to be true for this deal to work, and what does the evidence actually say?",
      "We organise diligence around three questions: Is the historical performance real? Is the forecast credible? What is the post-deal integration risk that nobody is talking about?",
      "The third question is the one most teams skip. Cultural, systems, and people integration absorb more value than any single financial adjustment. Surface those risks before signing — and price them into the deal.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
