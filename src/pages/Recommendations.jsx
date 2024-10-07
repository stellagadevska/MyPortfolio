import React from "react";
import RecommendWidget from "../components/RecommendWidget";

const Recommendations = () => {
  return (
    <section class='recommendations active section padd-15' id='recommendations'>
      <div class='container'>
        <div class='row padd-15'>
          <div class='section-title padd-15'>
            <h2>Recommendations</h2>
            <div id='wrapper padd-15'>
              <RecommendWidget />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
