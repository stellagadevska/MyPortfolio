import React from "react";

const NavbarLink = (props) => {
  return (
    <li>
      <a path={props.path}>
        <i className={props.iconClass}></i> {props.label}
      </a>
    </li>
  );
};

export default NavbarLink;
