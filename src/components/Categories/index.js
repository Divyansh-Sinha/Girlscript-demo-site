import React from "react";

import AnimatedBg from "react-animated-bg";
import "./style.css";

const Categories = props => {
  return (
    <AnimatedBg
      colors={["#737373", "#3E3E40", "#0C0C0D"]}
      duration={0.5}
      delay={2}
    >
      <section className="page-section" id="categories">
        <div class="category1">
          <i class="fa fa-laptop fa-4x"></i>
          <h3>GirlScript Summer Of Code</h3>
          <p>
            GirlScript Summer of Code is the 3 month long Open Source program
            during summers conducted by GirlScript Foundation,started in 2018 .
          </p>
        </div>

        <div class="category1">
          <i class="fa fa-graduation-cap fa-4x"></i>
          <h3>Outreach Scholarship</h3>
          <p>
            GirlScript Foundation are here with Education Outreach Scholarship
            under which first 1000 students will get Scholarship in 5 different
            courses.
          </p>
        </div>
        <div class="category1">
          <i class="fa fa-female fa-4x"></i>
          <h3>GirlScript India Summit</h3>
          <p>
            GIRLSCRIPT INDIA SUMMIT is a celebration of Women, Knowledge,
            Technology, and Innovation with 70+ Companies/Communities and
            Startups.
          </p>
        </div>
        <div class="category1">
          <i class="fa fa-code fa-4x"></i>
          <h3>Let's Py</h3>
          <p>
            A two day bootcamp for the people who are new to the language or
            brush up their skills
          </p>
        </div>
      </section>
    </AnimatedBg>
  );
};

export default Categories;
