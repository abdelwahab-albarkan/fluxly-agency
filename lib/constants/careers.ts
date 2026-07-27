import type { LucideIcon } from "lucide-react";
import { Globe2, HeartHandshake, Wallet, Clock, GraduationCap, Users } from "lucide-react";

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  { icon: Globe2, title: "Remote-first", description: "Work from anywhere — we've been distributed since day one." },
  { icon: Wallet, title: "Competitive pay", description: "Compensation benchmarked against top-tier agencies and startups." },
  { icon: HeartHandshake, title: "Health coverage", description: "Medical, dental, and vision coverage for you and your dependents." },
  { icon: Clock, title: "Flexible hours", description: "We care about output, not hours logged at a desk." },
  { icon: GraduationCap, title: "Growth budget", description: "Annual budget for courses, conferences, and equipment." },
  { icon: Users, title: "Small, senior team", description: "Work directly with experienced people, not layers of management." },
];

export interface OpenRole {
  title: string;
  department: string;
  location: string;
  type: string;
}

export const openRoles: OpenRole[] = [
  { title: "Senior Frontend Engineer", department: "Engineering", location: "Remote", type: "Full-time" },
  { title: "Product Designer, UI/UX", department: "Design", location: "Remote", type: "Full-time" },
  { title: "Backend Engineer", department: "Engineering", location: "Remote", type: "Full-time" },
  { title: "SEO Strategist", department: "Growth", location: "Remote", type: "Contract" },
  { title: "Client Success Manager", department: "Operations", location: "Remote", type: "Full-time" },
];
