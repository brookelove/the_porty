import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Loading from "./Pages/Loading";
import Work from "./Pages/Work";
import debounce from "lodash.debounce";
import PageNotFound from "./Pages/PageNotFound";
import React, { useEffect, useState, useLayoutEffect } from "react";
import NewHome from "./Components/NewHome";

import { keepTheme } from "./utils/themes";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [outlinePosition, setOutlinePosition] = useState({
    x: 0,
    y: 0,
  });

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

    window.addEventListener("mousemove", mouseMove);
    keepTheme();
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  return (
    <div className="App">
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
      <Header />
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
      <Contact />
    </div>
  );
}

export default App;
