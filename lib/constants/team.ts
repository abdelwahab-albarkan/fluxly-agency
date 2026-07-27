export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  gradient: string;
}

export const team: TeamMember[] = [
  { name: "Maya Chen", role: "Founder & Creative Director", initials: "MC", gradient: "from-brand to-accent" },
  { name: "Daniel Okoye", role: "Head of Engineering", initials: "DO", gradient: "from-indigo-500 to-brand" },
  { name: "Sofia Reyes", role: "Lead Product Designer", initials: "SR", gradient: "from-accent to-cyan-400" },
  { name: "Ethan Cole", role: "Senior Full-Stack Engineer", initials: "EC", gradient: "from-brand to-indigo-500" },
  { name: "Priya Nair", role: "SEO & Growth Lead", initials: "PN", gradient: "from-cyan-400 to-brand" },
  { name: "Jonas Weber", role: "Client Success Manager", initials: "JW", gradient: "from-indigo-500 to-accent" },
];
