import type { StaticImageData } from "next/image";
import project1 from "@/assets/images/projects/1.jpg";
import project2 from "@/assets/images/projects/2.jpg";
import project3 from "@/assets/images/projects/3.jpg";
import project4 from "@/assets/images/projects/4.jpg";
import project5 from "@/assets/images/projects/5.jpg";
import project6 from "@/assets/images/projects/6.jpg";

export type ProjectCategory = "spas" | "e-commerce" | "graphic-design";

export interface Project {
  category: ProjectCategory;
  image: StaticImageData;
  heading: string;
}

export interface ProjectFilter {
  /** "all" shows every project; otherwise matches a Project.category */
  value: ProjectCategory | "all";
  label: string;
}

export const projectFilters: ProjectFilter[] = [
  { value: "all", label: "All" },
  { value: "spas", label: "SPAs" },
  { value: "e-commerce", label: "E-commerce" },
  { value: "graphic-design", label: "Graphic Design" },
];

export const projects: Project[] = [
  { category: "spas", image: project1, heading: "Single Page Application" },
  { category: "e-commerce", image: project2, heading: "E-commerce" },
  { category: "e-commerce", image: project3, heading: "E-commerce" },
  { category: "graphic-design", image: project4, heading: "Graphic Design" },
  { category: "graphic-design", image: project5, heading: "Graphic Design" },
  { category: "graphic-design", image: project6, heading: "Graphic Design" },
];
