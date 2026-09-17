import React from "react";
import type { Metadata } from "next";
import { PageHero, LegalContent, Cta } from "@/components/sections";

export const metadata: Metadata = {
  title: "Privacy Policy — Fluxly Agency",
  description: "How we collect, use, and protect your information.",
};

const sections = [
  {
    title: "1. Introduction",
    content:
      "This Privacy Policy explains how Fluxly Agency (\"we,\" \"us,\" or \"our\") collects, uses, and protects information when you visit our website or engage our services.",
  },
  {
    title: "2. Information We Collect",
    content:
      "We collect information you provide directly to us, such as your name, email address, company, and project details submitted through our contact and booking forms, along with standard usage data like pages visited and browser type.",
  },
  {
    title: "3. How We Use Information",
    content:
      "We use the information we collect to respond to inquiries, deliver and improve our services, communicate project updates, and understand how visitors use our site so we can make it better.",
  },
  {
    title: "4. Cookies & Tracking",
    content:
      "We use essential cookies to operate the site and, where enabled, analytics cookies to understand aggregate traffic patterns. You can control cookie preferences through your browser settings.",
  },
  {
    title: "5. Data Sharing",
    content:
      "We do not sell your personal information. We may share information with trusted service providers (such as hosting or email delivery) solely to operate our business, and only under confidentiality obligations.",
  },
  {
    title: "6. Data Security",
    content:
      "We apply industry-standard technical and organizational measures to protect your information, including encrypted transport and restricted access to stored data.",
  },
  {
    title: "7. Your Rights",
    content:
      "Depending on your location, you may have the right to access, correct, or delete your personal information. To exercise these rights, contact us using the details below.",
  },
  {
    title: "8. Children's Privacy",
    content:
      "Our services are not directed to individuals under 16, and we do not knowingly collect personal information from children.",
  },
  {
    title: "9. Changes to This Policy",
    content:
      "We may update this policy from time to time. Material changes will be reflected by an updated \"last updated\" date at the top of this page.",
  },
  {
    title: "10. Contact Us",
    content: "Questions about this policy can be sent to abdelwahabalbarkan2018@gmail.com or through our contact page.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How we collect, manage, and secure your personal and project-related data."
      />

      <LegalContent lastUpdated="July 1, 2026" sections={sections} />

      <Cta
        title="Have questions about your data?"
        description="Reach out and we'll be glad to walk you through how we handle information."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="View Terms"
        secondaryHref="/terms"
      />
    </>
  );
}
