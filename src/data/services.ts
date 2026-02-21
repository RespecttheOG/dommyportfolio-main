export interface ServiceFeature {
  text: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  tag?: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: "1",
    icon: "Code2",
    title: "Web Development from Scratch",
    description:
      "We build high-performance, scalable websites from the ground up using modern frameworks and best practices — tailored exactly to your vision.",
    features: [
      "Custom React / Next.js builds",
      "REST & GraphQL API integration",
      "Authentication & user management",
      "Database design & optimization",
      "Deployment & CI/CD setup",
    ],
    tag: "Most Popular",
  },
  {
    id: "2",
    icon: "RefreshCcw",
    title: "Website Rebuilds & Migrations",
    description:
      "Turn your slow, outdated website into a lightning-fast modern platform without losing your SEO rankings or content.",
    features: [
      "Legacy site migration",
      "WordPress to React conversion",
      "Performance optimization",
      "Content migration & clean-up",
      "SEO preservation strategy",
    ],
  },
  {
    id: "3",
    icon: "ShoppingCart",
    title: "E-Commerce Solutions",
    description:
      "Launch or scale your online store with a custom e-commerce platform built for conversions — from product listings to payment processing.",
    features: [
      "Custom storefront design",
      "Stripe / M-Pesa integration",
      "Inventory management",
      "Order tracking system",
      "Mobile-optimized checkout",
    ],
  },
  {
    id: "4",
    icon: "Palette",
    title: "UI/UX Design & Branding",
    description:
      "We craft intuitive, beautiful interfaces backed by user research — giving your product a visual identity that converts visitors into customers.",
    features: [
      "Figma prototyping & wireframes",
      "Brand identity system",
      "Design system creation",
      "User journey mapping",
      "Accessibility compliance",
    ],
  },
  {
    id: "5",
    icon: "Smartphone",
    title: "Mobile-First Web Apps",
    description:
      "Progressive Web Apps and responsive experiences that feel native on any device — your users will never know the difference.",
    features: [
      "PWA development",
      "Responsive design system",
      "Offline functionality",
      "Push notifications",
      "App store listing support",
    ],
  },
  {
    id: "6",
    icon: "Shield",
    title: "Maintenance & Support",
    description:
      "Keep your website secure, up-to-date and performing at its best with our ongoing maintenance and priority support plans.",
    features: [
      "Monthly security updates",
      "Performance monitoring",
      "Content updates",
      "Bug fixes & patches",
      "24/7 priority support",
    ],
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We start with a free consultation to understand your business goals, target audience, and technical requirements.",
  },
  {
    number: "02",
    title: "Strategy & Design",
    description:
      "Our team creates wireframes, user flows, and a detailed project roadmap tailored to your needs.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "We build your project using modern technologies with regular demos and feedback loops to keep you in the loop.",
  },
  {
    number: "04",
    title: "Testing & QA",
    description:
      "Rigorous testing across devices and browsers, performance optimization, and security hardening before launch.",
  },
  {
    number: "05",
    title: "Launch & Support",
    description:
      "We deploy your site, monitor performance and provide ongoing support to ensure your success long-term.",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "KES 25,000",
    period: "one-time",
    description: "Perfect for individuals and small businesses launching their first website.",
    features: [
      "5-page responsive website",
      "Mobile-first design",
      "Contact form",
      "Basic SEO setup",
      "1 month free support",
      "Delivery in 7-14 days",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "KES 75,000",
    period: "one-time",
    description: "For businesses ready to scale with a powerful web presence and custom functionality.",
    features: [
      "Up to 15 pages",
      "Custom UI/UX design",
      "CMS integration",
      "API integrations",
      "Performance optimization",
      "3 months free support",
      "SEO optimization",
      "Delivery in 3-5 weeks",
    ],
    highlighted: true,
    cta: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "quote",
    description: "Full-scale web applications, e-commerce platforms and complex custom solutions.",
    features: [
      "Unlimited pages & features",
      "Custom web application",
      "E-commerce & payments",
      "Advanced integrations",
      "User authentication",
      "Dedicated project manager",
      "6 months support & SLA",
      "Priority delivery",
    ],
    highlighted: false,
    cta: "Get a Quote",
  },
];

export const faqItems = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Timeline depends on project complexity. A simple 5-page site takes 7-14 days. A full custom web app or e-commerce platform typically takes 4-8 weeks. We always provide a clear timeline after our discovery call.",
  },
  {
    question: "Do you work with clients outside Kenya?",
    answer:
      "Absolutely! We work with clients across Africa and globally. All our communication happens via video calls, WhatsApp, and email — timezone differences are no barrier to great work.",
  },
  {
    question: "Will I own the website and its code?",
    answer:
      "Yes, 100%. Once the project is delivered and payment is complete, all source code, design files and assets belong to you. No hidden licensing fees or lock-ins.",
  },
  {
    question: "Can you rebuild my existing website without losing SEO?",
    answer:
      "Yes! We specialize in migrations that preserve your SEO rankings. We implement proper redirects, maintain URL structures where possible, and ensure Google Search Console is configured correctly post-launch.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept M-Pesa, bank transfer, PayPal and Wise. Projects are typically structured with a 50% deposit upfront and 50% on delivery — or milestone-based for larger projects.",
  },
];
