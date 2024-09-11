import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import bAndG from "../Assets/Images/hiMe.png";
import color from "../Assets/Images/heartme.png";
import "../Assets/CSS/Pages/Home.css";
import About from "../Pages/About";

const NewHome = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div id="smooth-wrapper">
      <section className="newHomeContainer">
        <main>
          <h1
            style={{
              transform: `scale(${Math.max(1 - scrollPosition / 300, 0)})`,
              opacity: Math.max(1 - scrollPosition / 300, 0),
            }}
          >
            Digital <em>Journey</em>
          </h1>
          <section className="card journeyCard"></section>
        </main>
      </section>
      <div className="blurbContainer">
        {/* mini blurb about me */}
        <div className="photos">
          <img src={bAndG} className="bAndG"></img>
          <img src={color} className="color"></img>
        </div>
        <section className="card aboutMeBlurb">
          <p>Hi I'm Brooke,</p>
          <br></br>
          <p>
            A passionate <b>Full-Stack Software Engineer</b> based in Georgia. I
            am currently working at a startup called GRWNDED, just graduated
            with an <b>MS in Software Development</b>, and a <b>TA</b> for a
            Software Development bootcamp. I try to create memorable unique
            projects that fun and user friendly.
          </p>
        </section>
      </div>
      <About />
    </div>
  );
};

export default NewHome;
