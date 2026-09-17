import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/service-detail";
import { getServiceBySlug } from "@/lib/constants/services";

const service = getServiceBySlug("ecommerce")!;

export const metadata: Metadata = {
  title: "E-commerce Development Agency | Online Store Design — Fluxly Agency",
  description:
    "E-commerce web design and development — custom online stores on Shopify and headless commerce, built to convert. US e-commerce agency. Free consultation.",
  alternates: { canonical: "/services/ecommerce" },
};

export default function Page() {
  return <ServiceDetail service={service} />;
}
