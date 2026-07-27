import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Fluxly Agency — Premium Web Design & Development Agency',
    short_name: 'Fluxly Agency',
    description:
      'Fluxly Agency is a modern digital agency specializing in web design, web development, UI/UX design, branding, SEO, and scalable digital experiences.',
    start_url: '/',
    display: 'standalone',
    background_color: '#020617', // slate-950
    theme_color: '#2563eb', // blue-600
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
