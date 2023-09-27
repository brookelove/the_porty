import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Loading from "./Pages/Loading";
import Work from "./Pages/Work";
import PageNotFound from "./Pages/PageNotFound";
import React, { useEffect, useState, useLayoutEffect } from "react";
import NewHome from "./Components/NewHome";

import { keepTheme } from "./utils/themes";
function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  console.log(mousePosition);

  useEffect(() => {
    const mouseMove = (e) => {
      console.log(e);
    };

    window.addEventListener("mousemove", mouseMove);
    keepTheme();
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
    // });
  }, []);
  return (
    <div className="App">
      <div className="cursorDot" id="cursor-dot"></div>
      <div className="cursorOutline" id="cursor-outline"></div>
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/home" element={<NewHome />} />
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
