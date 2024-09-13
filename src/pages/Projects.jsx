import React, { useState } from "react";
import project1 from "../assets/images/projects/1.jpg";
import project2 from "../assets/images/projects/2.jpg";
import project3 from "../assets/images/projects/3.jpg";
import project4 from "../assets/images/projects/4.jpg";
import project5 from "../assets/images/projects/5.jpg";
import project6 from "../assets/images/projects/6.jpg";
import ProjectsItem from "../components/ProjectsItem";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projectsHeaderTitle = "Projects";
  const projects = [
    {
      dataCategory: "graphic-design",
      imageSrc: project1,
      heading: "Graphic Design",
    },
    {
      dataCategory: "photography",
      imageSrc: project2,
      heading: "Photography",
    },
    {
      dataCategory: "drawing",
      imageSrc: project3,
      heading: "Drawing",
    },
    {
      dataCategory: "photography",
      imageSrc: project4,
      heading: "Photography",
    },
    {
      dataCategory: "graphic-design",
      imageSrc: project5,
      heading: "Graphic Design",
    },
    {
      dataCategory: "drawing",
      imageSrc: project6,
      heading: "Drawing",
    },
  ];
  const filterButtons = [
    {
      buttonClassName: "all",
      buttonLabel: "All",
    },
    {
      buttonClassName: "graphic-design",
      buttonLabel: "Graphic Design",
    },
    {
      buttonClassName: "drawing",
      buttonLabel: "Drawing",
    },
    {
      buttonClassName: "photography",
      buttonLabel: "Photography",
    },
  ];

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredProjects = projects.filter((project) =>
    filter === "all" ? true : project.dataCategory === filter
  );

  return (
    <section class='projects section' id='projects'>
      <div class='container'>
        <div class='row'>
          <div class='section-title padd-15'>
            <h2>{projectsHeaderTitle}</h2>
          </div>
        </div>

        <div class='row'>
          <div class='projects-filter padd-15'>
            {filterButtons.map((filterButton) => {
              return (
                <button
                  type='button'
                  className={
                    filter === filterButton.buttonClassName ? "active" : ""
                  }
                  onClick={() =>
                    handleFilterChange(filterButton.buttonClassName)
                  }
                >
                  {filterButton.buttonLabel}
                </button>
              );
            })}
          </div>
        </div>

        <div class='row'>
          {filteredProjects.map((project) => {
            return (
              <ProjectsItem
                dataCategory={project.dataCategory}
                imageSrc={project.imageSrc}
                heading={project.heading}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;