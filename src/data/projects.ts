export type ProjectCategory = "all" | "web-apps" | "ecommerce" | "redesigns";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: ProjectCategory;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "NexaStore E-Commerce Platform",
    description:
      "A blazing-fast full-featured online store with cart, Stripe payment integration, and a powerful admin dashboard.",
    longDescription:
      "Built with React, Node.js and Stripe API. Handles thousands of products with smooth checkout flows, inventory management and real-time order tracking.",
    image: "https://picsum.photos/seed/proj1/800/500",
    technologies: ["React", "TypeScript", "Node.js", "Stripe", "PostgreSQL"],
    category: "ecommerce",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "2",
    title: "Apex SaaS Dashboard",
    description:
      "A modern analytics dashboard for SaaS businesses with charts, user management, and subscription billing.",
    longDescription:
      "Built with React, Recharts and Supabase. Provides real-time KPIs, cohort analysis, churn metrics and Stripe subscription management.",
    image: "https://picsum.photos/seed/proj2/800/500",
    technologies: ["React", "Recharts", "Supabase", "Tailwind", "TypeScript"],
    category: "web-apps",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "3",
    title: "LuxeStay Hotel Website Rebuild",
    description:
      "A luxury hotel website rebuilt from a clunky WordPress site into a fast, modern React experience.",
    longDescription:
      "Complete redesign and rebuild improving page speed by 80%, with online reservation system, gallery and CMS integration.",
    image: "https://picsum.photos/seed/proj3/800/500",
    technologies: ["React", "Vite", "Sanity CMS", "Tailwind", "Framer Motion"],
    category: "redesigns",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "4",
    title: "TaskFlow Project Manager",
    description:
      "A Trello-like productivity app with drag-and-drop boards, real-time collaboration and team chat.",
    longDescription:
      "Real-time collaboration using Firebase, with role-based permissions, file uploads, and activity logs.",
    image: "https://picsum.photos/seed/proj4/800/500",
    technologies: ["React", "Firebase", "DnD Kit", "TypeScript"],
    category: "web-apps",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: "5",
    title: "GreenLeaf Organic Store",
    description:
      "An elegant e-commerce platform for organic products with subscriptions, loyalty points and mobile-first design.",
    longDescription:
      "Headless commerce with Next.js storefront, Shopify backend, loyalty program and mobile-optimized checkout.",
    image: "https://picsum.photos/seed/proj5/800/500",
    technologies: ["Next.js", "Shopify", "Tailwind", "TypeScript"],
    category: "ecommerce",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: "6",
    title: "BrandForge Agency Redesign",
    description:
      "A complete brand identity and website overhaul for a marketing agency, boosting leads by 200%.",
    longDescription:
      "From wireframes to deployment — new brand system, copywriting, animations, CMS setup and SEO optimization.",
    image: "https://picsum.photos/seed/proj6/800/500",
    technologies: ["React", "Framer Motion", "Contentful", "Tailwind"],
    category: "redesigns",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];
