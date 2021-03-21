import React from "react";
import image1 from "../../Core members/Subham Choudhary.jpeg";
import image2 from "../../Core members/Shrayansh Jain.jpeg";
import image3 from "../../Core members/Thejasree Kalri.jpeg";
import image4 from "../../Core members/Antalina Sarkar.jpeg";
import image5 from "../../Core members/Aditya Anand.jpeg";
import "./style.css";

const Team = props => {
  return (
    <section className="page-section" id="team">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center" id="teamHeading">
            <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="team-member">
              <h3>Subham Choudhary</h3>
              <img className="image1" src={image1} alt="Subham" />

              <p className="role">Chapter Head</p>

              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="team-member">
              <h3>Shrayansh Jain</h3>
              <img className="image1" src={image2} alt="shrayansh" />

              <p className="role">Management</p>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="team-member">
              <h3>Thejasree Kalri</h3>
              <img className="image1" src={image3} alt="Subham" />

              <p className="role">Web Developer</p>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="team-member">
              <h3>Antalina Sarkar</h3>
              <img className="image1" src={image4} alt="Subham" />

              <p className="role">Content Writer</p>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="team-member">
              <h3>Aditya Anand</h3>
              <img className="image1" src={image5} alt="Subham" />

              <p className="role">Content Writer</p>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
