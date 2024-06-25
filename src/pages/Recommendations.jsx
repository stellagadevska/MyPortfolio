import React from "react";

const Recommendations = () => {
  return (
    <section class='recommendations section padd-15' id='recommendations'>
      <div class='container'>
        <div class='row padd-15'>
          <div class='section-title padd-15'>
            <h2>Recommendations</h2>
            <div id='wrapper padd-15'>
              <script
                src='https://static.elfsight.com/platform/platform.js'
                data-use-service-core
                defer
              ></script>
              <div
                class='elfsight-app-79fc1fbe-1401-496a-a284-7095b78b8956'
                data-elfsight-app-lazy
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
