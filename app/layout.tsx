import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { SmoothScroll } from "@/components/animations/smooth-scroll";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://fluxlyagency.com"),
  title: "Fluxly Agency — Premium Web Design & Development Agency",
  description:
    "Fluxly Agency is a modern digital agency specializing in web design, web development, UI/UX design, branding, SEO, and scalable digital experiences.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Fluxly Agency",
  url: "https://fluxlyagency.com",
  email: "hello@fluxlyagency.com",
  logo: "https://fluxlyagency.com/logos/fluxly-logo.png",
  description:
    "Fluxly Agency is a modern digital agency specializing in web design, web development, UI/UX design, branding, SEO, and scalable digital experiences.",
  sameAs: ["https://twitter.com/fluxlyagency", "https://www.linkedin.com/company/fluxlyagency"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-full flex flex-col bg-canvas text-white font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
