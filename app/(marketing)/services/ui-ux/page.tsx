import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/service-detail";
import { getServiceBySlug } from "@/lib/constants/services";

const service = getServiceBySlug("ui-ux")!;

export const metadata: Metadata = {
  title: "UI/UX Design Agency | Product & Web Design — Fluxly Agency",
  description:
    "UI/UX design agency crafting intuitive, high-converting product and website experiences — user research, prototyping, and design systems. Free consultation.",
  alternates: { canonical: "/services/ui-ux" },
};

export default function Page() {
  return <ServiceDetail service={service} />;
}
