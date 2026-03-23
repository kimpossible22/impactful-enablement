export interface Project {
  slug: string;
  tag: string;
  title: string;
  description: string;
  outcomes: string[];
  challenge: string;
  approach: string;
  results: string;
  sidebarDetails: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    slug: "multivista-sales-onboarding",
    tag: "Sales Enablement · Instructional Design",
    title:
      "Rebuilt a broken sales onboarding program — and reps created 6-8 more opportunities per person.",
    description:
      "Multivista's sales program hadn't been updated since 2018. New reps were finishing undertrained, managers were re-doing the work the program should have done, and Salesforce data confirmed ramp times were too long. I owned the full rebuild — from stakeholder interviews and learner analysis to branching scenarios, manager coaching loops, and rubric-based assessments — across 320 reps in 80 franchise locations.",
    outcomes: [
      "6–8 more opportunities per rep",
      "320 reps · 80 locations",
      "4 Kirkpatrick levels measured",
    ],
    challenge:
      "Multivista's sales onboarding program hadn't been updated since 2018. New reps were finishing undertrained, managers were compensating by re-doing the work the program should have done, and Salesforce data confirmed ramp times were far too long. There was no structured practice, no coaching framework, and no way to measure whether the program was actually working.",
    approach:
      "I owned the full rebuild end-to-end. I started with stakeholder interviews and learner analysis to understand where the gaps were. From there, I designed branching scenarios that put reps into realistic selling situations, built manager coaching loops so frontline leaders could reinforce skills on the job, and created rubric-based assessments tied to observable behaviours. The program was rolled out across 320 reps in 80 franchise locations with measurement built in from day one — across all four Kirkpatrick levels.",
    results:
      "Reps who completed the redesigned program created 6–8 more opportunities per person compared to the prior cohort. Managers reported significantly less time spent re-training, and the program became the standard onboarding experience across all franchise locations. Kirkpatrick Level 3 and 4 data confirmed that behaviour change and business impact were both measurable.",
    sidebarDetails: [
      { label: "Company", value: "Multivista" },
      { label: "Scope", value: "320 reps · 80 locations" },
      { label: "Role", value: "Sole designer & builder" },
      { label: "Duration", value: "Full program rebuild" },
      { label: "Measurement", value: "Kirkpatrick Levels 1–4" },
    ],
  },
  {
    slug: "global-manager-onboarding",
    tag: "Program Design · Scalability",
    title:
      "Freed a director from running onboarding single-handedly — and cut his time spent by 90%.",
    description:
      "The Director of Operations was personally running every piece of onboarding for 400+ managers across APAC, EMEA, and the Americas. It was unsustainable. I built a fully asynchronous program from a clean slate, designed for global scale with no single point of failure. Existing managers voluntarily completed it — the clearest possible signal of program quality.",
    outcomes: [
      "90% reduction in director onboarding time",
      "400+ managers across 3 regions",
      "Voluntarily adopted by existing staff",
    ],
    challenge:
      "The Director of Operations was personally running every piece of onboarding for 400+ managers across APAC, EMEA, and the Americas. He was the single point of failure — every new hire depended on his calendar, his availability, and his institutional knowledge. It was unsustainable and unscalable.",
    approach:
      "I built a fully asynchronous onboarding program from a clean slate. The design accounted for global time zones, varying levels of prior experience, and the need to operate without any single person bottleneck. I structured the program so that managers could move through it independently while still hitting critical knowledge and skill checkpoints.",
    results:
      "The director's onboarding time dropped by 90%. The program scaled across three regions without additional headcount. Perhaps the strongest signal of quality: existing managers — who weren't required to take it — voluntarily completed the program because they found it valuable.",
    sidebarDetails: [
      { label: "Company", value: "Confidential" },
      { label: "Scope", value: "400+ managers · 3 regions" },
      { label: "Role", value: "Program designer" },
      { label: "Format", value: "Fully asynchronous" },
      { label: "Signal", value: "Voluntary adoption" },
    ],
  },
  {
    slug: "diligent-customer-education",
    tag: "Customer Education · Revenue Impact",
    title:
      "Designed a customer education program that reached $20.5M in ARR — and reactivated 51 accounts that had gone dark.",
    description:
      "A segment of Diligent's ACL Analytics customer base had stopped engaging — not because the product was bad, but because nobody had shown them what it could do. I identified the gap, interviewed 40 customers across 27 organisations, and built a live multi-region learning series from scratch. The program re-engaged dormant accounts, opened cross-sell conversations, and demonstrated that educated customers carry measurably lower ARR-at-risk than disengaged peers.",
    outcomes: [
      "$20.5M in ARR reached",
      "51 dormant accounts reactivated",
      "96% rated quality Good or Excellent",
    ],
    challenge:
      "A significant segment of Diligent's ACL Analytics customer base had stopped engaging with the product. These weren't unhappy customers — they simply hadn't been shown what the product could do for them. The risk was real: disengaged customers are the ones most likely to churn.",
    approach:
      "I identified the gap, then interviewed 40 customers across 27 organisations to understand what they needed. From those insights, I designed and built a live, multi-region learning series from scratch — covering use cases, workflows, and practical applications. The program was structured to re-engage dormant accounts while also opening doors for cross-sell conversations with the sales team.",
    results:
      "The program reached $20.5M in ARR and reactivated 51 accounts that had gone dark. 96% of participants rated the quality as Good or Excellent. Most importantly, the data showed that educated customers carried measurably lower ARR-at-risk than their disengaged peers — making the business case for ongoing customer education undeniable.",
    sidebarDetails: [
      { label: "Company", value: "Diligent (ACL Analytics)" },
      { label: "Scope", value: "$20.5M ARR reached" },
      { label: "Research", value: "40 customers · 27 orgs" },
      { label: "Format", value: "Live multi-region series" },
      { label: "Quality", value: "96% Good or Excellent" },
    ],
  },
];
