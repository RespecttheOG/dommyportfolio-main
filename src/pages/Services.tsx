import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { services, processSteps, pricingPlans, faqItems } from "@/data/services";

export default function Services() {
  return (
    <div className="space-y-24">
      {/* ─── HEADER ───────────────────────────────────────────── */}
      <section className="text-center max-w-3xl mx-auto">
        <div className="opacity-0 animate-fade-in-up mb-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest border border-primary/20">
            What We Offer
          </span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-in-up animation-delay-100">
          Web Development{" "}
          <span className="gradient-text text-glow">Services That Scale</span>
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed opacity-0 animate-fade-in-up animation-delay-200">
          From a simple landing page to a complex web application — CodeStar Ventures has the
          expertise to deliver exactly what your business needs.
        </p>
      </section>

      {/* ─── SERVICES GRID ────────────────────────────────────── */}
      <section className="space-y-10">
        <SectionHeader
          eyebrow="Our Services"
          title="Everything Your"
          highlight="Business Needs Online"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </section>

      {/* ─── PROCESS ──────────────────────────────────────────── */}
      <section className="space-y-12">
        <SectionHeader
          eyebrow="How We Work"
          title="Our Proven"
          highlight="Development Process"
          description="A structured, transparent process that keeps you informed at every step and ensures we deliver on time and on budget."
        />
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, i) => (
              <div
                key={step.number}
                className="glass-card p-6 text-center relative group hover-glow opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              >
                {/* Step Number */}
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4 glow-shadow group-hover:scale-110 transition-transform">
                  <span className="font-display text-xl font-bold text-primary-foreground">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-display text-base font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING ──────────────────────────────────────────── */}
      <section className="space-y-12">
        <SectionHeader
          eyebrow="Transparent Pricing"
          title="Simple Packages,"
          highlight="Exceptional Value"
          description="No hidden fees. No surprise invoices. Just great work at fair prices."
        />
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {pricingPlans.map((plan, i) => (
            <div
              key={plan.name}
              className={`glass-card p-8 flex flex-col gap-6 relative opacity-0 animate-fade-in-up ${
                plan.highlighted
                  ? "border-primary/50 glow-shadow ring-1 ring-primary/30"
                  : "hover-glow"
              }`}
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full gradient-primary text-primary-foreground text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}

              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-1">
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="font-display text-3xl font-bold gradient-text">
                    {plan.price}
                  </span>
                  {plan.period !== "quote" && (
                    <span className="text-muted-foreground text-sm ml-2">/ {plan.period}</span>
                  )}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {feat}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.highlighted
                    ? "btn-futuristic"
                    : "border border-primary/50 text-primary hover:bg-primary/10"
                }`}
              >
                {plan.cta === "Most Popular" ? "Get Started" : plan.cta}
              </Link>
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground text-sm">
          All prices are starting estimates. Final pricing depends on project scope.{" "}
          <Link to="/contact" className="text-primary hover:underline">
            Contact us for a custom quote.
          </Link>
        </p>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────── */}
      <section className="space-y-10">
        <SectionHeader
          eyebrow="FAQ"
          title="Common Questions,"
          highlight="Honest Answers"
        />
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, i) => (
            <FaqItem key={i} question={item.question} answer={item.answer} index={i} />
          ))}
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="glass-card p-12 text-center space-y-6 glow-shadow relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-5 pointer-events-none" />
        <div className="relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Let's Build Something <span className="gradient-text text-glow">Remarkable</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Tell us about your project and we'll put together a proposal within 24 hours.
          </p>
          <Link
            to="/contact"
            className="btn-futuristic inline-flex items-center gap-2"
          >
            Start the Conversation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

// ─── FAQ Item (simple accordion without shadcn dependency) ─────────────────
function FaqItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  return (
    <details
      className="glass-card group opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${0.05 + index * 0.08}s` }}
    >
      <summary className="flex items-center justify-between p-6 cursor-pointer list-none select-none">
        <span className="font-display text-base font-semibold text-foreground pr-4">
          {question}
        </span>
        <span className="text-primary text-xl font-bold shrink-0 transition-transform duration-300 group-open:rotate-45">
          +
        </span>
      </summary>
      <div className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed border-t border-border pt-4">
        {answer}
      </div>
    </details>
  );
}
