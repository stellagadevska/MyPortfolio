import React, { useEffect } from "react";
import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      const preloader = document.querySelector(".preloader");
      if (preloader) {
        preloader.classList.add("opacity-0");
        setTimeout(() => {
          preloader.style.display = "none";
          setIsLoaded(true);
        }, 1000);
      }
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      const intervalId = setInterval(() => {
        if (document.readyState === "complete") {
          handleLoad();
          clearInterval(intervalId);
        }
      }, 100);
      return () => clearInterval(intervalId);
    }
  }, []);

  return <div className='preloader'>Loading...</div>;
};

export default Preloader;

// const Preloader = () => {
//   window.addEventListener("load", function () {
//     document.querySelector(".preloader").classList.add("opacity-0");
//     setTimeout(function () {
//       document.querySelector(".preloader").style.display = "none";
//     }, 1000);
//   });

//   return (
//     <div class='preloader'>
//       <div class='loader'></div>
//     </div>
//   );
// };
