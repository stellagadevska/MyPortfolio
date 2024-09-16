import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(() => {
    const savedLink = localStorage.getItem("activeLink");
    return savedLink ? savedLink : "home";
  });

  const navLinks = [
    {
      path: "home",
      iconClass: "fa fa-home",
      label: "Home",
    },
    {
      path: "about",
      iconClass: "fa fa-user",
      label: "About",
    },
    {
      path: "interests",
      iconClass: "fa fa-list",
      label: "Interests",
    },
    {
      path: "projects",
      iconClass: "fa fa-briefcase",
      label: "Projects",
    },
    {
      path: "recommendations",
      iconClass: "fa fa-comments",
      label: "Recommendations",
    },
  ];

  useEffect(() => {
    localStorage.setItem("activeLink", activeLink);
  }, [activeLink]);

  return (
    <div>
      <div className='aside'>
        <div className='logo'>
          <img src={logo} style={{ width: "35px", height: "auto" }} alt='logo'/>
          <a href='home'>Portfolio</a>
        </div>
        <div className='nav-toggler'>
          <span></span>
        </div>
        <ul className='nav'>
          {navLinks.map((navLink) => {
            return (
              <li>
                <a
                  href={`${navLink.path}`}
                  className={activeLink === navLink.path ? "active" : ""}
                  onClick={() => {
                    setActiveLink(navLink.path);
                  }}
                >
                  <i className={navLink.iconClass}></i> {navLink.label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className='copyright-text'>&copy; 2024 Stela Gadevska</div>
      </div>
    </div>
  );
};

export default Navbar;
