import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import path from "../Assets/Images/path.svg";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

const SvgAnimation = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    // Select the SVG path(s) to animate
    gsap.fromTo(
      svgRef.current.querySelectorAll("path"),
      { drawSVG: "0%" }, // Start from 0% of the path drawn
      {
        drawSVG: "100%", // Draw to 100% of the path
        scrollTrigger: {
          trigger: svgRef.current, // The element to watch
          start: "top bottom", // Start when the top of the SVG is at the bottom of the viewport
          end: "bottom top", // End when the bottom of the SVG reaches the top of the viewport
          scrub: true, // Smooth scroll-triggered animation
        },
        duration: 2,
        ease: "none",
      }
    );
  }, []);

  return (
    <div>
      <svg
        ref={svgRef}
        width="200"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
          stroke="black"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default SvgAnimation;
