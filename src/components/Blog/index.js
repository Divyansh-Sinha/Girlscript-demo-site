import React from "react";
import "./style.css";
import image1 from "../../images/portfolio-blog.png";
import image2 from "../../images/Blog 2.jpg";

import { FaFacebookF } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

const Blog = props => {
  return (
    <section id="blogPage">
      <h1>Our Blogs</h1>
      <h4> Recent Blogs</h4>
      <div className="blogs">
        <div className="card">
          <img className="image" src={image1} alt="blog1"></img>
          <div className="socialMedia">
            <a href="#something" target="_blank">
              <FaFacebookF></FaFacebookF>
            </a>
            <a href="#something" target="_blank">
              <IoLogoGithub></IoLogoGithub>
            </a>
            <a href="#something" target="_blank">
              <FiTwitter></FiTwitter>
            </a>
            <a href="#something" target="_blank">
              <FiLinkedin></FiLinkedin>
            </a>
          </div>
          <p className="para">
            Do you feel overwhelmed or intimidated by just scrolling someone’s
            awesome, responsive portfolio website links and always wonder how to
            make one for yourself?
          </p>
          <button className="blogButton">Know More</button>
        </div>
        <div className="card">
          <img className="image" src={image2} alt="blog1"></img>
          <div className="socialMedia">
            <a href="#something" target="_blank">
              <FaFacebookF></FaFacebookF>
            </a>
            <a href="#something" target="_blank">
              <IoLogoGithub></IoLogoGithub>
            </a>
            <a href="#something" target="_blank">
              <FiTwitter></FiTwitter>
            </a>
            <a href="#something" target="_blank">
              <FiLinkedin></FiLinkedin>
            </a>
          </div>
          <p className="para">
            From a simple life of hunting and gathering to a time of
            ultra-modern life, life has evolved dramatically. Now, how did that
            happen? SIMPLE! The rapid unfolding of the phenomena - TECHNOLOGY!
          </p>
          <button className="blogButton">Know More</button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
