import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/service-detail";
import { getServiceBySlug } from "@/lib/constants/services";

const service = getServiceBySlug("maintenance")!;

export const metadata: Metadata = {
  title: "Website Maintenance & Support Services — Fluxly Agency",
  description:
    "Website maintenance and support — updates, security, backups, and monitoring to keep your site fast and secure. Ongoing care from a US agency. Get a plan.",
  alternates: { canonical: "/services/maintenance" },
};

export default function Page() {
  return <ServiceDetail service={service} />;
}
