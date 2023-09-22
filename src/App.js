import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Landing from "./Pages/Landing";
import Work from "./Pages/Work";
import PageNotFound from "./Pages/PageNotFound";
import { useLocation } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/" element={<Landing />} /> */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/work" element={<Work />} /> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
