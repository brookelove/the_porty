import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Components and Pages
import "./Assets/CSS/Pages/Landing.css";
import Work from "./Pages/Work";
import PageNotFound from "./Pages/PageNotFound";
import NewHome from "./Pages/NewHome";
import Project from "./Components/Project";
import Cursor from "./Components/Cursor";
import PageTransition from "./Components/PageTransition";

// Utilities
import { keepTheme } from "./utils/themes";

gsap.registerPlugin(ScrollSmoother, useGSAP, ScrollTrigger);

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true); // Start as loading
  const [loadingProgress, setLoadingProgress] = useState(0); // New state for loading progress
  const main = useRef();
  const smoother = useRef();
  const panelsRef = useRef({
    left: null,
    right: null,
  });

  useEffect(() => {
    if (!isLoading && panelsRef.current.left && panelsRef.current.right) {
      gsap.to([panelsRef.current.left, panelsRef.current.right], {
        x: (i) => (i === 0 ? "-100%" : "100%"),
        duration: 1.2,
        ease: "power3.inOut",
      });
    }
  }, [isLoading]);

  smoother.current = ScrollSmoother.create({
    wrapper: "#smooth-wrapper", // Define the wrapper
    content: "#smooth-content",
    smooth: 2, // seconds it takes to "catch up" to native scroll position
    effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    // Simulate loading process
    const loadingInterval = setInterval(() => {
      setLoadingProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(loadingInterval);
          setIsLoading(false); // Stop loading when 100%
          return 100; // Ensure it does not exceed 100
        }
        return prevProgress + 1; // Increment progress
      });
    }, 20); // Adjust the speed as necessary

    // Add event listener for mouse move
    window.addEventListener("mousemove", handleMouseMove);

    keepTheme();
    // Clean up function
    return () => {
      clearInterval(loadingInterval);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div id="smooth-wrapper" className="App" ref={main}>
      {isLoading && (
        <div className="loadingContainer">
          <h1>H</h1>
          <h1>J</h1>
        </div>
      )}
      {!isLoading && (
        <>
          <Cursor position={position} />
          <div id="smooth-content">
            <Router>
              {/* page transition only should happen on home and projects  */}
              <PageTransition>
                <Routes>
                  <Route path="/" element={<NewHome />} />
                  <Route path="/work" element={<Work />} />
                  <Route path="/project/:index" element={<Project />} />
                  <Route path="*" element={<PageNotFound />} />
                </Routes>
              </PageTransition>
            </Router>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
