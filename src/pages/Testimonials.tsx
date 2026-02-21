import { Link } from "react-router-dom";
import { ArrowRight, Star, Quote } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { SectionHeader } from "@/components/SectionHeader";
import { TestimonialCard } from "@/components/TestimonialCard";
import { testimonials } from "@/data/testimonials";

const stats = [
  { value: "15+", label: "Happy Clients" },
  { value: "5.0", label: "Average Rating" },
  { value: "20+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
];

const featured = testimonials[0];
const rest = testimonials.slice(1);

export default function Testimonials() {
  return (
    <div className="space-y-24">
      {/* ─── HEADER ───────────────────────────────────────────── */}
      <section className="text-center max-w-3xl mx-auto">
        <div className="opacity-0 animate-fade-in-up mb-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest border border-primary/20">
            Client Stories
          </span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-in-up animation-delay-100">
          Real Results,{" "}
          <span className="gradient-text text-glow">Real People</span>
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed opacity-0 animate-fade-in-up animation-delay-200">
          Don't take our word for it — hear directly from the clients whose businesses we've helped
          transform through exceptional web development.
        </p>
      </section>

      {/* ─── STATS ────────────────────────────────────────────── */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="glass-card p-6 text-center hover-glow opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${0.1 + i * 0.1}s` }}
          >
            <div className="flex justify-center gap-0.5 mb-2">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="w-3 h-3 fill-primary text-primary" />
              ))}
            </div>
            <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-1">
              {stat.value}
            </div>
            <p className="text-muted-foreground text-sm">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* ─── FEATURED TESTIMONIAL ─────────────────────────────── */}
      <section>
        <div className="glass-card p-10 md:p-14 relative overflow-hidden glow-shadow">
          <div className="absolute inset-0 gradient-primary opacity-5 pointer-events-none" />
          <div className="relative z-10">
            <div className="text-6xl text-primary/30 font-serif leading-none mb-6">"</div>
            <blockquote className="font-display text-xl md:text-2xl font-medium text-foreground leading-relaxed mb-8 max-w-4xl">
              {featured.text}
            </blockquote>
            <div className="flex items-center gap-4">
              <Avatar className="w-16 h-16 border-2 border-primary/30">
                <AvatarImage src={featured.avatar} alt={featured.name} />
                <AvatarFallback className="bg-primary/10 text-primary font-bold">
                  {featured.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-display font-bold text-foreground text-lg">{featured.name}</p>
                <p className="text-muted-foreground">
                  {featured.role}, {featured.company}
                </p>
                <div className="flex gap-1 mt-1">
                  {Array.from({ length: featured.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
              <div className="ml-auto hidden md:block">
                <div className="glass-card px-4 py-2 text-sm text-primary font-medium border border-primary/30">
                  Project: {featured.project}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ALL TESTIMONIALS ─────────────────────────────────── */}
      <section className="space-y-10">
        <SectionHeader
          eyebrow="All Reviews"
          title="Every Client,"
          highlight="Every Story"
          description="From local Kenyan businesses to global clients — here's what they say about working with CodeStar Ventures."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((t, i) => (
            <div
              key={t.id}
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            >
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </div>
      </section>

      {/* ─── TRUST BADGES ─────────────────────────────────────── */}
      <section className="space-y-8">
        <SectionHeader
          eyebrow="Our Commitment"
          title="Why Clients"
          highlight="Trust Us"
        />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "🛡️",
              title: "100% Satisfaction Guarantee",
              desc: "We work until you're completely satisfied — no half-measures, no excuses.",
            },
            {
              icon: "⏱️",
              title: "On-Time Delivery",
              desc: "We've never missed a deadline. Every project has clear milestones and delivery dates.",
            },
            {
              icon: "💬",
              title: "Transparent Communication",
              desc: "Regular updates, open communication and no surprises — ever.",
            },
          ].map((item, i) => (
            <div
              key={item.title}
              className="glass-card p-8 text-center hover-glow opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-display text-base font-bold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="glass-card p-12 text-center space-y-6 glow-shadow">
        <div className="flex justify-center gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-primary text-primary" />
          ))}
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Become Our Next <span className="gradient-text text-glow">Success Story</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Join 15+ businesses that have transformed their online presence with CodeStar Ventures.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="btn-futuristic inline-flex items-center gap-2">
            Start Your Project <ArrowRight className="w-5 h-5" />
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
