import {
  Code2,
  RefreshCcw,
  ShoppingCart,
  Palette,
  Smartphone,
  Shield,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Service } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  RefreshCcw,
  ShoppingCart,
  Palette,
  Smartphone,
  Shield,
};

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Code2;

  return (
    <div
      className="glass-card p-8 hover-glow transition-all duration-300 group flex flex-col gap-5 opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
    >
      {/* Icon + Tag */}
      <div className="flex items-start justify-between">
        <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
          <Icon className="w-7 h-7 text-primary-foreground" />
        </div>
        {service.tag && (
          <Badge className="bg-primary/10 text-primary border border-primary/30 text-xs">
            {service.tag}
          </Badge>
        )}
      </div>

      {/* Title & Description */}
      <div>
        <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
      </div>

      {/* Features */}
      <ul className="space-y-2 flex-1">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
