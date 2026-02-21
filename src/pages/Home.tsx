import { Link } from "react-router-dom";
import {
  ArrowRight,
  Star,
  Code2,
  RefreshCcw,
  ShoppingCart,
  Rocket,
  Users,
  Award,
  Clock,
  ChevronDown,
} from "lucide-react";
import { FlipCard } from "@/components/FlipCard";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { projects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";

const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
const featuredTestimonials = testimonials.slice(0, 3);

const serviceHighlights = [
  {
    icon: Code2,
    title: "Build from Scratch",
    description:
      "Custom websites and web apps engineered for performance, scalability, and your exact business needs.",
    link: "/services",
  },
  {
    icon: RefreshCcw,
    title: "Rebuild & Modernize",
    description:
      "Transform your slow, outdated website into a blazing-fast modern platform — without losing your SEO.",
    link: "/services",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description:
      "Launch your online store with seamless payment integration, inventory management and mobile-first UX.",
    link: "/services",
  },
];

const stats = [
  { icon: Award, value: "20+", label: "Projects Delivered" },
  { icon: Users, value: "15+", label: "Happy Clients" },
  { icon: Star, value: "5.0", label: "Average Rating" },
  { icon: Clock, value: "3+", label: "Years Experience" },
];

export default function Home() {
  return (
    <div className="space-y-28">
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="min-h-[calc(100vh-8rem)] flex flex-col lg:flex-row items-center justify-center gap-16 py-12">
        {/* Left */}
        <div className="flex-1 max-w-xl text-center lg:text-left">
          <div className="opacity-0 animate-fade-in-up mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
              <Rocket className="w-4 h-4" />
              CodeStar Ventures — Building Digital Futures
            </span>
          </div>

          <h1 className="opacity-0 animate-fade-in-up animation-delay-100 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Hi, I'm{" "}
            <span className="gradient-text text-glow">Dominic Ochenge</span>
          </h1>

          <p className="opacity-0 animate-fade-in-up animation-delay-200 text-muted-foreground text-lg md:text-xl mb-4 leading-relaxed">
            Founder of <span className="text-primary font-semibold">CodeStar Ventures</span> — a
            web development studio crafting exceptional digital experiences that turn visitors into
            customers.
          </p>

          <p className="opacity-0 animate-fade-in-up animation-delay-200 text-muted-foreground text-base mb-8 leading-relaxed">
            Whether you need a website built from the ground up, a tired site reimagined, or a
            full-scale web application — we've got you covered.
          </p>

          <div className="opacity-0 animate-fade-in-up animation-delay-300 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/projects"
              className="btn-futuristic inline-flex items-center justify-center gap-2"
            >
              View Our Work
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 rounded-lg border border-primary/50 text-primary font-semibold hover:bg-primary/10 transition-all duration-300 text-center"
            >
              Start a Project
            </Link>
          </div>
        </div>

        {/* Right — Flip Card */}
        <div className="opacity-0 animate-scale-in animation-delay-400 float-animation">
          <FlipCard
            name="Dominic Ochenge"
            title="Founder · CodeStar Ventures"
            email="respecttheog1@gmail.com"
            phone="0701196567"
            location="Nairobi, Kenya"
            skills={["React", "TypeScript", "Node.js"]}
          />
        </div>
      </section>

      {/* Scroll Indicator */}
      <div className="-mt-20 flex justify-center animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>

      {/* ─── STATS ────────────────────────────────────────────── */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="glass-card p-6 text-center hover-glow opacity-0 animate-fade-in-up group"
            style={{ animationDelay: `${0.1 + index * 0.1}s` }}
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <stat.icon className="w-6 h-6 text-primary" />
            </div>
            <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-1">
              {stat.value}
            </div>
            <p className="text-muted-foreground text-sm">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* ─── SERVICES PREVIEW ─────────────────────────────────── */}
      <section className="space-y-12">
        <SectionHeader
          eyebrow="What We Do"
          title="We Build Websites That"
          highlight="Work Hard for You"
          description="From scratch builds to full rebuilds — CodeStar Ventures delivers websites that look stunning, load fast, and convert visitors into loyal customers."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {serviceHighlights.map((service, index) => (
            <Link
              key={service.title}
              to={service.link}
              className="glass-card p-8 hover-glow transition-all duration-300 group flex flex-col gap-4 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {service.description}
              </p>
              <span className="text-primary text-sm font-semibold flex items-center gap-1">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/50 text-primary font-semibold hover:bg-primary/10 transition-all duration-300"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ─── FEATURED PROJECTS ────────────────────────────────── */}
      <section className="space-y-12">
        <SectionHeader
          eyebrow="Our Work"
          title="Projects That"
          highlight="Speak for Themselves"
          description="Each project is a story of a client's vision transformed into a high-performing digital reality."
        />
        <div className="grid lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/projects"
            className="btn-futuristic inline-flex items-center gap-2"
          >
            See All Projects <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* ─── WHY US ───────────────────────────────────────────── */}
      <section className="space-y-12">
        <SectionHeader
          eyebrow="Why CodeStar"
          title="What Sets Us"
          highlight="Apart"
          description="We don't just write code — we solve problems, drive growth and build lasting digital partnerships."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              emoji: "⚡",
              title: "Lightning Fast",
              desc: "Every site we build scores 90+ on Google Lighthouse. Speed is non-negotiable.",
            },
            {
              emoji: "📱",
              title: "Mobile-First Always",
              desc: "Pixel-perfect on every screen — from phones to ultra-wide monitors.",
            },
            {
              emoji: "🔒",
              title: "Security Built In",
              desc: "HTTPS, input validation, dependency audits and security headers by default.",
            },
            {
              emoji: "🚀",
              title: "Launch & Beyond",
              desc: "We stay with you post-launch — support, updates and growth strategy.",
            },
          ].map((item, i) => (
            <div
              key={item.title}
              className="glass-card p-6 text-center hover-glow opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{item.emoji}</div>
              <h3 className="font-display text-base font-bold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TESTIMONIALS STRIP ───────────────────────────────── */}
      <section className="space-y-12">
        <SectionHeader
          eyebrow="Client Love"
          title="What Our Clients"
          highlight="Say"
          description="We measure success by the results we deliver and the relationships we build."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {featuredTestimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/testimonials"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/50 text-primary font-semibold hover:bg-primary/10 transition-all duration-300"
          >
            Read All Reviews <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ─── CTA BANNER ───────────────────────────────────────── */}
      <section>
        <div className="glass-card p-12 text-center relative overflow-hidden glow-shadow animated-border">
          <div className="absolute inset-0 gradient-primary opacity-5 pointer-events-none" />
          <div className="relative z-10">
            <div className="text-5xl mb-4">🚀</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Launch Your{" "}
              <span className="gradient-text text-glow">Dream Website?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Let's talk about your project. First consultation is free — no pressure, no strings
              attached.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-futuristic inline-flex items-center justify-center gap-2"
              >
                Start Your Project <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/254701196567"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-lg border border-primary/50 text-primary font-semibold hover:bg-primary/10 transition-all duration-300 text-center"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
