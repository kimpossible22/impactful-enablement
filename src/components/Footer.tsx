import { ScrollReveal } from "@/components/ScrollReveal";

export const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span>© {new Date().getFullYear()} · All rights reserved</span>
        <div className="flex items-center gap-6">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            LinkedIn
          </a>
          <a href="mailto:hello@example.com" className="hover:text-foreground transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};
