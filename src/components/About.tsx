import { ScrollReveal } from "@/components/ScrollReveal";

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <ScrollReveal>
          <div className="aspect-[4/5] bg-secondary rounded-lg overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
              Your photo here
            </div>
          </div>
        </ScrollReveal>
        <div>
          <ScrollReveal delay={100}>
            <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">About</p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <h2 className="text-3xl md:text-4xl mb-6 text-balance">
              From classroom to pipeline — designing experiences that drive results
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I started my career in instructional design, building learning experiences for
                complex topics across industries. Over time, I discovered that the same principles
                that make training stick — clarity, relevance, and practice — are exactly what
                sales teams need to perform at their best.
              </p>
              <p>
                Today I work at the intersection of learning science and revenue enablement,
                helping organizations onboard reps faster, deliver compelling messaging, and
                build programs that scale. Whether it's a new hire bootcamp, a product launch
                playbook, or a full enablement strategy, I bring a designer's eye and a
                business-minded approach.
              </p>
              <p>
                I'm currently open to consulting engagements and full-time opportunities.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
