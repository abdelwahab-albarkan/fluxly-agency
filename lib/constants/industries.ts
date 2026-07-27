import type { LucideIcon } from "lucide-react";
import {
  UtensilsCrossed,
  HeartPulse,
  Building2,
  Scale,
  GraduationCap,
  HardHat,
  BedDouble,
  Dumbbell,
  Briefcase,
} from "lucide-react";

export interface Industry {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export const industries: Industry[] = [
  {
    slug: "restaurant",
    name: "Restaurants",
    description: "Reservation-ready sites with visual menus, online ordering, and location pages that convert.",
    icon: UtensilsCrossed,
    image: "/images/restaurant-interior-dining-experience.webp",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    description: "Patient-friendly booking, provider profiles, and HIPAA-conscious intake flows for clinics.",
    icon: HeartPulse,
    image: "/images/healthcare-clinic-modern-interior.webp",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    description: "Listing platforms with map search, saved favorites, and high-intent lead capture.",
    icon: Building2,
    image: "/images/real-estate-luxury-modern-villa.webp",
  },
  {
    slug: "law",
    name: "Law Firms",
    description: "Practice-area driven sites built to convert consultation requests, not just inform.",
    icon: Scale,
    image: "/images/law-firm-office-library.webp",
  },
  {
    slug: "education",
    name: "Education",
    description: "Enrollment funnels, course catalogs, and portals for schools and training providers.",
    icon: GraduationCap,
    image: "/images/education-modern-classroom.webp",
  },
  {
    slug: "construction",
    name: "Construction",
    description: "Project galleries, quote requests, and credibility-building sites for contractors.",
    icon: HardHat,
    image: "/images/construction-site-safety-workers.webp",
  },
  {
    slug: "hotels",
    name: "Hotels",
    description: "Direct-booking engines that cut third-party OTA commission fees and boost margins.",
    icon: BedDouble,
    image: "/images/hotel-luxury-lobby-interior.webp",
  },
  {
    slug: "fitness",
    name: "Fitness",
    description: "Class scheduling, membership plans, and trainer profiles for gyms and studios.",
    icon: Dumbbell,
    image: "/images/fitness-gym-modern-equipment.webp",
  },
  {
    slug: "corporate",
    name: "Corporate",
    description: "Investor-grade brand presence, careers pages, and product marketing for established companies.",
    icon: Briefcase,
    image: "/images/corporate-office-glass-skyscraper.webp",
  },
];
