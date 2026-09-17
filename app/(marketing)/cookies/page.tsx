import React from "react";
import type { Metadata } from "next";
import { PageHero, LegalContent, Cta } from "@/components/sections";

export const metadata: Metadata = {
  title: "Cookie Policy — Fluxly Agency",
  description: "How and why we use cookies across our website.",
};

const sections = [
  {
    title: "1. What Are Cookies",
    content:
      "Cookies are small text files stored on your device when you visit a website. They help sites remember your preferences and understand how visitors use them.",
  },
  {
    title: "2. Essential Cookies",
    content:
      "These cookies are required for the site to function correctly — for example, remembering your navigation state. The site cannot function properly without them, and they cannot be disabled.",
  },
  {
    title: "3. Analytics Cookies",
    content:
      "Where enabled, we use analytics cookies to understand aggregate traffic patterns, such as which pages are viewed most and how visitors move through the site. This data is anonymized and used only to improve the experience.",
  },
  {
    title: "4. Third-Party Cookies",
    content:
      "Some pages may load embedded content or scripts from trusted third parties (such as booking or payment tools), which may set their own cookies subject to their respective privacy policies.",
  },
  {
    title: "5. Managing Cookies",
    content:
      "Most browsers let you view, delete, and block cookies through their settings. Disabling non-essential cookies will not affect core site functionality, but may limit some personalization.",
  },
  {
    title: "6. Changes to This Policy",
    content:
      "We may update this policy as our use of cookies evolves. Material changes will be reflected by an updated \"last updated\" date at the top of this page.",
  },
  {
    title: "7. Contact Us",
    content: "Questions about our use of cookies can be sent to abdelwahabalbarkan2018@gmail.com or through our contact page.",
  },
];

export default function CookiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Cookie Policy"
        description="How and why we use cookies to run and improve this website."
      />

      <LegalContent lastUpdated="July 1, 2026" sections={sections} />

      <Cta
        title="Have questions about cookies?"
        description="Reach out and we'll be glad to walk you through how we handle tracking and data."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="View Privacy Policy"
        secondaryHref="/privacy"
      />
    </>
  );
}
