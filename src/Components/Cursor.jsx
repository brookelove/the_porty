import React, { useEffect, useState } from "react";
import "../Assets/CSS/Pages/Landing.css";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    // Update the cursor position on mouse move
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="cursor"
      style={{ top: `${position.y}px`, left: `${position.x}px` }}
    />
  );
};

export default Cursor;
