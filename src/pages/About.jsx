import React from "react";
import Skills from "../components/Skills/Skills";
import Education from "../components/Education/Education";
import PersonalInfo from "../components/PersonalInfo/PersonalInfo";

const About = () => {
  return (
    <section className='about active section' id='about'>
      <div className='container'>
        <div className='row'>
          <div className='section-title padd-15'>
            <h2>About Me</h2>
          </div>
        </div>

        <div className='row'>
          <div className='about-content padd-15'>
            <div className='row'>
              <div className='about-text padd-15'>
                <h3>
                  I am Stela Gadevska and I am a 
                  <span> FrontEnd Developer</span>
                </h3>
                <p>
                  Software Developer, specializing in front-end web development
                  with React.js since March, 2021. A graduated Bachelor of
                  Business Informatics. Although I only have practical
                  experience with front-end technologies, I have also taken
                  courses in Java. Currently I am employed by a company that
                  specializes in software and services for communications, media
                  and financial services providers and digital enterprises. I
                  believe my organizational skills and adaptability, along with
                  being a team player are two of my biggest strengths.{" "}
                </p>
              </div>
            </div>

            <div className='row'>
              <PersonalInfo />
              <Skills />
            </div>

            <Education />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
