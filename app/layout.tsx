import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/animations/smooth-scroll";
import "./globals.css";

// GeistSans is the LCP font (hero headline) — keep it preloaded on the critical
// path. GeistMono is only used for small, non-LCP labels/tables, so we skip its
// preload so it doesn't compete with the LCP font for bandwidth on slow networks.
const GeistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans", display: "swap" });
const GeistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://fluxlyagency.com"),
  title: "Web Design & Development Agency | Fluxly Agency",
  description:
    "Fluxly is a US web design and development agency building custom websites, e-commerce stores, SaaS platforms, UI/UX, branding, and SEO that drive growth. Book a free consultation.",
  keywords: [
    "web design agency",
    "web development agency",
    "custom website development",
    "ecommerce development company",
    "ui ux design agency",
    "branding agency",
    "seo agency",
    "digital agency",
    "web design company",
    "web development company",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Fluxly Agency",
    title: "Web Design & Development Agency | Fluxly Agency",
    description:
      "US web design and development agency building custom websites, e-commerce, SaaS, UI/UX, branding, and SEO that drive growth.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design & Development Agency | Fluxly Agency",
    description:
      "US web design and development agency: custom websites, e-commerce, SaaS, UI/UX, branding, and SEO.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: "Fluxly Agency",
  url: "https://fluxlyagency.com",
  email: "hello@fluxlyagency.com",
  telephone: "+212625218443",
  logo: "https://fluxlyagency.com/logos/fluxly-logo.png",
  image: "https://fluxlyagency.com/logos/fluxly-logo.png",
  priceRange: "$$",
  description:
    "Fluxly Agency is a US web design and development agency specializing in custom websites, e-commerce, SaaS, UI/UX design, branding, and SEO.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "New York",
    addressRegion: "NY",
    addressCountry: "US",
  },
  areaServed: { "@type": "Country", name: "United States" },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+212625218443",
    email: "hello@fluxlyagency.com",
    contactType: "sales",
    areaServed: "US",
    availableLanguage: ["English"],
  },
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
