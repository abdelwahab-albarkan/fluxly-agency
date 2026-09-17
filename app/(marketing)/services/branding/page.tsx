import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/service-detail";
import { getServiceBySlug } from "@/lib/constants/services";

const service = getServiceBySlug("branding")!;

export const metadata: Metadata = {
  title: "Branding Agency | Brand Identity & Strategy — Fluxly Agency",
  description:
    "Branding agency building distinctive brand identities and strategy — logo, visual identity, and messaging that set you apart. Free brand consultation.",
  alternates: { canonical: "/services/branding" },
};

export default function Page() {
  return <ServiceDetail service={service} />;
}
