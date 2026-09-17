import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/service-detail";
import { getServiceBySlug } from "@/lib/constants/services";

const service = getServiceBySlug("web-applications")!;

export const metadata: Metadata = {
  title: "Web Application Development Company | Custom Web Apps — Fluxly Agency",
  description:
    "Custom web application development — scalable, secure web apps and dashboards built by a US development agency. From MVP to enterprise. Free consultation.",
  alternates: { canonical: "/services/web-applications" },
};

export default function Page() {
  return <ServiceDetail service={service} />;
}
