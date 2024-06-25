import React from "react";
import project1 from '../assets/images/projects/1.jpg'
import project2 from '../assets/images/projects/2.jpg'
import project3 from '../assets/images/projects/3.jpg'
import project4 from '../assets/images/projects/4.jpg'
import project5 from '../assets/images/projects/5.jpg'
import project6 from '../assets/images/projects/6.jpg'


const Projects = () => {
  return (
    <section class='projects section' id='projects'>
      <div class='container'>
        <div class='row'>
          <div class='section-title padd-15'>
            <h2>Projects</h2>
          </div>
        </div>

        <div class='row'>
          <div class='projects-filter padd-15'>
            <button type='button' class='active' data-filter='all'>
              All
            </button>
            <button type='button' data-filter='graphic-design'>
              Graphic Design
            </button>
            <button type='button' data-filter='drawing'>
              Drawing
            </button>
            <button type='button' data-filter='photography'>
              Photography
            </button>
          </div>
        </div>

        <div class='row'>
          {/* <!-- Projects Item --> */}
          <div class='projects-item padd-15' data-category='graphic-design'>
            <div class='projects-item-inner shadow-dark'>
              <div class='projects-img'>
                <img src={project1} alt='projects' />
              </div>

              <div class='projects-info'>
                <h4>Graphic Design</h4>
                <div class='icon'>
                  <i class='fa fa-search'></i>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Projects Item End--> */}

          {/* <!-- Projects Item --> */}
          <div class='projects-item padd-15' data-category='photography'>
            <div class='projects-item-inner shadow-dark'>
              <div class='projects-img'>
                <img src={project2} alt='projects' />
              </div>

              <div class='projects-info'>
                <h4>Photography</h4>
                <div class='icon'>
                  <i class='fa fa-search'></i>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Projects Item End--> */}

          {/* <!-- Projects Item --> */}
          <div class='projects-item padd-15' data-category='drawing'>
            <div class='projects-item-inner shadow-dark'>
              <div class='projects-img'>
                <img src={project3} alt='projects' />
              </div>

              <div class='projects-info'>
                <h4>Drawing</h4>
                <div class='icon'>
                  <i class='fa fa-search'></i>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Projects Item End--> */}

          {/* <!-- Projects Item --> */}
          <div class='projects-item padd-15' data-category='photography'>
            <div class='projects-item-inner shadow-dark'>
              <div class='projects-img'>
                <img src={project4} alt='projects' />
              </div>

              <div class='projects-info'>
                <h4>Photography</h4>
                <div class='icon'>
                  <i class='fa fa-search'></i>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Projects Item End--> */}

          {/* <!-- Projects Item --> */}
          <div class='projects-item padd-15' data-category='drawing'>
            <div class='projects-item-inner shadow-dark'>
              <div class='projects-img'>
                <img src={project5} alt='projects' />
              </div>

              <div class='projects-info'>
                <h4>Drawing</h4>
                <div class='icon'>
                  <i class='fa fa-search'></i>
                </div>
              </div>
            </div>
          </div>
          {/*{/* <!-- Projects Item End--> */}

          {/* <!-- Projects Item --> */}
          <div class='projects-item padd-15' data-category='graphic-design'>
            <div class='projects-item-inner shadow-dark'>
              <div class='projects-img'>
                <img src={project6} alt='projects' />
              </div>

              <div class='projects-info'>
                <h4>Graphic design</h4>
                <div class='icon'>
                  <i class='fa fa-search'></i>
                </div>
              </div>
            </div>
          </div>
          {/*{/* <!-- Projects Item End--> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
