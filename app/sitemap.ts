import { MetadataRoute } from 'next';
import { services } from '@/lib/constants/services';
import { projects } from '@/lib/constants/projects';
import { caseStudies } from '@/lib/constants/case-studies';
import { locations } from '@/lib/constants/locations';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://agencyfluxly.com';

  const routes = [
    '',
    '/about',
    '/services',
    ...services.map((service) => `/services/${service.slug}`),
    '/portfolio',
    ...projects.map((project) => `/portfolio/${project.slug}`),
    '/case-studies',
    ...caseStudies.map((study) => `/case-studies/${study.slug}`),
    '/locations',
    ...locations.map((loc) => `/locations/${loc.slug}`),
    '/industries',
    '/pricing',
    '/faq',
    '/contact',
    '/book',
    '/careers',
    '/privacy',
    '/terms',
    '/cookies',
    '/blog',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/blog' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
