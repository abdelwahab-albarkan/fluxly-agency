import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/service-detail";
import { getServiceBySlug } from "@/lib/constants/services";

const service = getServiceBySlug("redesign")!;

export const metadata: Metadata = {
  title: "Website Redesign Services & Agency — Fluxly Agency",
  description:
    "Website redesign services that modernize your site, boost conversions, and preserve SEO. Data-driven redesigns by a US web design agency. Free audit.",
  alternates: { canonical: "/services/redesign" },
};

export default function Page() {
  return <ServiceDetail service={service} />;
}
