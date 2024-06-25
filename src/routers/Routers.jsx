import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Interests from "../pages/Interests";
import Projects from "../pages/Projects";
import Recommendations from "../pages/Recommendations";

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='home' />} />
      <Route path='home' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='interests' element={<Interests />} />
      <Route path='projects' element={<Projects />} />
      <Route path='recommendations' element={<Recommendations />} />
      {/* <Route path='shop/:id' element={<ProductDetails />} /> */}
    </Routes>
  );
};

export default Routers;
