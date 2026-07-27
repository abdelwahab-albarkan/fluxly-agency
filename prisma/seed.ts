import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database with agency demo data...');

  // Clean old records
  await prisma.notification.deleteMany({});
  await prisma.ticket.deleteMany({});
  await prisma.invoice.deleteMany({});
  await prisma.task.deleteMany({});
  await prisma.project.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.lead.deleteMany({});
  await prisma.blogPost.deleteMany({});

  // 1. Create Users
  const admin = await prisma.user.create({
    data: {
      email: 'admin@agency.com',
      name: 'Alexander Sterling',
      role: 'ADMIN',
    },
  });

  const employee = await prisma.user.create({
    data: {
      email: 'sophia@agency.com',
      name: 'Sophia Laurent',
      role: 'EMPLOYEE',
    },
  });

  const client1 = await prisma.user.create({
    data: {
      email: 'client@startup.io',
      name: 'Marcus Chen',
      role: 'CLIENT',
    },
  });

  const client2 = await prisma.user.create({
    data: {
      email: 'jane@enterprise.co',
      name: 'Jane Doe',
      role: 'CLIENT',
    },
  });

  console.log('Created Users:', { admin: admin.email, employee: employee.email, client1: client1.email });

  // 2. Create Projects
  const project1 = await prisma.project.create({
    data: {
      name: 'E-commerce Platform Redesign',
      description: 'Modern headless Shopify storefront using Next.js 15, Tailwind v4, and Stripe checkout systems.',
      status: 'ACTIVE',
      clientId: client1.id,
    },
  });

  const project2 = await prisma.project.create({
    data: {
      name: 'SEO & Content Campaign',
      description: 'Programmatic landing pages and technical search engine optimization auditing.',
      status: 'ACTIVE',
      clientId: client1.id,
    },
  });

  const project3 = await prisma.project.create({
    data: {
      name: 'Logo & Brand Identity Suite',
      description: 'Complete branding typography, corporate guidelines, and assets.',
      status: 'COMPLETED',
      clientId: client2.id,
    },
  });

  console.log('Created Projects:', [project1.name, project2.name, project3.name]);

  // 3. Create Tasks
  await prisma.task.createMany({
    data: [
      {
        title: 'Initial Figma Wireframes',
        description: 'Review responsive homepage layouts and checkout components.',
        status: 'DONE',
        priority: 'HIGH',
        projectId: project1.id,
      },
      {
        title: 'Stripe webhook integration',
        description: 'Implement secure payment lifecycle events listener.',
        status: 'IN_PROGRESS',
        priority: 'URGENT',
        projectId: project1.id,
      },
      {
        title: 'Mobile Navigation Menu UX Fix',
        description: 'Improve header navigation panel transitions and gestures on iOS.',
        status: 'TODO',
        priority: 'MEDIUM',
        projectId: project1.id,
      },
      {
        title: 'Technical Audit & Schema Markup',
        description: 'Add structured JSON-LD schemes to blog layout pages.',
        status: 'IN_PROGRESS',
        priority: 'MEDIUM',
        projectId: project2.id,
      },
    ],
  });

  // 4. Create Invoices
  await prisma.invoice.createMany({
    data: [
      {
        number: 'INV-2026-08',
        amount: 2500.00,
        status: 'PAID',
        dueDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
        projectId: project1.id,
        clientId: client1.id,
      },
      {
        number: 'INV-2026-11',
        amount: 4250.00,
        status: 'UNPAID',
        dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days from now
        projectId: project1.id,
        clientId: client1.id,
      },
      {
        number: 'INV-2026-12',
        amount: 1750.00,
        status: 'UNPAID',
        dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
        projectId: project2.id,
        clientId: client1.id,
      },
    ],
  });

  // 5. Create Support Tickets
  await prisma.ticket.create({
    data: {
      subject: 'Asset upload error on media folder',
      message: 'Getting a 413 Payload Too Large when uploading banner assets. Need assistance.',
      status: 'OPEN',
      priority: 'MEDIUM',
      clientId: client1.id,
    },
  });

  // 6. Create Leads
  await prisma.lead.createMany({
    data: [
      {
        name: 'David Vance',
        email: 'david@healthtech.com',
        company: 'HealthTech Solutions',
        value: 12000.00,
        status: 'QUALIFIED',
        source: 'WEBSITE',
        notes: 'Inquired about React Native customer portal app and HIPAA compliance checklists.',
      },
      {
        name: 'Sarah Jenkins',
        email: 'sarah@apexventures.vc',
        company: 'Apex Ventures',
        value: 8500.00,
        status: 'CONTACTED',
        source: 'REFERRAL',
        notes: 'Needs custom landing pages for 4 newly incubated tech startups.',
      },
    ],
  });

  // 7. Create Blog Posts
  await prisma.blogPost.createMany({
    data: [
      {
        title: 'Building Hyper-Performant Next.js Architectures in 2026',
        slug: 'building-performant-nextjs-2026',
        summary: 'Explore static pre-rendering, edge middlewares, and custom caching configurations for modern production environments.',
        content: '# Hyper-Performant Next.js\nNext.js provides amazing features out-of-the-box. In this post we go in-depth on custom cache-control headers, database connection pooling, and optimized layouts...',
        published: true,
        category: 'Engineering',
        tags: 'nextjs,react,webdev',
      },
      {
        title: 'The Evolution of Premium Minimalist Design Systems',
        slug: 'evolution-minimalist-design-systems',
        summary: 'How visual micro-animations, curated harmonious color palettes, and clean layouts drive deeper conversions.',
        content: '# Minimalist Design Systems\nModern interfaces need to speak with clarity. By cutting out heavy gradients and visual clutter, designers focus on typography, layout spacing, and tactile micro-animations...',
        published: true,
        category: 'UI/UX Design',
        tags: 'design,ux,minimalism',
      },
    ],
  });

  // 8. Create Notifications
  await prisma.notification.createMany({
    data: [
      {
        title: 'Invoice Paid',
        message: 'Invoice #INV-2026-08 ($2,500.00) has been paid by Marcus Chen.',
        userId: admin.id,
      },
      {
        title: 'New Support Ticket',
        message: 'Marcus Chen created support ticket: "Asset upload error on media folder".',
        userId: admin.id,
      },
      {
        title: 'Milestone 2 Completed',
        message: 'Your logo design assets and guidelines have been uploaded and completed.',
        userId: client2.id,
      },
    ],
  });

  console.log('Database seeding successfully finished!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
