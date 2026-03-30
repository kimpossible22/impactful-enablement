import { ScrollReveal } from "@/components/ScrollReveal";
import kimPhoto from "@/assets/kim-photo.jpg";

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <ScrollReveal>
          <div className="aspect-[4/5] bg-secondary rounded-lg overflow-hidden relative">
            <img src={kimPhoto} alt="Kim Mansukhani" className="w-full h-full object-cover" />
          </div>
        </ScrollReveal>
        <div>
          <ScrollReveal delay={100}>
            <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">About</p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <h2 className="text-3xl md:text-4xl mb-6 text-balance">
              I've spent my career engineering aha moments.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Before I was an instructional designer or a sales enablement specialist, I was teaching English in Thailand, working in customer service, and figuring out how to help people understand things that weren't clicking for them yet. That thread runs through everything I've built since.
              </p>
              <p>
                I came into instructional design and eventually into sales enablement through the same door: I care about the moment when something finally lands — when a customer sees what a product can do for them, or when a rep stops reciting a pitch and starts having a real conversation.
              </p>
              <p>
                What I've learned is that you can engineer that moment. With the right program architecture, the right practice environment, the right feedback loop — you don't have to hope people figure it out. You can build the conditions that make it inevitable.
              </p>
              <p>
                That's what I do. Whether it's a new hire onboarding program, a customer education series, or an enablement strategy built from scratch — I design for the aha moment, and I measure whether it actually happened.
              </p>
              <p>
                I'm currently open to sales enablement roles and consulting engagements.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
