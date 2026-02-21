import {
  Code,
  Users,
  Coffee,
  Award,
  Zap,
  Rocket,
  Globe,
  Heart,
  Target,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/SectionHeader";
import { Link } from "react-router-dom";

const skills = [
  { name: "React / Next.js", level: 92 },
  { name: "TypeScript", level: 88 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Node.js / Express", level: 78 },
  { name: "UI/UX Design", level: 82 },
  { name: "Database Design", level: 74 },
];

const techStack = [
  "React", "TypeScript", "Next.js", "Vite", "Tailwind CSS",
  "Node.js", "Express", "PostgreSQL", "MongoDB", "Firebase",
  "Supabase", "Prisma", "Stripe", "Figma", "Git", "Vercel",
];

const timeline = [
  {
    year: "2021",
    title: "Started the Journey",
    description:
      "Taught myself HTML, CSS and JavaScript — fell in love with turning designs into living, breathing websites.",
  },
  {
    year: "2022",
    title: "First Clients",
    description:
      "Landed my first 3 paying clients while still learning React. Delivered results that exceeded expectations every time.",
  },
  {
    year: "2023",
    title: "Full-Stack Mastery",
    description:
      "Expanded into Node.js, databases and API development. Completed 10+ projects across e-commerce, SaaS and corporate.",
  },
  {
    year: "2024",
    title: "CodeStar Ventures Born",
    description:
      "Founded CodeStar Ventures with a mission to give Kenyan businesses and global clients world-class web development.",
  },
  {
    year: "2025+",
    title: "Building the Future",
    description:
      "Scaling CodeStar Ventures into a full-service digital agency — one exceptional website at a time.",
  },
];

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    desc: "Every decision is driven by your business goals — not just making something look pretty.",
  },
  {
    icon: Heart,
    title: "Client-First",
    desc: "We treat every project like it's our own business on the line. Your success is our success.",
  },
  {
    icon: Lightbulb,
    title: "Innovative",
    desc: "We stay ahead of industry trends so your website always feels fresh, modern, and future-proof.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Obsessed",
    desc: "We don't ship until it's exceptional. Clean code, perfect design, thorough testing — every time.",
  },
];

export default function About() {
  return (
    <div className="space-y-24">
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="text-center max-w-3xl mx-auto">
        <div className="opacity-0 animate-fade-in-up mb-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest border border-primary/20">
            The Story Behind CodeStar
          </span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-in-up animation-delay-100">
          A Developer With a{" "}
          <span className="gradient-text text-glow">Bigger Vision</span>
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed opacity-0 animate-fade-in-up animation-delay-200">
          I'm Dominic Ochenge — a self-taught developer from Kenya who turned a passion for code
          into a mission: building world-class digital experiences for businesses that deserve to
          stand out online.
        </p>
      </section>

      {/* ─── BIO + SKILLS ─────────────────────────────────────── */}
      <section className="grid md:grid-cols-2 gap-12 items-start">
        {/* Bio */}
        <div className="space-y-6 opacity-0 animate-slide-in-left animation-delay-100">
          {/* Profile Image */}
          <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden glass-card flex items-center justify-center relative">
            <img
              src="https://picsum.photos/seed/dominic-dev/600/450"
              alt="Dominic Ochenge — Founder, CodeStar Ventures"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="font-display text-lg font-bold text-white">Dominic Ochenge</p>
              <p className="text-primary text-sm font-medium">Founder · CodeStar Ventures</p>
            </div>
          </div>

          {/* Quick Traits */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: Code, label: "Clean Code Fanatic" },
              { icon: Users, label: "Client-Obsessed" },
              { icon: Coffee, label: "Problem Solver" },
              { icon: Award, label: "Quality First" },
              { icon: Globe, label: "Kenya & Global" },
              { icon: Zap, label: "Fast Learner" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 glass-card p-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-8 opacity-0 animate-fade-in-up animation-delay-200">
          <div className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-foreground">Who I Am</h2>
            <p className="text-muted-foreground leading-relaxed">
              I'm a self-taught full-stack web developer based in Nairobi, Kenya. With 3+ years of
              hands-on experience, I've helped 15+ clients — from local SMEs to international
              startups — build their online presence with websites and web apps that truly perform.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My dream? To grow{" "}
              <span className="text-primary font-medium">CodeStar Ventures</span> into the leading
              web development agency for businesses across Africa and beyond — a place where bold
              ideas get transformed into exceptional digital products.
            </p>
          </div>

          {/* Skill Bars */}
          <div className="glass-card p-6 space-y-5">
            <h3 className="font-display text-lg font-bold text-foreground">Technical Skills</h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-primary font-semibold">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CODESTAR VENTURES ────────────────────────────────── */}
      <section className="glass-card p-10 md:p-14 text-center relative overflow-hidden glow-shadow">
        <div className="absolute inset-0 gradient-primary opacity-5 pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <div className="text-5xl">⭐</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            The <span className="gradient-text text-glow">CodeStar Ventures</span> Mission
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            "To give every business — no matter the size — access to world-class web development.
            To build digital experiences so exceptional that our clients' competitors can only
            wonder how they did it."
          </p>
          <div className="flex flex-wrap gap-3 justify-center pt-2">
            <Rocket className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Building Digital Futures</span>
            <span className="text-muted-foreground">•</span>
            <Globe className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Nairobi, Kenya → Worldwide</span>
          </div>
        </div>
      </section>

      {/* ─── TECH STACK ───────────────────────────────────────── */}
      <section className="space-y-10">
        <SectionHeader
          eyebrow="Tools of the Trade"
          title="Tech Stack &"
          highlight="Expertise"
          description="The modern, battle-tested technologies we use to build exceptional products."
        />
        <div className="flex flex-wrap gap-3 justify-center">
          {techStack.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="px-4 py-2 text-sm border-primary/30 text-foreground bg-primary/5 hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </section>

      {/* ─── TIMELINE ─────────────────────────────────────────── */}
      <section className="space-y-10">
        <SectionHeader
          eyebrow="My Journey"
          title="From Curiosity to"
          highlight="CodeStar"
          centered={false}
        />
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className="md:pl-20 relative opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              >
                {/* Dot */}
                <div className="hidden md:flex absolute left-4 top-6 w-8 h-8 rounded-full gradient-primary items-center justify-center glow-shadow">
                  <div className="w-3 h-3 rounded-full bg-primary-foreground" />
                </div>
                <div className="glass-card p-6 hover-glow">
                  <div className="flex items-start gap-4">
                    <span className="font-display text-xl font-bold gradient-text shrink-0">
                      {item.year}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VALUES ───────────────────────────────────────────── */}
      <section className="space-y-10">
        <SectionHeader
          eyebrow="Our Values"
          title="Principles That"
          highlight="Guide Everything"
          description="These aren't just words — they're embedded into every line of code and every client interaction."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => (
            <div
              key={value.title}
              className="glass-card p-6 text-center hover-glow group opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <value.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-base font-bold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="text-center space-y-6">
        <h2 className="font-display text-3xl font-bold text-foreground">
          Ready to work with <span className="gradient-text text-glow">CodeStar?</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Let's turn your vision into a stunning digital reality. First consultation is free.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="btn-futuristic inline-flex items-center gap-2">
            Get in Touch <Rocket className="w-5 h-5" />
          </Link>
          <Link
            to="/projects"
            className="px-8 py-3 rounded-lg border border-primary/50 text-primary font-semibold hover:bg-primary/10 transition-all duration-300 text-center"
          >
            See Our Work
          </Link>
        </div>
      </section>
    </div>
  );
}
