export interface InfoItem {
  label: string;
  value: string;
}

export interface Skill {
  name: string;
  /** Proficiency as a percentage, 0-100. Drives both the bar width and the label. */
  level: number;
}

export interface TimelineEntry {
  date: string;
  title: string;
  place: string;
  text?: string;
  iconClass: string;
}

export const aboutIntro = {
  // The role shown in the heading comes from profile.profession in site.ts —
  // single source of truth, no duplicate string here.
  bio: `Front-End Software Engineer with 5+ years of experience in building scalable web applications using React.js and modern web technologies. I’ve worked extensively in the telecom business, but recently started a job in the field of e-commerce.

I have just finished a Master’s degree in Artificial Intelligence at Sofia University, where I’m expanding my expertise into AI-driven software and intelligent systems. I’m passionate about bridging front-end engineering with emerging AI capabilities to create smarter, more intuitive digital experiences.

Known for my adaptability, organization, and collaborative mindset, I thrive in dynamic teams that combine creativity with technical precision.`,
} as const;

const BIRTH_DATE = new Date(2000, 0, 9); // 9 January 2000 (month is 0-indexed)

function calculateAge(birthDate: Date): number {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  // Subtract a year if this year's birthday hasn't happened yet.
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export const personalInfo: InfoItem[] = [
  { label: "Age:", value: String(calculateAge(BIRTH_DATE)) },
  { label: "Email:", value: "stelagadevska@gmail.com" },
  { label: "City:", value: "Sofia" },
  { label: "Bachelor in:", value: "Business Informatics" },
  { label: "Masters in:", value: "Artificial Intelligence" },
  { label: "Specializing in:", value: "FrontEnd Development" },
];

export const skills: Skill[] = [
  { name: "React", level: 95 },
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "Javascript", level: 80 },
];

export const education: TimelineEntry[] = [
  {
    date: "2024-2026",
    title: "Artificial Intelligence",
    place: "Sofia University",
    iconClass: "fa fa-calendar",
  },
  {
    date: "2023-2024",
    title: "Professional Qualification for Pedagogy in IT/ Informatics",
    place: "New Bulgarian University",
    iconClass: "fa fa-calendar",
  },
  {
    date: "2018 - 2023",
    title: "Business Informatics",
    place: "New Bulgarian University",
    iconClass: "fa fa-calendar",
  },
  {
    date: "2020-2022",
    title: "Java Web Development",
    place: "Softuni",
    iconClass: "fa fa-calendar",
  },
  {
    date: "2013 - 2018",
    title: "Language Class",
    place: "Vasil Levski Secondary School",
    text: "Bulgarian - Native/ English - C1/ Spanish - A2",
    iconClass: "fa fa-calendar",
  },
];

export const work: TimelineEntry[] = [
    {
    date: "August 2026 - present",
    title: "Front End Software Developer",
    place: "Remix",
    iconClass: "fa fa-calendar",
  },
  {
    date: "June 2021 - July 2025",
    title: "Front End Software Developer",
    place: "Amdocs",
    iconClass: "fa fa-calendar",
  },
  {
    date: "March 2021 - June 2021",
    title: "Software Developer Intern",
    place: "Amdocs",
    iconClass: "fa fa-calendar",
  },
];

export const certificates: TimelineEntry[] = [
  {
    date: "December 2021",
    title: "AWS Certified Cloud Practitioner",
    place: "Amazon Web Services (AWS)",
    iconClass: "fa fa-calendar",
  },
  {
    date: "December 2017",
    title: "Certificate in Advanced English",
    place: "Cambridge Assessment English",
    iconClass: "fa fa-calendar",
  },
];
