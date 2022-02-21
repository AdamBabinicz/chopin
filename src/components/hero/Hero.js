import React from "react";
import "./HeroStyles.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="content">
          <div className="over">
            <h1>Fryckowe&nbsp;</h1>
            <h2 className="blue"> lato</h2>
          </div>
          <h2>w&nbsp;Szafarnii</h2>
          <div>
            <button>Więcej</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
