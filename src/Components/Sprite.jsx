import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../Assets/CSS/Pages/Landing.css"; // Ensure this includes your CSS for the sprite

const SpriteAnimation = () => {
  const spriteRef = useRef();

  useEffect(() => {
    const spriteElement = spriteRef.current;
    const frameWidth = 100;
    const totalFrames = 5;
    const animationSpeed = 0.1;

    // const rowPositionY = -(targetRow - 1) * frameWidth;

    const animateSprite = () => {
      gsap.to(spriteElement, {
        backgroundPositionX: `-${frameWidth * (totalFrames - 1) + 5}px `,
        ease: "steps(" + totalFrames + ")",
        duration: totalFrames * animationSpeed,
        repeat: -1, // Loops the animation indefinitely
      });
    };

    animateSprite();
  }, []);

  return <div ref={spriteRef} className="sprite"></div>;
};

export default SpriteAnimation;
