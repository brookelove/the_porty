import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import bAndG from "../Assets/Images/hiMe.png";
import "../Assets/CSS/Pages/Home.css";
import { ReactComponent as PathSVG } from "../Assets/Images/path.svg";

// components
import About from "../Pages/About";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

//register gsap
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

const NewHome = () => {
  const videoUrl = "https://photos.app.goo.gl/DQJ87jeFoVccKLsS8";
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDrawing, setIsDrawing] = useState(false);
  const svgRef = useRef(null);
  useEffect(() => {
    const paths = svgRef.current?.querySelectorAll("path");

    // Animate the SVG path to draw from 0% to 100% over 2 seconds
    if (paths) {
      gsap.fromTo(
        paths,
        { drawSVG: "0%" },
        {
          drawSVG: "100%", // The SVG path will be drawn completely
          duration: 2, // Duration of the animation (2 seconds)
          ease: "power1.out", // Easing for smooth animation
        }
      );
    }
  }, []);

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
      <Header />
      <section className="newHomeContainer">
        <main>
          <h1 className="">Coding Jack</h1>
        </main>
      </section>
      <div className="svg-background">
        <PathSVG ref={svgRef} className="animated-svg" />
      </div>
      <div className="blurbContainer">
        <div className="photos">
          <img src={bAndG} className="bAndG"></img>
        </div>
        <div></div>
        <section
          className="card aboutMeBlurb inter-light shadow-twenty-two"
          id="about-section"
        >
          <p>Hi I'm Brooke,</p>
          <p>
            A passionate{" "}
            <b className="inter-medium">Full-Stack Software Engineer</b> based
            in Georgia. I am currently working at a startup called GRWNDED, just
            graduated with an{" "}
            <b className="inter-medium">MS in Software Development</b>, and a{" "}
            <b className="inter-medium">TA</b> for a Software Development
            Bootcamp. I try to create memorable unique projects that fun and
            user friendly.
          </p>
        </section>
      </div>

      <About />
      <Footer />
    </div>
  );
};

export default NewHome;
