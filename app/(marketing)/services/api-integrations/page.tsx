import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/service-detail";
import { getServiceBySlug } from "@/lib/constants/services";

const service = getServiceBySlug("api-integrations")!;

export const metadata: Metadata = {
  title: "API Integration Services & Development — Fluxly Agency",
  description:
    "API integration services — connect CRMs, payments, and third-party apps into a seamless system. Custom integrations by a US development agency. Free quote.",
  alternates: { canonical: "/services/api-integrations" },
};

export default function Page() {
  return <ServiceDetail service={service} />;
}
