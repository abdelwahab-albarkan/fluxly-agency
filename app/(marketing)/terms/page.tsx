import React from "react";
import type { Metadata } from "next";
import { PageHero, LegalContent, Cta } from "@/components/sections";

export const metadata: Metadata = {
  title: "Terms of Service — Fluxly Agency",
  description: "The terms that govern our engagements and product delivery.",
};

const sections = [
  {
    title: "1. Agreement to Terms",
    content:
      "By engaging Fluxly Agency (\"we,\" \"us,\" or \"our\") for services or using our website, you agree to be bound by these Terms of Service.",
  },
  {
    title: "2. Services Provided",
    content:
      "We provide website design, development, e-commerce, SaaS, branding, and related digital services as scoped in an individual project proposal or statement of work agreed with the client.",
  },
  {
    title: "3. Client Responsibilities",
    content:
      "Clients agree to provide timely feedback, content, and access necessary to complete the project on schedule. Delays in providing required materials may extend project timelines accordingly.",
  },
  {
    title: "4. Payment Terms",
    content:
      "Projects are billed according to the payment schedule outlined in the applicable proposal, typically an upfront deposit followed by milestone-based payments. Late payments may pause active work.",
  },
  {
    title: "5. Intellectual Property",
    content:
      "Upon full payment, clients receive ownership of the final deliverables created specifically for their project. We retain the right to showcase completed work in our portfolio unless otherwise agreed in writing.",
  },
  {
    title: "6. Project Timelines",
    content:
      "Timelines provided in proposals are estimates based on the agreed scope. Significant scope changes requested after project kickoff may affect both timeline and cost.",
  },
  {
    title: "7. Limitation of Liability",
    content:
      "To the fullest extent permitted by law, Fluxly Agency is not liable for indirect, incidental, or consequential damages arising from the use of our services or deliverables.",
  },
  {
    title: "8. Termination",
    content:
      "Either party may terminate an active engagement with written notice. Clients are responsible for payment of all work completed up to the termination date.",
  },
  {
    title: "9. Governing Law",
    content: "These terms are governed by the laws of the State of New York, without regard to conflict of law principles.",
  },
  {
    title: "10. Changes to These Terms",
    content:
      "We may update these terms periodically. Continued use of our services after changes take effect constitutes acceptance of the revised terms.",
  },
  {
    title: "11. Contact Us",
    content: "Questions about these terms can be sent to hello@fluxlyagency.com or through our contact page.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="The guidelines and standards that govern our engagement and product delivery."
      />

      <LegalContent lastUpdated="July 1, 2026" sections={sections} />

      <Cta
        title="Have questions about these terms?"
        description="Reach out and we'll be glad to walk you through the details."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="View Privacy Policy"
        secondaryHref="/privacy"
      />
    </>
  );
}
