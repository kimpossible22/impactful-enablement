import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    tag: "Sales Enablement · Instructional Design",
    title: "Rebuilt a broken sales onboarding program — and reps created 6-8 more opportunities per person.",
    description:
      "Multivista's sales program hadn't been updated since 2018. New reps were finishing undertrained, managers were re-doing the work the program should have done, and Salesforce data confirmed ramp times were too long. I owned the full rebuild — from stakeholder interviews and learner analysis to branching scenarios, manager coaching loops, and rubric-based assessments — across 320 reps in 80 franchise locations.",
    outcomes: ["6–8 more opportunities per rep", "320 reps · 80 locations", "4 Kirkpatrick levels measured"],
  },
  {
    tag: "Program Design · Scalability",
    title: "Freed a director from running onboarding single-handedly — and cut his time spent by 90%.",
    description:
      "The Director of Operations was personally running every piece of onboarding for 400+ managers across APAC, EMEA, and the Americas. It was unsustainable. I built a fully asynchronous program from a clean slate, designed for global scale with no single point of failure. Existing managers voluntarily completed it — the clearest possible signal of program quality.",
    outcomes: ["90% reduction in director onboarding time", "400+ managers across 3 regions", "Voluntarily adopted by existing staff"],
  },
  {
    tag: "Customer Education · Revenue Impact",
    title: "Designed a customer education program that reached $20.5M in ARR — and reactivated 51 accounts that had gone dark.",
    description:
      "A segment of Diligent's ACL Analytics customer base had stopped engaging — not because the product was bad, but because nobody had shown them what it could do. I identified the gap, interviewed 40 customers across 27 organisations, and built a live multi-region learning series from scratch. The program re-engaged dormant accounts, opened cross-sell conversations, and demonstrated that educated customers carry measurably lower ARR-at-risk than disengaged peers.",
    outcomes: ["$20.5M in ARR reached", "51 dormant accounts reactivated", "96% rated quality Good or Excellent"],
  },
];

export const Work = () => {
  return (
    <section id="work" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
            Selected Work
          </p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2 className="text-3xl md:text-4xl mb-16 text-balance max-w-xl">
            Projects that moved the needle
          </h2>
        </ScrollReveal>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={150 + i * 100}>
              <article className="group bg-secondary/50 hover:bg-secondary rounded-lg p-8 md:p-10 transition-all duration-300 cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-medium tracking-widest uppercase text-accent">
                    {project.tag}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <h3 className="text-2xl md:text-3xl font-serif mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.outcomes.map((outcome) => (
                    <span
                      key={outcome}
                      className="text-xs font-medium bg-background px-3 py-1.5 rounded-full text-foreground/80"
                    >
                      {outcome}
                    </span>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
