import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import debounce from "lodash.debounce";

// Components and Pages
import Loading from "./Pages/Loading";
import Work from "./Pages/Work";
import PageNotFound from "./Pages/PageNotFound";
import NewHome from "./Pages/NewHome";
import Project from "./Components/Project";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

// Utilities
import { keepTheme } from "./utils/themes";

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [outlinePosition, setOutlinePosition] = useState({
    x: 0,
    y: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const main = useRef();

  useEffect(() => {
    let lagOutline;
    const mouseMove = debounce((e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
      clearTimeout(lagOutline);
      lagOutline = setTimeout(() => {
        setOutlinePosition({
          x: e.clientX,
          y: e.clientY,
        });
      }, 15);
    });

    setIsLoading(true);

    // Simulate loading process
    const timeout = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 2 seconds (simulated loading time)
    }, 2000);

    // Add event listener for mouse move
    window.addEventListener("mousemove", mouseMove);
    keepTheme();
    // Clean up function
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div className="App" ref={main}>
      {isLoading && <div className="loadingContainer">Loading...</div>}
      {!isLoading && (
        <>
          <div
            className="cursorDot"
            id="cursor-dot"
            style={{
              top: `${mousePosition.y}px`,
              left: `${mousePosition.x}px`,
            }}
          ></div>
          <div
            className="cursorOutline"
            id="cursor-outline"
            style={{
              top: `${outlinePosition.y}px`,
              left: `${outlinePosition.x}px`,
            }}
          ></div>
          {/* <Header /> */}
          <Router>
            <div>
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
