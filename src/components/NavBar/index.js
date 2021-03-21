import logo from "../../images/Jamshedpur_1.png";
import React from "react";
import "./style.css";

const NavBar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="navBar">
        <a className="logo" href="#top">
          <img id="logoImage" src={logo} alt="logo"></img>
        </a>

        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fa fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ml-auto">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#categories">
                Categories
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#blogPage">
                Blogs
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#team">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
