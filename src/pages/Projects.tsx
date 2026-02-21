import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, type ProjectCategory } from "@/data/projects";

const categories: { value: ProjectCategory; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "web-apps", label: "Web Apps" },
  { value: "ecommerce", label: "E-Commerce" },
  { value: "redesigns", label: "Redesigns" },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const featuredProjects = projects.filter((p) => p.featured);
  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-20">
      {/* ─── HEADER ───────────────────────────────────────────── */}
      <section className="text-center max-w-3xl mx-auto">
        <div className="opacity-0 animate-fade-in-up mb-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest border border-primary/20">
            Our Portfolio
          </span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-in-up animation-delay-100">
          Projects That{" "}
          <span className="gradient-text text-glow">Deliver Results</span>
        </h1>
        <p className="text-muted-foreground text-lg opacity-0 animate-fade-in-up animation-delay-200">
          Every project here represents a real client challenge solved with clean code, thoughtful
          design, and a relentless focus on outcomes.
        </p>
      </section>

      {/* ─── FEATURED (Top 2 large) ────────────────────────────── */}
      <section className="space-y-6">
        <h2 className="font-display text-2xl font-bold opacity-0 animate-fade-in-up animation-delay-200">
          ⭐ <span className="gradient-text">Featured Work</span>
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {featuredProjects.slice(0, 2).map((project) => (
            <ProjectCard key={project.id} project={project} featured />
          ))}
        </div>
        {/* Third featured full-width */}
        {featuredProjects[2] && (
          <ProjectCard key={featuredProjects[2].id} project={featuredProjects[2]} featured />
        )}
      </section>

      {/* ─── ALL PROJECTS (Filtered) ───────────────────────────── */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h2 className="font-display text-2xl font-bold text-foreground">
            All Projects
          </h2>
          <Tabs
            value={activeCategory}
            onValueChange={(v) => setActiveCategory(v as ProjectCategory)}
          >
            <TabsList className="glass-card border-border">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat.value}
                  value={cat.value}
                  className="text-xs uppercase tracking-wider font-semibold data-[state=active]:text-primary"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {/* Content rendered outside Tabs for full-width grid */}
          </Tabs>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <div
              key={project.id}
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.05 + i * 0.07}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="glass-card p-16 text-center">
            <p className="text-muted-foreground">No projects found in this category yet.</p>
          </div>
        )}
      </section>

      {/* ─── PROCESS TEASER ───────────────────────────────────── */}
      <section className="glass-card p-10 text-center space-y-6 glow-shadow">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
          Have a project in mind?
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          We'd love to add it to this portfolio. Let's talk about what we can build together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="btn-futuristic inline-flex items-center gap-2">
            Start a Project <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/services"
            className="px-8 py-3 rounded-lg border border-primary/50 text-primary font-semibold hover:bg-primary/10 transition-all duration-300 text-center"
          >
            View Services
          </Link>
        </div>
      </section>
    </div>
  );
}
