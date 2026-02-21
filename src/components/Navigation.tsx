import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Rocket } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/services", label: "Services" },
  { path: "/testimonials", label: "Testimonials" },
  { path: "/contact", label: "Contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card px-5 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 font-display text-lg font-bold gradient-text hover:opacity-80 transition-all duration-300"
          >
            <Rocket className="w-5 h-5 text-primary" />
            <span>CodeStar</span>
            <span className="text-muted-foreground font-normal text-sm hidden sm:block">
              Ventures
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-medium text-xs uppercase tracking-wider transition-all duration-300 ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 gradient-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA + Toggle */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Link
              to="/contact"
              className="px-4 py-2 rounded-lg gradient-primary text-primary-foreground text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-all duration-300"
            >
              Hire Us
            </Link>
          </div>

          {/* Mobile */}
          <div className="flex lg:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-2 glass-card p-4 animate-fade-in-up">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium text-xs uppercase tracking-wider transition-all duration-300 py-3 px-4 rounded-lg ${
                    location.pathname === item.path
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 py-3 px-4 rounded-lg gradient-primary text-primary-foreground text-xs font-bold uppercase tracking-wider text-center"
              >
                Hire Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
