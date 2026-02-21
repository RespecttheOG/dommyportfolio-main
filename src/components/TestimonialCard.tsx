import { Star, Quote } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import type { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
  featured?: boolean;
}

export function TestimonialCard({ testimonial, featured = false }: TestimonialCardProps) {
  return (
    <div
      className={`glass-card p-6 hover-glow transition-all duration-300 flex flex-col gap-4 ${
        featured ? "md:p-10" : ""
      }`}
    >
      {/* Quote Icon */}
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
        <Quote className="w-5 h-5 text-primary" />
      </div>

      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
        ))}
      </div>

      {/* Text */}
      <p
        className={`text-foreground leading-relaxed flex-1 ${
          featured ? "text-lg" : "text-sm"
        }`}
      >
        "{testimonial.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-border">
        <Avatar className="w-10 h-10 border border-primary/30">
          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
          <AvatarFallback className="bg-primary/10 text-primary text-xs font-bold">
            {testimonial.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}
