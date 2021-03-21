import React from "react";
import ParticlesBg from "particles-bg";
import logo from "../../images/logo_jamshed.jpg";
import "./style.css";

const Welcome = props => {
  return (
    <div id="top">
      <ParticlesBg className="backAnim" type="lines" bg={true} />
      <img className="welcome" src={logo} alt="welcome"></img>
    </div>
  );
};

export default Welcome;
