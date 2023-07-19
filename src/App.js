import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Landing from "./Pages/Landing";
import Work from "./Pages/Work";
import PageNotFound from "./Pages/PageNotFound";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
