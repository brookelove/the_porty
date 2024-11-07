import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";

const PageTransition = ({ children }) => {
  const location = useLocation(); // Use this to detect route changes
  const containerRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Don't run the transition while the page is loading
    if (isAnimating) return;

    setIsAnimating(true);

    // Set up animation using GSAP
    const timeline = gsap.timeline({ paused: true });

    // Fade out the current page
    timeline.to(containerRef.current, { opacity: 0, duration: 0.5 });

    timeline.to(containerRef.current, {
      opacity: 1,
      duration: 1,
    });

    // Start the animation when the route changes
    timeline.play();

    // Reset animation state after it's finished
    timeline.eventCallback("onComplete", () => {
      setIsAnimating(false);
    });
  }, [location]);

  return <div ref={containerRef}>{children}</div>;
};

export default PageTransition;
