interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  highlight,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`space-y-4 ${centered ? "text-center max-w-3xl mx-auto" : ""}`}>
      {eyebrow && (
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest border border-primary/20">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
        {title}{" "}
        {highlight && <span className="gradient-text text-glow">{highlight}</span>}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
      )}
    </div>
  );
}
