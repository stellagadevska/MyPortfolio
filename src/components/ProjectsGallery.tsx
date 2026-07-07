"use client";

import { useState } from "react";
import {
  projectFilters,
  projects,
  type ProjectFilter,
} from "@/data/projects";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

const ProjectsGallery = () => {
  const [activeFilter, setActiveFilter] =
    useState<ProjectFilter["value"]>("all");

  const visibleProjects = projects.filter((project) =>
    activeFilter === "all" ? true : project.category === activeFilter
  );

  return (
    <>
      <div className='row'>
        <div className={`${styles.projectsFilter} padd-15`}>
          {projectFilters.map((filter) => (
            <button
              key={filter.value}
              type='button'
              className={activeFilter === filter.value ? styles.active : ""}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className='row'>
        {visibleProjects.map((project) => (
          <ProjectCard key={project.image.src} {...project} />
        ))}
      </div>
    </>
  );
};

export default ProjectsGallery;
