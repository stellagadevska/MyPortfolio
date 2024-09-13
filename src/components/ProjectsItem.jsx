import React from "react";

const ProjectsItem = (props) => {
  return (
    <div class='projects-item padd-15' data-category={props.dataCategory}>
      <div class='projects-item-inner shadow-dark'>
        <div class='projects-img'>
          <img src={props.imageSrc} alt='projects' />
        </div>

        <div class='projects-info'>
          <h4>{props.heading}</h4>
          <div class='icon'>
            <i class='fa fa-search'></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsItem;