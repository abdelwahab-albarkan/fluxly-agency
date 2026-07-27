import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Gzip/Brotli text responses.
  compress: true,
  // Don't ship the "X-Powered-By" header.
  poweredByHeader: false,

  images: {
    // Serve modern, smaller formats first (AVIF ~50% smaller than JPEG/PNG).
    formats: ["image/avif", "image/webp"],
    // Allowed per-image quality values (hero uses 80; galleries default 75).
    qualities: [75, 80, 100],
    // Cache optimized images for a year — they're content-addressed by URL.
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },

  // Barrel-file tree-shaking: only pull the icons/motion primitives actually
  // used, instead of the whole package, shrinking First Load JS.
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react", "react-icons"],
  },

  async headers() {
    return [
      {
        // Long-lived immutable caching for static public images.
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Fonts and logos in /public.
        source: "/logos/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
