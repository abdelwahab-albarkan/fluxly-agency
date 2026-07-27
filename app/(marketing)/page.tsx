import React from "react";
import {
  Hero,
  Services,
  Work,
  WhyChooseUs,
  TechStack,
  Process,
  Testimonials,
  PricingPreview,
  Faq,
  Cta,
} from "@/components/sections";

export default function Page() {
  return (
    <>
      <Hero />
      <Services />
      <Work />
      <WhyChooseUs />
      <TechStack />
      <Process />
      <Testimonials />
      <PricingPreview />
      <Faq />
      <Cta />
    </>
  );
}
