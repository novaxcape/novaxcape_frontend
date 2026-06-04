import React from "react";
import "../components/css/AboutUsHero.css";

const Aboutpagehero = () => {
  return (
    <section className="aboutHero">
      <div className="overlay"></div>

      <div className="aboutContent">
        <h1>About Us</h1>

        <p>
          We are Novaxcape—a platform dedicated to simplifying the discovery and
          booking of tourism centres across Nigeria, so every traveler can enjoy
          seamless and memorable experiences
        </p>
      </div>

      <div className="sliderDots">
        <span className="activeDot"></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
};

export default Aboutpagehero;
