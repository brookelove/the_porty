import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import debounce from "lodash.debounce";

// Components and Pages
import Work from "./Pages/Work";
import PageNotFound from "./Pages/PageNotFound";
import NewHome from "./Pages/NewHome";
import Project from "./Components/Project";
import Cursor from "./Components/Cursor";

// Utilities
import { keepTheme } from "./utils/themes";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
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
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    setIsLoading(true);

    // Simulate loading process
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Add event listener for mouse move
    window.addEventListener("mousemove", handleMouseMove);

    keepTheme();

    // Clean up function
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="App" ref={main}>
      {isLoading && <div className="loadingContainer">Loading...</div>}
      {!isLoading && (
        <>
          <Cursor position={position} />
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
