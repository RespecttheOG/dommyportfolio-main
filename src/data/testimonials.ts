export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
  project: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Kamau",
    role: "CEO",
    company: "Kamau Retail Group",
    avatar: "https://i.pravatar.cc/80?u=sarah-kamau",
    rating: 5,
    text: "Dominic transformed our outdated website into a stunning e-commerce platform that tripled our online sales in just two months. The attention to detail and speed of delivery was absolutely incredible. CodeStar Ventures is the real deal.",
    project: "NexaStore E-Commerce",
  },
  {
    id: "2",
    name: "James Ochieng",
    role: "Founder",
    company: "TechFlow Kenya",
    avatar: "https://i.pravatar.cc/80?u=james-ochieng",
    rating: 5,
    text: "Working with CodeStar Ventures was a game-changer for our startup. Our SaaS dashboard went from concept to launch in 6 weeks, and it looks and performs better than anything our competitors have. Highly recommended!",
    project: "Apex SaaS Dashboard",
  },
  {
    id: "3",
    name: "Amina Hassan",
    role: "Marketing Director",
    company: "LuxeStay Hotels",
    avatar: "https://i.pravatar.cc/80?u=amina-hassan",
    rating: 5,
    text: "Our website rebuild was seamless. Dominic took our vision and exceeded expectations — the new site loads in under 1 second and our booking conversions jumped 85%. Professional, responsive, and genuinely talented.",
    project: "LuxeStay Hotel Rebuild",
  },
  {
    id: "4",
    name: "Brian Mwangi",
    role: "Product Manager",
    company: "Nairobi Digital Hub",
    avatar: "https://i.pravatar.cc/80?u=brian-mwangi",
    rating: 5,
    text: "The TaskFlow app CodeStar built for our team is used daily by 50+ employees. It's fast, intuitive and exactly what we needed. Dominic has a rare ability to understand business needs and translate them into great software.",
    project: "TaskFlow Project Manager",
  },
  {
    id: "5",
    name: "Grace Njeri",
    role: "Owner",
    company: "GreenLeaf Organics",
    avatar: "https://i.pravatar.cc/80?u=grace-njeri",
    rating: 5,
    text: "From zero online presence to a fully operational organic store with subscriptions and a loyalty program — CodeStar Ventures made it happen in record time. Our customers love the shopping experience.",
    project: "GreenLeaf Organic Store",
  },
  {
    id: "6",
    name: "Victor Otieno",
    role: "Managing Partner",
    company: "BrandForge Agency",
    avatar: "https://i.pravatar.cc/80?u=victor-otieno",
    rating: 5,
    text: "The rebrand and redesign exceeded all our targets. Lead generation is up 200% and we get compliments from new clients every week about our website. CodeStar Ventures is our go-to partner for all things digital.",
    project: "BrandForge Redesign",
  },
];
