import React from "react";
import Navbar from "../Navbar/Navbar";
import Routers from "../../routers/Routers";

const Layout = () => {
  return (
    <div className='main-container'>
      <Navbar />
      <div className='mainContent'>
        <Routers />
      </div>
    </div>
  );
};

export default Layout;
