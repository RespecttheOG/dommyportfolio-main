import { useState } from "react";
import { Mail, Phone, MapPin, Code, Globe, Sparkles } from "lucide-react";

interface FlipCardProps {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  skills: string[];
}

export function FlipCard({ name, title, email, phone, location, skills }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`flip-card w-80 h-96 cursor-pointer ${isFlipped ? 'flipped' : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="flip-card-inner">
        {/* Front of Card */}
        <div className="flip-card-front glass-card glow-shadow p-8 flex flex-col items-center justify-center">
          {/* Avatar Container */}
          <div className="relative mb-6">
            <div className="w-24 h-24 rounded-full gradient-primary flex items-center justify-center pulse-glow">
              <Code className="w-12 h-12 text-primary-foreground" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
          </div>

          {/* Name & Title */}
          <h3 className="font-display text-xl font-bold text-foreground mb-2">{name}</h3>
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-4">{title}</p>

          {/* Decorative Lines */}
          <div className="w-full flex items-center gap-3 mb-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <Globe className="w-4 h-4 text-primary" />
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>

          {/* Hint */}
          <p className="text-muted-foreground text-xs mt-4">Click to flip</p>
        </div>

        {/* Back of Card */}
        <div className="flip-card-back glass-card glow-shadow p-8 flex flex-col justify-center">
          <h4 className="font-display text-lg font-bold text-foreground mb-6 text-center">Contact Info</h4>

          {/* Contact Details */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm text-foreground truncate">{email}</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm text-foreground">{phone}</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm text-foreground">{location}</span>
            </div>
          </div>

          {/* Skills Preview */}
          <div className="flex flex-wrap gap-2 justify-center">
            {skills.slice(0, 3).map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>

          <p className="text-muted-foreground text-xs mt-4 text-center">Click to flip back</p>
        </div>
      </div>
    </div>
  );
}
