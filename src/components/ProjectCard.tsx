import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <div
      className={`glass-card group overflow-hidden hover-glow transition-all duration-300 flex flex-col ${
        featured ? "lg:flex-row" : ""
      }`}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden ${
          featured ? "lg:w-1/2 h-56 lg:h-auto" : "h-48"
        }`}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
        {project.featured && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-primary/90 text-primary-foreground text-xs font-semibold">
              Featured
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className={`p-6 flex flex-col flex-1 ${featured ? "lg:p-8" : ""}`}>
        <div className="flex items-start justify-between mb-3">
          <h3
            className={`font-display font-bold text-foreground group-hover:text-primary transition-colors ${
              featured ? "text-xl" : "text-lg"
            }`}
          >
            {project.title}
          </h3>
          <div className="flex gap-2 ml-3 shrink-0">
            <a
              href={project.githubUrl}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={project.liveUrl}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Live Site"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="text-xs border-primary/30 text-primary bg-primary/5"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
