import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/service-detail";
import { getServiceBySlug } from "@/lib/constants/services";

const service = getServiceBySlug("web-development")!;

export const metadata: Metadata = {
  title: "Web Development Agency | Custom Website Development — Fluxly Agency",
  description:
    "Custom web development services from a US agency — fast, scalable, SEO-friendly websites and web apps built on a modern stack. Get a free quote.",
  alternates: { canonical: "/services/web-development" },
};

export default function Page() {
  return <ServiceDetail service={service} />;
}
