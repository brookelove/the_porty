import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { gsap } from "gsap";

const PageTransition = ({ children }) => {
  const frameRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [prevPath, setPrevPath] = useState(location.pathname);

  // Paths where we want the transition effect
  const transitionPaths = ["/", "/project"];

  // Check if the current path is one that should trigger the transition
  const shouldTransition = (path) => {
    return transitionPaths.some((transitionPath) =>
      path.startsWith(transitionPath)
    );
  };

  useEffect(() => {
    const playTransition = (targetPath) => {
      gsap
        .timeline()
        .set(frameRef.current, { x: "-100%" }) // Start off-screen
        .to(frameRef.current, { x: "0%", duration: 0.5, ease: "power4.inOut" })
        .to(frameRef.current, {
          x: "100%",
          duration: 1,
          ease: "power4.inOut",
          onComplete: () => {
            navigate(targetPath);
            setPrevPath(targetPath); // Update the previous path after transition completes
          },
        });
    };

    if (location.pathname !== prevPath && shouldTransition(location.pathname)) {
      playTransition(location.pathname);
    } else {
      setPrevPath(location.pathname); // Update the previous path if no transition
    }
  }, [location, navigate, prevPath]);

  return (
    <>
      {/* Transition overlay */}
      <div
        ref={frameRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          zIndex: 9999,
          transform: "translateX(-100%)",
        }}
      ></div>
      {children}
    </>
  );
};

export default PageTransition;
