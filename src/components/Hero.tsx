import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-3xl text-center">
        <p
          className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6 animate-fade-up"
          style={{ animationDelay: "100ms" }}
        >
          Instructional Design · Sales Enablement
        </p>
        <h1
          className="text-5xl md:text-7xl leading-[1.05] text-balance mb-6 animate-fade-up"
          style={{ animationDelay: "200ms" }}
        >
          I help teams learn faster and sell smarter
        </h1>
        <p
          className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-up"
          style={{ animationDelay: "350ms", textWrap: "pretty" }}
        >
          Bridging the gap between how people learn and how organizations grow — through
          thoughtful content, scalable programs, and measurable outcomes.
        </p>
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "500ms" }}
        >
          <Button
            variant="hero"
            size="lg"
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
          >
            View my work
          </Button>
          <Button
            variant="heroOutline"
            size="lg"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get in touch
          </Button>
        </div>
        <button
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-20 animate-fade-in text-muted-foreground hover:text-foreground transition-colors"
          style={{ animationDelay: "800ms" }}
          aria-label="Scroll down"
        >
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
