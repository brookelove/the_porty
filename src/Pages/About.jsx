import React, { useEffect, useRef } from "react";
import { gsap } from "gsap/gsap-core";
import Tools from "../Components/Tools";
import "../Assets/CSS/Pages/About.css";
import star from "../Assets/Images/Star 6.svg";

const About = () => {
  return (
    <div className="aboutContainer">
      <main>
        <img src={star} alt="Star" width="88" height="88" />
        <div>
          <h1 className="inter-italic-thin">
            Almost 3 Years of Coding Experience
          </h1>
          <p className="inter-semibold">
            With a history of biology tattooing and veterinary science. My
            journey has lead me to hone different types of skills to become a
            better coder.
          </p>
        </div>
        <img src={star} alt="Star" width="88" height="88" />
      </main>
      <Tools />
    </div>
  );
};
export default About;
