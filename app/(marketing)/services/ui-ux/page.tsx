import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/service-detail";
import { getServiceBySlug } from "@/lib/constants/services";

const service = getServiceBySlug("ui-ux")!;

export const metadata: Metadata = {
  title: `${service.name} — Fluxly Agency`,
  description: service.shortDescription,
};

export default function Page() {
  return <ServiceDetail service={service} />;
}
