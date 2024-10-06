import { useState, useEffect } from "react";
import bAndG from "../Assets/Images/hiMe.png";
import "../Assets/CSS/Pages/Home.css";
import About from "../Pages/About";
import star from "../Assets/Images/Star 6.svg";
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
            <img src={star} alt="Star" width="88" height="88" />
            <section className="card journeyCard shadow-twenty-two"></section>
            <img src={star} alt="Star" width="88" height="88" />
          </section>
        </main>
      </section>
      <div className="blurbContainer">
        {/* mini blurb about me */}
        <div className="photos">
          <img src={bAndG} className="bAndG"></img>
          {/* <img src={color} className="color"></img> */}
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
