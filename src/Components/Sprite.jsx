import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "../Assets/CSS/Pages/Landing.css";

const SpriteAnimation = () => {
  const spriteRef = useRef();
  const [isAnimating, setIsAnimating] = useState(false);
  const frameWidth = 100; // Width of one frame
  const totalFrames = 5;
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
        gsap.killTweensOf(spriteElement);
        spriteElement.style.backgroundPositionX = `0px`;
      }
    };

    animateSprite();

    return () => {
      gsap.killTweensOf(spriteElement); // Cleanup
    };
  }, [isAnimating]);

  return (
    <div
      ref={spriteRef}
      className="sprite"
      onMouseEnter={() => setIsAnimating(true)}
      onMouseLeave={() => setIsAnimating(false)}
    ></div>
  );
};

export default SpriteAnimation;
