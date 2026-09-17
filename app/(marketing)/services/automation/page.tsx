import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/service-detail";
import { getServiceBySlug } from "@/lib/constants/services";

const service = getServiceBySlug("automation")!;

export const metadata: Metadata = {
  title: "Business Automation & Workflow Services — Fluxly Agency",
  description:
    "Business process automation — connect your tools, automate workflows, and save hours with custom automation built by a US agency. Free consultation.",
  alternates: { canonical: "/services/automation" },
};

export default function Page() {
  return <ServiceDetail service={service} />;
}
