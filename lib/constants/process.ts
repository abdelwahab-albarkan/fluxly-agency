export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  { number: "01", title: "Discovery", description: "We dig into your business, users, and goals." },
  { number: "02", title: "Planning", description: "A sharp, achievable scope and project roadmap." },
  { number: "03", title: "Design", description: "High-fidelity systems refined in tight feedback loops." },
  { number: "04", title: "Development", description: "Senior engineers ship clean, tested, production code." },
  { number: "05", title: "Testing", description: "Cross-device QA, performance, and accessibility passes." },
  { number: "06", title: "Launch", description: "We ship, monitor, and keep optimizing after go-live." },
];
