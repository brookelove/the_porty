import React, { useEffect, useRef } from "react";
import { gsap } from "gsap/gsap-core";
import Tools from "../Components/Tools";
import "../Assets/CSS/Pages/About.css";
import star from "../Assets/Images/Star 6.svg";

const About = () => {
  const stickyRef = useRef(null);
  useEffect(() => {
    const stickyDiv = stickyRef.current;
    console.log(stickyRef);
    const transform = (section) => {
      const offsetTop = section.parentElement.offsetTop; //gets the parent container
      console.log(offsetTop); //2485
      const scrollSection = section.querySelector(".scroll_section");
      console.log(scrollSection);
      let percentage =
        ((window.scrollY - offsetTop) / window.innerHeight) * 100; //percentage of amount tha we have scrolled on the screen
      scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
    };

    window.addEventListener("scroll", (e) => transform(stickyDiv));
  }, []);

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
      <section className="processSection">
        <h1>PROCESS</h1>
        <div className="sticky_parent">
          <div className="sticky" ref={stickyRef}>
            <div className="scroll_section">
              <div className="item">
                <h5>.01</h5>
                <h4>INFO</h4>
                <p>
                  Gather information for upcoming projects. This includes
                  conducting thorough research, looking at other websites to
                  figure out what works and doesn't. Figureing out the the next
                  steps befor edevising a plan. Determine what tasks need to be
                  completed and what has already been accomplished.
                </p>
              </div>
              <div className="item">
                <h5>.02</h5>
                <h4>PLAN</h4>
                <p>
                  Map out a bluepront by creating detailed wireframes to
                  visualize project layout and functionality. Develop a
                  comprehensive strategy delineating project requirements,
                  timelines, and stakeholders, ensuring a clear roadmap for
                  seamless execution..{" "}
                </p>
              </div>
              <div className="item">
                <h5>.03</h5>
                <h4>PLAY</h4>
                <p>
                  This is where we code! Here, I bring ideas to life through
                  proficient coding practices, weaving intricate designs and
                  functionalities into the fabric of our projects.{" "}
                </p>
              </div>
              <div className="item">
                <h5>.04</h5>
                <h4>DELIVER</h4>
                <p>
                  Seal the deal by delivering polished, high-quality projects
                  that exceed expectations. This stage involves rigorous
                  testing, refinement, and ultimately, unveiling the final
                  product to clients or stakeholders, marking the culmination of
                  our efforts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
