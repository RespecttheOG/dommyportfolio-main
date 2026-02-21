import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Rocket, Mail, Phone, Github, Linkedin, Twitter, MapPin } from "lucide-react";

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Services", path: "/services" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact", path: "/contact" },
];

const services = [
  "Build from Scratch",
  "Website Rebuilds",
  "E-Commerce",
  "UI/UX Design",
  "Web Applications",
  "Maintenance",
];

export function Layout() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-glow-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <Navigation />

      <main className="relative z-10 pt-28 pb-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>

      {/* ─── FOOTER ───────────────────────────────────────────── */}
      <footer className="relative z-10 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            {/* Brand */}
            <div className="lg:col-span-2 space-y-4">
              <Link
                to="/"
                className="flex items-center gap-2 font-display text-xl font-bold gradient-text w-fit"
              >
                <Rocket className="w-6 h-6 text-primary" />
                CodeStar Ventures
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                Building exceptional digital experiences for businesses that want to stand out
                online. From scratch builds to full rebuilds — we deliver websites that work as hard
                as you do.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: "#", label: "GitHub" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-lg glass-card flex items-center justify-center hover:text-primary hover:border-primary/50 transition-colors text-muted-foreground"
                  >
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="space-y-4">
              <h4 className="font-display text-sm font-bold text-foreground uppercase tracking-wider">
                Navigation
              </h4>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services + Contact */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-display text-sm font-bold text-foreground uppercase tracking-wider">
                  Services
                </h4>
                <ul className="space-y-2">
                  {services.map((s) => (
                    <li key={s}>
                      <Link
                        to="/services"
                        className="text-muted-foreground text-sm hover:text-primary transition-colors"
                      >
                        {s}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-display text-sm font-bold text-foreground uppercase tracking-wider">
                  Contact
                </h4>
                <div className="space-y-2">
                  <a
                    href="mailto:respecttheog1@gmail.com"
                    className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 shrink-0" />
                    respecttheog1@gmail.com
                  </a>
                  <a
                    href="https://wa.me/254701196567"
                    className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 shrink-0" />
                    +254 701 196 567
                  </a>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    Nairobi, Kenya
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()}{" "}
              <span className="text-primary font-medium">CodeStar Ventures</span>. All rights
              reserved. Built by{" "}
              <span className="text-primary font-medium">Dominic Ochenge</span>.
            </p>
            <div className="flex gap-6 text-xs text-muted-foreground">
              <span className="hover:text-primary cursor-pointer transition-colors">
                Privacy Policy
              </span>
              <span className="hover:text-primary cursor-pointer transition-colors">
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
