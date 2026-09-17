import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/service-detail";
import { getServiceBySlug } from "@/lib/constants/services";

const service = getServiceBySlug("saas-development")!;

export const metadata: Metadata = {
  title: "SaaS Development Company | Web App Development — Fluxly Agency",
  description:
    "SaaS and web application development — scalable custom software and MVPs built by a US development agency. From idea to launch. Free consultation.",
  alternates: { canonical: "/services/saas-development" },
};

export default function Page() {
  return <ServiceDetail service={service} />;
}
