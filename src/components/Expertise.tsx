import { ScrollReveal } from "@/components/ScrollReveal";
import { BookOpen, Target, BarChart3, Users, Lightbulb, Layers } from "lucide-react";

const areas = [
  {
    icon: BookOpen,
    title: "Curriculum Design",
    desc: "Structured learning paths from onboarding to advanced certification, rooted in adult learning theory.",
  },
  {
    icon: Target,
    title: "Sales Playbooks",
    desc: "Messaging frameworks, battle cards, and objection handling guides that reps actually use.",
  },
  {
    icon: BarChart3,
    title: "Enablement Strategy",
    desc: "Program architecture tied to pipeline metrics — not just completion rates, but revenue impact.",
  },
  {
    icon: Users,
    title: "Coaching Programs",
    desc: "Manager enablement and peer coaching models that sustain behavior change beyond the workshop.",
  },
  {
    icon: Lightbulb,
    title: "Content Development",
    desc: "E-learning modules, video scripts, interactive exercises, and facilitator guides built for engagement.",
  },
  {
    icon: Layers,
    title: "Tech & Tooling",
    desc: "LMS administration, CMS setup, and tool evaluation to support scalable content delivery.",
  },
];

export const Expertise = () => {
  return (
    <section id="expertise" className="py-24 md:py-32 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4 text-center">
            Expertise
          </p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2 className="text-3xl md:text-4xl text-center mb-4 text-balance">
            What I bring to the table
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            A blend of instructional design rigor and sales enablement pragmatism —
            building programs that are both pedagogically sound and commercially effective.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, i) => (
            <ScrollReveal key={area.title} delay={200 + i * 80}>
              <div className="bg-background p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                <area.icon className="w-5 h-5 text-accent mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-serif mb-2">{area.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{area.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
