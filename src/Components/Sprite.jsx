import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "../Assets/CSS/Pages/Landing.css"; // Ensure this includes your CSS for the sprite

const SpriteAnimation = () => {
  const spriteRef = useRef();
  const [isAnimating, setIsAnimating] = useState(false);
  const frameWidth = 100; // Width of one frame
  const totalFrames = 5; // Total number of frames in the sprite sheet
  const animationSpeed = 0.1; // Speed of the animation

  useEffect(() => {
    const spriteElement = spriteRef.current;

    // Create the animation function
    const animateSprite = () => {
      if (isAnimating) {
        gsap.to(spriteElement, {
          backgroundPositionX: `-${frameWidth * (totalFrames - 1) + 5}px `,
          ease: "steps(" + totalFrames + ")",
          duration: totalFrames * animationSpeed,
          repeat: -1, // Loops the animation indefinitely
        });
      } else {
        // Stop animation immediately on mouse leave
        gsap.killTweensOf(spriteElement); // Stop all animations on this element
        spriteElement.style.backgroundPositionX = `0px`; // Set to the first frame immediately
      }
    };

    animateSprite();

    return () => {
      gsap.killTweensOf(spriteElement); // Cleanup on unmount
    };
  }, [isAnimating]); // Dependency on isAnimating

  return (
    <div
      ref={spriteRef}
      className="sprite"
      onMouseEnter={() => setIsAnimating(true)} // Start animation on hover
      onMouseLeave={() => setIsAnimating(false)} // Stop animation when hover ends
    ></div>
  );
};

export default SpriteAnimation;
