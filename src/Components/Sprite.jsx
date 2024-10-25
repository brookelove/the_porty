import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../Assets/CSS/Pages/Landing.css"; // Ensure this includes your CSS for the sprite

const SpriteAnimation = () => {
  const spriteRef = useRef();

  useEffect(() => {
    const spriteElement = spriteRef.current;
    const animateSprite = () => {};
    animateSprite();
  }, []);

  return <div ref={spriteRef} className="sprite"></div>;
};

export default SpriteAnimation;
