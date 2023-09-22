import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Loading from "./Pages/Loading";
import Work from "./Pages/Work";
import PageNotFound from "./Pages/PageNotFound";
import React, { useEffect, useState } from "react";
import NewHome from "./Components/NewHome";

import { keepTheme } from "./utils/themes";
function App() {
  useEffect(() => {
    keepTheme();
  });
  return (
    <div className="App">
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
