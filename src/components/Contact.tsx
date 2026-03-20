import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-primary text-primary-foreground">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
            Let's connect
          </p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2 className="text-3xl md:text-5xl mb-6 text-balance">
            Have a project in mind? I'd love to hear about it.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="text-primary-foreground/70 mb-10 text-lg">
            Whether you're looking for a consultant to shape your enablement strategy
            or a full-time hire to build from the ground up — let's talk.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <Button
            variant="hero"
            size="lg"
            className="gap-2"
            onClick={() => window.location.href = "mailto:hello@example.com"}
          >
            <Mail className="w-4 h-4" />
            Send me an email
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};
