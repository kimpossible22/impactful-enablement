import { useParams, Link, useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useEffect } from "react";

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif mb-4">Project not found</h1>
          <Link to="/#work" className="text-accent hover:underline">
            ← Back to work
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed back nav */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center">
          <Link
            to="/#work"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to work
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <header className="px-6 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">
              {project.tag}
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-3xl md:text-5xl font-serif text-balance max-w-3xl leading-tight">
              {project.title}
            </h1>
          </ScrollReveal>
        </div>
      </header>

      {/* Metrics strip */}
      <ScrollReveal delay={200}>
        <div className="border-y border-border bg-secondary/30">
          <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {project.outcomes.map((outcome) => (
              <div key={outcome} className="text-center sm:text-left">
                <p className="text-lg md:text-xl font-serif text-foreground">
                  {outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Two-column body */}
      <div className="px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            <ScrollReveal>
              <section>
                <h2 className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
                  The Challenge
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {project.challenge}
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <section>
                <h2 className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
                  What I Did
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {project.approach}
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <section>
                <h2 className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
                  Results
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {project.results}
                </p>
              </section>
            </ScrollReveal>
          </div>

          {/* Sticky sidebar */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <ScrollReveal delay={150}>
                <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
                  <h3 className="text-sm font-medium tracking-widest uppercase text-accent mb-2">
                    Project Details
                  </h3>
                  {project.sidebarDetails.map((detail) => (
                    <div key={detail.label} className="border-b border-border pb-3 last:border-0 last:pb-0">
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                        {detail.label}
                      </p>
                      <p className="text-sm text-foreground font-medium">
                        {detail.value}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </aside>
        </div>
      </div>

      {/* Next project footer */}
      <Link
        to={`/work/${nextProject.slug}`}
        className="block border-t border-border group"
      >
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">
            Next Project
          </p>
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-2xl md:text-3xl font-serif max-w-2xl group-hover:text-accent transition-colors">
              {nextProject.title}
            </h2>
            <ArrowRight className="w-5 h-5 mt-2 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CaseStudy;
