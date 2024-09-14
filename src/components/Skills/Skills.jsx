import React from "react";

const skillItems = [
  { name: "HTML", width: "95%", percent: "95%" },
  { name: "CSS", width: "90%", percent: "90%" },
  { name: "Javascript", width: "76%", percent: "76%" },
  { name: "React", width: "85%", percent: "85%" },
];

const Skills = () => {
  return (
    <div className='skills padd-15'>
      <div className='row'>
        {skillItems.map((skillItem) => (
          <div className='skill-item padd-15'>
            <h5>{skillItem.name}</h5>
            <div className='progress'>
              <div
                className='progress-in'
                style={{ width: skillItem.width }}
              ></div>
              <div className='skill-percent'>{skillItem.percent}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
