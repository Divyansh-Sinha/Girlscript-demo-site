import React from "react";
import "./style.css";

const About = props => {
  return (
    <section className="page-section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">About Us</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="timeline">
              <li>
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    src="img/about/1.jpg"
                    alt=""
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="daHead">Our Humble Beginnings</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="aboutPara">
                      GirlScript Foundation is a section-8 NON PROFIT company
                      registered under the government of India on 2nd June 2017.
                      GirlScript started as a project has been selected by
                      Mozilla under Open Leadership program out of 51
                      open-source projects worldwide. GirlScript hosts many tech
                      events and coding competition to help you get started and
                      learn computer programming.
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    src="img/about/2.jpg"
                    alt=""
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading"></div>
                  <div className="timeline-body">
                    <p className="aboutPara">
                      No matter whether you are a beginner or an experienced
                      individual, GirlScript is open for all. GirlScript's
                      mission is to encourage individuals to learn how to code
                      and stand out among the crowd. Along with learning,
                      GirlScript aims to create opportunities and growth via
                      technical education among various groups of people.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    src="img/about/3.jpg"
                    alt=""
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="daHead">Our Goals:</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="aboutPara">
                      Encourage people to learn to program and make them capable
                      of writing a simple computer program to building a complex
                      system. Empower people by providing an opportunity to
                      showcase their technical skills. Provide a platform to
                      individuals by hosting coding competition and tech events.
                      Share technical knowledge and content for helping
                      individuals in the programming world.
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    src="img/about/4.jpg"
                    alt=""
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="daHead">GirlScript Jamshedpur</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="aboutPara">
                      It is India's fastest growing tech community at the heart
                      of Jharkhand. We believe in uplifting beginners in tech
                      while promoting diversity.
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <h3>
                    Be Part
                    <br />
                    Of Our
                    <br />
                    Story!
                  </h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
