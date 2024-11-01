import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Tools from "../Components/Tools";
import "../Assets/CSS/Pages/About.css";
import star from "../Assets/Images/Star 6.svg";

const About = () => {
  const starRef1 = useRef();
  const starRef2 = useRef();
  let scrollTimeout = useRef(null);
  const isSpinning = useRef(false);

  useEffect(() => {
    // const starEl = starRef.current;
    const handleSpin = (e) => {
      e.preventDefault();
      const delta = e.deltaY;
      const rotationAmount = delta > 0 ? delta * 0.2 : delta * -0.2;
      gsap.to([starRef1.current, starRef2.current], {
        rotation: `+=${rotationAmount}`,
        duration: 0.3,
        ease: "power1.out",
      });
      clearTimeout(scrollTimeout.current); //removes the multiple spins

      scrollTimeout.current = setTimeout(() => {
        if (!isSpinning.current) {
          isSpinning.current = true; // Set the spinning flag to true
          gsap.to([starRef1.current, starRef2.current], {
            rotation: `+=270`, // Spin one full rotation
            duration: 1, // Duration for the spin
            ease: "power1.out",
            onComplete: () => {
              isSpinning.current = false; // Reset the spinning flag
            },
          });
        }
      }, 500); // Delay for 500ms after scrolling stops
    };
    window.addEventListener("wheel", handleSpin);
    return () => {
      window.removeEventListener("wheel", handleSpin);
      clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <div className="aboutContainer">
      <main>
        <div ref={starRef1}>
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
        </div>
        <div>
          <h1 className="inter-italic-thin">
            Almost 3 Years of Coding Experience
          </h1>
          <p className="inter-semibold">
            With a history of biology, tattooing, and veterinary science. My
            journey has lead me to hone different types of skills to become a
            better coder.
          </p>
        </div>
        <div ref={starRef2}>
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
        </div>
      </main>
      <Tools />
    </div>
  );
};
export default About;
