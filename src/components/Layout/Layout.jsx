import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Routers from "../../routers/Routers";
import Loader from "../Loader/Loader";

const Layout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request
    setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 second delay
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className='main-container'>
          <Navbar />
          <div className='mainContent'>
            <Routers />
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
