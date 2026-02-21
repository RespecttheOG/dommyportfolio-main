import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  Linkedin,
  Github,
  Twitter,
  CheckCircle2,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { faqItems } from "@/data/services";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "respecttheog1@gmail.com",
    href: "mailto:respecttheog1@gmail.com",
    description: "Best for detailed project briefs",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+254 701 196 567",
    href: "https://wa.me/254701196567",
    description: "Fastest response — usually within 1 hour",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nairobi, Kenya",
    href: "#",
    description: "Available for in-person meetings",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon–Sat, 8am–8pm EAT",
    href: "#",
    description: "East Africa Time (UTC+3)",
  },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "#", handle: "@codestar-ventures" },
  { icon: Linkedin, label: "LinkedIn", href: "#", handle: "Dominic Ochenge" },
  { icon: Twitter, label: "Twitter/X", href: "#", handle: "@dominicochenge" },
];

const whyUs = [
  "Free initial consultation — no commitment",
  "Proposal delivered within 24 hours",
  "Fixed-price projects, no surprise costs",
  "Dedicated point of contact throughout",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      budget: "",
      message: "",
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-24">
      {/* ─── HEADER ───────────────────────────────────────────── */}
      <section className="text-center max-w-3xl mx-auto">
        <div className="opacity-0 animate-fade-in-up mb-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest border border-primary/20">
            Let's Talk
          </span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-in-up animation-delay-100">
          Start Your{" "}
          <span className="gradient-text text-glow">Next Chapter</span>
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed opacity-0 animate-fade-in-up animation-delay-200">
          Have a project idea? Ready to rebuild your site? Just want to explore
          options? Reach out — we respond fast and the first consultation is
          always free.
        </p>
      </section>

      {/* ─── CONTACT GRID ─────────────────────────────────────── */}
      <section className="grid lg:grid-cols-5 gap-10">
        {/* Left Column — Info */}
        <div className="lg:col-span-2 space-y-8">
          <div className="opacity-0 animate-slide-in-left animation-delay-100">
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">
              Get in Touch
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              We'd love to hear about your project. Send us a message or reach
              out directly via any of the channels below.
            </p>
          </div>

          {/* Why Contact Us */}
          <div className="glass-card p-6 space-y-3 opacity-0 animate-fade-in-up animation-delay-100">
            <h3 className="font-display text-sm font-bold text-foreground uppercase tracking-wider">
              What to Expect
            </h3>
            {whyUs.map((item) => (
              <div
                key={item}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
          </div>

          {/* Contact Cards */}
          <div className="space-y-3">
            {contactInfo.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="glass-card p-4 flex items-center gap-4 hover-glow transition-all duration-300 group opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.2 + index * 0.07}s` }}
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <item.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm truncate">
                    {item.value}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h3 className="font-display text-sm font-bold text-foreground uppercase tracking-wider">
              Find Us Online
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-3 hover-glow transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/254701196567"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-futuristic w-full flex items-center justify-center gap-3 opacity-0 animate-fade-in-up animation-delay-500"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp Now
          </a>
        </div>

        {/* Right Column — Form */}
        <div className="lg:col-span-3">
          <div className="glass-card p-8 md:p-10 opacity-0 animate-fade-in-up animation-delay-200">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center glow-shadow">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground max-w-xs">
                  Thank you for reaching out. We'll get back to you within 24
                  hours — usually much sooner!
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  Tell Us About Your Project
                </h3>
                <p className="text-muted-foreground text-sm mb-8">
                  The more detail you provide, the better our response will be.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Jane Mwende"
                        className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="jane@company.com"
                        className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+254 7XX XXX XXX"
                        className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Service Needed
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground text-sm"
                      >
                        <option value="">Select a service…</option>
                        <option value="build-from-scratch">
                          Build from Scratch
                        </option>
                        <option value="rebuild">Website Rebuild</option>
                        <option value="ecommerce">E-Commerce</option>
                        <option value="design">UI/UX Design</option>
                        <option value="web-app">Web Application</option>
                        <option value="maintenance">
                          Maintenance & Support
                        </option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground text-sm"
                    >
                      <option value="">Select a budget range…</option>
                      <option value="under-25k">Under KES 25,000</option>
                      <option value="25k-75k">KES 25,000 – 75,000</option>
                      <option value="75k-200k">KES 75,000 – 200,000</option>
                      <option value="200k+">KES 200,000+</option>
                      <option value="discuss">Prefer to discuss</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Details <span className="text-primary">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your project — what you need, your goals, any references or existing website URL…"
                      className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground resize-none text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-futuristic w-full flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>
                  <p className="text-center text-xs text-muted-foreground">
                    We typically respond within{" "}
                    <span className="text-primary font-medium">2–4 hours</span>{" "}
                    during business hours.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────── */}
      <section className="space-y-10">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently Asked"
          highlight="Questions"
          description="Quick answers to things clients often ask before getting in touch."
        />
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, i) => (
            <details
              key={i}
              className="glass-card group opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.05 + i * 0.08}s` }}
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none select-none">
                <span className="font-display text-base font-semibold text-foreground pr-4">
                  {item.question}
                </span>
                <span className="text-primary text-xl font-bold shrink-0 transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed border-t border-border pt-4">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
