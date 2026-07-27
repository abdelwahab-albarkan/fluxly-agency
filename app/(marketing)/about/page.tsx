import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Lightbulb,
  Gem,
  Compass,
  Target,
  Check,
  ArrowUpRight,
  Rocket,
  Users,
  Building2,
  Globe2,
  Wand2,
  Palette,
  Code2,
  ClipboardList,
  Twitter,
  Linkedin,
  Github,
  Dribbble,
} from "lucide-react";
import { PageHero, Stats, TechStack, Process, Cta } from "@/components/sections";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/animations/reveal";
import { services } from "@/lib/constants/services";

export const metadata: Metadata = {
  title: "About — Fluxly Agency",
  description: "Our story, mission, values, and the expertise behind a premium digital agency.",
};

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay ahead of the curve, adopting new tools and techniques before they become industry standard.",
  },
  {
    icon: Gem,
    title: "Quality",
    description: "Every deliverable is held to a senior-level standard — no shortcuts, no cut corners.",
  },
  {
    icon: Compass,
    title: "Transparency",
    description: "Fixed scope, fixed timeline, and clear communication from kickoff to launch.",
  },
  {
    icon: Target,
    title: "Results",
    description: "We measure success by your outcomes — leads, conversions, and revenue, not vanity metrics.",
  },
];

const whoWeAre = [
  { icon: Building2, value: "Remote-first", label: "Studio model" },
  { icon: Users, value: "Senior team", label: "No juniors on the invoice" },
  { icon: Globe2, value: "35+ countries", label: "Clients served" },
  { icon: Rocket, value: "150+ projects", label: "Shipped and supported" },
];

const teamRoles = [
  {
    icon: Wand2,
    title: "Creative Team",
    description: "Brand, art direction, and the ideas that make you unforgettable.",
    socials: [Dribbble, Twitter, Linkedin],
  },
  {
    icon: Palette,
    title: "Designers",
    description: "UI/UX designers crafting interfaces that are beautiful and intuitive.",
    socials: [Dribbble, Linkedin, Twitter],
  },
  {
    icon: Code2,
    title: "Developers",
    description: "Senior engineers shipping fast, scalable, production-grade code.",
    socials: [Github, Linkedin, Twitter],
  },
  {
    icon: ClipboardList,
    title: "Project Managers",
    description: "Keeping every project on scope, on time, and clearly communicated.",
    socials: [Linkedin, Twitter, Github],
  },
];

const timeline = [
  { year: "2017", title: "The beginning", description: "Fluxly Agency starts as a two-person studio obsessed with design and engineering craft." },
  { year: "2019", title: "First scale-up", description: "We grow into a full-service team and ship our first enterprise platforms." },
  { year: "2021", title: "Going global", description: "Remote-first by design, we begin partnering with clients across three continents." },
  { year: "2023", title: "Product engineering", description: "We expand into SaaS and web-application builds, from MVP to production scale." },
  { year: "Today", title: "A premium partner", description: "150+ projects delivered for startups, SMEs, and enterprises that refuse to look ordinary." },
];

const expertiseSlugs = ["web-development", "ecommerce", "saas-development", "ui-ux", "seo", "branding", "automation"];
const expertise = expertiseSlugs
  .map((slug) => services.find((service) => service.slug === slug))
  .filter((service): service is (typeof services)[number] => Boolean(service));

const whyChooseUs = [
  { title: "Custom Solutions", description: "Every project is built from scratch around your specific goals, not a template." },
  { title: "Modern Technologies", description: "Next.js, TypeScript, and production-grade tooling built to last." },
  { title: "Fast Performance", description: "Optimized for speed — real Core Web Vitals, not just Lighthouse scores." },
  { title: "SEO Ready", description: "Technical SEO fundamentals built in from day one." },
  { title: "Mobile First", description: "Designed for the device most of your customers actually use." },
  { title: "Ongoing Support", description: "We don't disappear after launch — real support, real people." },
];

const aboutProcessSteps = [
  { number: "01", title: "Discovery", description: "Understanding your business, goals, and challenges." },
  { number: "02", title: "Strategy", description: "A clear plan mapped to real outcomes." },
  { number: "03", title: "Design", description: "High-fidelity visuals refined with your input." },
  { number: "04", title: "Development", description: "Clean, scalable, production-grade code." },
  { number: "05", title: "Testing", description: "Cross-device QA and performance checks." },
  { number: "06", title: "Launch", description: "A smooth, monitored release." },
  { number: "07", title: "Support", description: "Ongoing care after you go live." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Crafting Digital Experiences That Drive Growth."
        description="We build premium websites, SaaS platforms, web applications, and digital experiences that help businesses grow faster, attract more customers, and stand out online."
      />

      {/* Who We Are */}
      <section className="pb-24 md:pb-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Who We Are</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              A senior digital studio, built for ambitious brands
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-muted md:text-lg">
              Fluxly Agency is a remote-first team of designers, engineers, and strategists. We partner with
              startups, SMEs, and enterprises to design and build digital products that look premium, perform
              fast, and keep delivering long after launch.
            </p>
          </div>

          <RevealGroup className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {whoWeAre.map((item) => (
              <RevealItem key={item.label}>
                <div className="group h-full rounded-xl border border-border-subtle bg-surface/40 p-6 text-center backdrop-blur-md transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-brand/40 hover:bg-surface/70 hover:shadow-[0_24px_60px_-25px_rgba(59,130,246,0.45)]">
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand transition-all duration-300 group-hover:scale-105 group-hover:border-brand/40 group-hover:bg-brand/15">
                    <item.icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <p className="mt-4 text-lg font-bold tracking-tight text-white">{item.value}</p>
                  <p className="mt-1 text-xs text-ink-muted">{item.label}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Our Story */}
      <section className="pb-24 md:pb-32">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">Our Story</h2>
              <p className="text-balance mt-4 text-2xl font-medium leading-snug text-white md:text-3xl">
                We started this agency because too many great businesses were settling for digital experiences that
                didn&apos;t match the quality of what they actually offered.
              </p>
              <p className="mt-6 text-base leading-relaxed text-ink-secondary md:text-lg">
                What began as a small team obsessed with design and engineering has grown into a full-service studio
                — but the obsession hasn&apos;t changed. We care about the pixel that&apos;s one degree off, the
                animation that feels a beat too slow, the load time that costs a customer.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-secondary md:text-lg">
                Our mission is simple: give ambitious businesses the same caliber of digital product that only
                venture-backed startups could historically afford, and help them succeed online without
                compromising on craft.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="group relative h-72 overflow-hidden rounded-xl border border-border-subtle shadow-[0_30px_70px_-25px_rgba(0,0,0,0.6)] lg:h-96">
                <Image
                  src="/images/team/agency-office.jpg"
                  alt="Inside the Fluxly Agency studio"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-canvas/70 via-transparent to-transparent" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Founder */}
      <section className="pb-24 md:pb-32">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-5 lg:gap-16">
            <Reveal className="lg:col-span-2">
              <div className="group relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-xl border border-border-subtle shadow-[0_30px_70px_-25px_rgba(0,0,0,0.6)]">
                <div
                  className="pointer-events-none absolute -inset-4 -z-10 rounded-2xl bg-brand/20 blur-2xl"
                  aria-hidden
                />
                <Image
                  src="/images/team/agency-ceo.jpg"
                  alt="Maya Chen, Founder & CEO of Fluxly Agency"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover transition-transform duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-canvas/60 via-transparent to-transparent" />
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-3">
              <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">Meet the Founder</h2>
              <p className="text-balance mt-4 text-2xl font-medium leading-snug text-white md:text-3xl">
                &ldquo;We don&apos;t chase trends. We build digital products that make our clients look like the
                best in their industry — and keep performing long after launch.&rdquo;
              </p>
              <div className="mt-8">
                <p className="text-base font-semibold text-white">Maya Chen</p>
                <p className="text-sm text-ink-muted">Founder &amp; CEO, Fluxly Agency</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="pb-24 md:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-xl border border-border-subtle bg-surface/40 p-8 md:p-10">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-muted">Mission</h3>
                <p className="mt-4 text-base leading-relaxed text-ink-secondary md:text-lg">
                  To create modern, high-performance digital products that help businesses grow.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="glow-brand h-full rounded-xl border border-brand/30 bg-surface p-8 md:p-10">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-brand">Vision</h3>
                <p className="mt-4 text-base leading-relaxed text-ink-secondary md:text-lg">
                  To become one of the leading digital agencies delivering premium digital experiences worldwide.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="pb-24 md:pb-32">
        <Container>
          <SectionHeading eyebrow="Core Values" title="What drives how we work" />
          <RevealGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <RevealItem key={value.title}>
                <Card className="h-full p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand">
                    <value.icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <h3 className="mt-6 text-base font-semibold text-white">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{value.description}</p>
                </Card>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Meet the Team */}
      <section className="pb-24 md:pb-32">
        <Container>
          <SectionHeading
            eyebrow="Our People"
            title="Meet the team behind the work"
            description="A small, senior studio of creatives, designers, engineers, and strategists who care about the details."
          />

          {/* Featured team photo */}
          <Reveal className="mt-16">
            <div className="group relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-border-subtle shadow-[0_40px_100px_-40px_rgba(0,0,0,0.7)] md:aspect-[21/9]">
              <Image
                src="/images/team/agency-team.jpg"
                alt="The Fluxly Agency team"
                fill
                sizes="(min-width: 1024px) 1100px, 100vw"
                className="object-cover transition-transform duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-10">
                <p className="text-lg font-semibold text-white md:text-xl">One team, start to finish</p>
                <p className="mt-1 max-w-md text-sm text-ink-secondary">
                  No handoffs, no account managers — just the people actually building your product.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Role cards */}
          <RevealGroup className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamRoles.map((role) => (
              <RevealItem key={role.title}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border-subtle bg-surface/40 p-7 backdrop-blur-md transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-brand/40 hover:bg-surface/70 hover:shadow-[0_30px_70px_-25px_rgba(59,130,246,0.45)]">
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand/0 blur-3xl transition-colors duration-500 group-hover:bg-brand/20" />

                  <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand transition-all duration-300 group-hover:scale-105 group-hover:border-brand/40 group-hover:bg-brand/15">
                    <role.icon className="h-5 w-5" strokeWidth={2} />
                  </div>

                  <h3 className="relative mt-6 text-base font-semibold text-white">{role.title}</h3>
                  <p className="relative mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{role.description}</p>

                  <div className="relative mt-6 flex items-center gap-2.5">
                    {role.socials.map((Social, i) => (
                      <a
                        key={i}
                        href="#"
                        aria-label={`${role.title} social link`}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-border-subtle text-ink-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:bg-brand/10 hover:text-white"
                      >
                        <Social className="h-4 w-4" strokeWidth={2} />
                      </a>
                    ))}
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Journey timeline */}
      <section className="pb-24 md:pb-32">
        <Container>
          <SectionHeading
            eyebrow="Our Journey"
            title="From two people to a premium partner"
            description="A quick look at how Fluxly Agency grew — and what stayed the same."
          />
          <div className="relative mx-auto mt-16 max-w-3xl">
            {/* vertical line */}
            <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-brand/50 via-border-subtle to-transparent md:left-1/2 md:-translate-x-1/2" />
            <RevealGroup className="flex flex-col gap-10 md:gap-14">
              {timeline.map((item, i) => (
                <RevealItem key={item.year}>
                  <div
                    className={`relative flex items-start gap-6 md:gap-0 ${
                      i % 2 === 1 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* node */}
                    <span className="relative z-10 mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand/40 bg-canvas md:absolute md:left-1/2 md:-translate-x-1/2">
                      <span className="h-2.5 w-2.5 rounded-full bg-brand shadow-[0_0_12px_2px_rgba(59,130,246,0.7)]" />
                    </span>

                    {/* card */}
                    <div className={`flex-1 md:w-1/2 ${i % 2 === 1 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <div className="rounded-xl border border-border-subtle bg-surface/40 p-6 backdrop-blur-md transition-all duration-300 hover:border-brand/40 hover:bg-surface/70">
                        <span className="font-mono text-sm font-semibold text-brand">{item.year}</span>
                        <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Container>
      </section>

      {/* Our Expertise */}
      <section className="pb-24 md:pb-32">
        <Container>
          <SectionHeading eyebrow="Our Expertise" title="What we help you build" />
          <RevealGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {expertise.map((service) => (
              <RevealItem key={service.slug}>
                <Link href={`/services/${service.slug}`} className="group block h-full">
                  <Card className="flex h-full flex-col p-7">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand">
                      <service.icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                    <h3 className="mt-6 text-base font-semibold text-white">{service.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{service.shortDescription}</p>
                    <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-ink-muted transition-colors duration-300 group-hover:text-brand">
                      Learn more
                      <ArrowUpRight
                        className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        strokeWidth={2}
                      />
                    </span>
                  </Card>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="pb-24 md:pb-32">
        <Container>
          <SectionHeading eyebrow="Why Choose Us" title="What sets our work apart" />
          <Reveal className="mt-16">
            <div className="glow-brand rounded-xl border border-brand/30 bg-surface p-8 md:p-12">
              <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
                {whyChooseUs.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                      <Check className="h-4 w-4" strokeWidth={2.5} />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-muted">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <TechStack />

      <Process
        eyebrow="Our Process"
        title="How an idea becomes a launch"
        description="Seven focused phases, from first call to ongoing support."
        steps={aboutProcessSteps}
      />

      <Stats />

      <Cta
        title="Ready to build your next digital product?"
        description="Tell us about your goals. We'll get back to you within one business day with next steps."
        primaryLabel="Start Your Project"
        primaryHref="/contact"
        secondaryLabel="Book a Free Consultation"
        secondaryHref="/book"
        image="/images/team/agency-team-celebration.jpg"
        imageAlt="The Fluxly Agency team celebrating a launch"
      />
    </>
  );
}
