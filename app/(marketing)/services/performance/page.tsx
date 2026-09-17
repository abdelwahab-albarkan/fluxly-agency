import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/service-detail";
import { getServiceBySlug } from "@/lib/constants/services";

const service = getServiceBySlug("performance")!;

export const metadata: Metadata = {
  title: "Website Performance Optimization Services — Fluxly Agency",
  description:
    "Website speed and performance optimization — Core Web Vitals, faster load times, and better rankings. Performance audits by a US web agency. Free audit.",
  alternates: { canonical: "/services/performance" },
};

export default function Page() {
  return <ServiceDetail service={service} />;
}
