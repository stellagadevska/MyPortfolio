export interface NavLink {
  href: string;
  iconClass: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: "/", iconClass: "fa fa-home", label: "Home" },
  { href: "/about", iconClass: "fa fa-user", label: "About" },
  { href: "/interests", iconClass: "fa fa-list", label: "Interests" },
  { href: "/projects", iconClass: "fa fa-briefcase", label: "Projects" },
  {
    href: "/recommendations",
    iconClass: "fa fa-comments",
    label: "Recommendations",
  },
];

export const profile = {
  name: "Stella Gadevska",
  profession: "FrontEnd Developer",
  githubUrl: "https://github.com/stellagadevska",
  linkedInUrl: "https://www.linkedin.com/in/Stella-gadevska/",
} as const;
