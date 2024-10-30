import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { gsap } from "gsap";
// import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./Assets/CSS/Pages/Landing.css";
// Components and Pages
import Work from "./Pages/Work";
import PageNotFound from "./Pages/PageNotFound";
import NewHome from "./Pages/NewHome";
import Project from "./Components/Project";
import Cursor from "./Components/Cursor";
import SpriteAnimation from "./Components/Sprite";

// Utilities
import { keepTheme } from "./utils/themes";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true); // Start as loading
  const [loadingProgress, setLoadingProgress] = useState(0); // New state for loading progress
  const main = useRef();

  useEffect(() => {
    // gsap.registerPlugin(ScrollSmoother);

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

    // ScrollSmoother.create({
    //   wrapper: main.current,
    //   content: "#smooth-content",
    //   smooth: 1.5,
    //   effects: true,
    // });

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
    <div className="App" ref={main}>
      {isLoading && (
        <div className="loadingContainer">
          <SpriteAnimation />
        </div>
      )}
      {!isLoading && (
        <>
          <Cursor position={position} />
          <Router>
            <div id="smooth-content">
              <Routes>
                <Route path="/" element={<NewHome />} />
                <Route path="/work" element={<Work />} />
                <Route path="/project/:index" element={<Project />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </div>
          </Router>
          {/* <Footer /> */}
        </>
      )}
    </div>
  );
}

export default App;
