import React from "react";

const Navbar = () => {
  // const nav_links = [
  //   {
  //     path: "home",
  //     display: "Home",
  //   },
  //   {
  //     path: "about",
  //     display: "About",
  //   },
  //   {
  //     path: "projects",
  //     display: "Projects",
  //   },
  // ];
  return (
    <div>
      <div className='aside'>
        <div className='logo'>
          <a href=''>Portfolio</a>
        </div>
        <div className='nav-toggler'>
          <span></span>
        </div>
        <ul className='nav'>
          <li>
            <a href='home' className='active'>
              <i className='fa fa-home'></i> Home
            </a>
          </li>
          <li>
            <a href='about'>
              <i className='fa fa-user'></i> About
            </a>
          </li>
          <li>
            <a href='interests'>
              <i className='fa fa-list'></i> Interests
            </a>
          </li>
          <li>
            <a href='projects'>
              <i className='fa fa-briefcase'></i> Projects
            </a>
          </li>
          <li>
            <a href='recommendations'>
              <i className='fa fa-comments'></i> Recommendations
            </a>
          </li>
        </ul>
        <div className='copyright-text'>&copy; 2024 Stela Gadevska</div>
      </div>
    </div>
  );
};

export default Navbar;
