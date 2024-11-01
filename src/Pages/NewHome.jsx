import { useState, useEffect } from "react";
import bAndG from "../Assets/Images/hiMe.png";
import "../Assets/CSS/Pages/Home.css";

// components
import About from "../Pages/About";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

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
      <Header />
      <section className="newHomeContainer">
        <main>
          <h1
            className="inria-serif-bold-italic"
            style={{
              transform: `scale(${Math.max(1 - scrollPosition / 300, 0)})`,
              opacity: Math.max(1 - scrollPosition / 300, 0),
            }}
          >
            Digital <em>Journey</em>
          </h1>
          <section className="journey-card-container" id="journey-section">
            <svg
              className="star"
              width="88"
              height="88"
              viewBox="0 0 99 99"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_i_9_2)">
                <path d="M49.5 0L62.8695 36.1305L99 49.5L62.8695 62.8695L49.5 99L36.1305 62.8695L0 49.5L36.1305 36.1305L49.5 0Z" />
              </g>
            </svg>
            <section className="card journeyCard shadow-twenty-two"></section>
            <svg
              className="star"
              width="88"
              height="88"
              viewBox="0 0 99 99"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_i_9_2)">
                <path d="M49.5 0L62.8695 36.1305L99 49.5L62.8695 62.8695L49.5 99L36.1305 62.8695L0 49.5L36.1305 36.1305L49.5 0Z" />
              </g>
            </svg>
          </section>
        </main>
      </section>
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
