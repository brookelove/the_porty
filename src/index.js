import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="cursorDot"></div>
    <div className="cursorOutline"></div>
    <App />
  </React.StrictMode>
);
