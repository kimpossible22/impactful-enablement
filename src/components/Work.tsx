import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    tag: "Sales Enablement",
    title: "New Hire Onboarding Overhaul",
    description:
      "Redesigned a 6-week onboarding program for a SaaS sales team, reducing ramp time by 30% and improving first-quarter quota attainment.",
    outcomes: ["30% faster ramp", "42% quota attainment lift", "4.7/5 rep satisfaction"],
  },
  {
    tag: "Instructional Design",
    title: "Product Certification Program",
    description:
      "Built a multi-tier certification program with interactive assessments, video modules, and spaced repetition — adopted across 3 regions.",
    outcomes: ["1,200+ completions", "3 languages", "92% pass rate"],
  },
  {
    tag: "Content Strategy",
    title: "Competitive Intelligence Hub",
    description:
      "Created a living competitive resource center with battle cards, win/loss summaries, and trap-setting talk tracks used by 150+ AEs.",
    outcomes: ["150+ active users", "28% win rate increase", "Weekly update cadence"],
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
