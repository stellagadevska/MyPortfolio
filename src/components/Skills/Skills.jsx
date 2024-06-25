import React from "react";

const Skills = () => {
  return (
    <div className='skills padd-15'>
      <div className='row'>
        <div className='skill-item padd-15'>
          <h5>HTML</h5>
          <div className='progress'>
            <div className='progress-in' style={{ width: "95%" }}></div>
            <div className='skill-percent'>95%</div>
          </div>
        </div>

        <div className='skill-item padd-15'>
          <h5>CSS</h5>
          <div className='progress'>
            <div className='progress-in' style={{ width: "90%" }}></div>
            <div className='skill-percent'>90%</div>
          </div>
        </div>

        <div className='skill-item padd-15'>
          <h5>Javascript</h5>
          <div className='progress'>
            <div className='progress-in' style={{ width: "76%" }}></div>
            <div className='skill-percent'>76%</div>
          </div>
        </div>

        <div className='skill-item padd-15'>
          <h5>React</h5>
          <div className='progress'>
            <div className='progress-in' style={{ width: "85%" }}></div>
            <div className='skill-percent'>85%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
