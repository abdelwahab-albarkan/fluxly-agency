import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/service-detail";
import { getServiceBySlug } from "@/lib/constants/services";

const service = getServiceBySlug("seo")!;

export const metadata: Metadata = {
  title: "SEO Agency & Services for US Businesses — Fluxly Agency",
  description:
    "SEO services that grow organic traffic and leads — technical SEO, content, and local SEO from a results-driven US SEO agency. Get a free SEO audit.",
  alternates: { canonical: "/services/seo" },
};

export default function Page() {
  return <ServiceDetail service={service} />;
}
