import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import resume from "../Assets/Images/SL_Resume_PDF.pdf";
import "../Assets/CSS/Components/Tools.css";
import skills from "../utils/data/skills";

const Tools = () => {
  const [shuffledSkills, setShuffledSkills] = useState([]);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const sortedData = skills.sort((a, b) => a.name.localeCompare(b.name));
    setShuffledSkills([...sortedData, ...sortedData]); // Duplicate skills for infinite scroll
  }, []);

  const wrapIndex = (index, length) => {
    return (index + length) % length;
  };

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.clientX);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;

    const distance = event.clientX - startX;

    // Check if the drag distance exceeds threshold
    if (Math.abs(distance) > 100 && !isAnimating) {
      setIsAnimating(true); // Start animation

      if (distance > 0) {
        // Move to the previous skill
        setCurrentSkillIndex((prevIndex) =>
          wrapIndex(prevIndex - 1, shuffledSkills.length)
        );
      } else {
        // Move to the next skill
        setCurrentSkillIndex((prevIndex) =>
          wrapIndex(prevIndex + 1, shuffledSkills.length)
        );
      }

      setStartX(event.clientX);
      animateSkillChange();
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const animateSkillChange = () => {
    gsap.fromTo(
      ".skill-information", // Target the skill information
      { opacity: 0 }, // Start state
      {
        opacity: 1,
        duration: 0.5,
        onComplete: () => setIsAnimating(false), // Reset animating state when complete
      }
    );
  };

  // Only display the current skill
  const currentSkill = shuffledSkills[currentSkillIndex];

  return (
    <div
      className="tools-container"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <h1 className="inria-serif-bold">SKILLS</h1>
      {/* Creation of the current skill card */}
      <section className="cards-container">
        <div className="cards">
          {shuffledSkills.map((skill, index) => {
            return (
              <div className="icon-card" key={index}>
                <img alt={skill.name} />
              </div>
            );
          })}
        </div>
        {shuffledSkills.length > 0 && currentSkill ? ( // Ensure skills exist before rendering
          <div className="skill-information">
            <h2 className="inter-bold">{currentSkill.name}</h2>
            <h4 className="inter-bold">{currentSkill.type}</h4>
            <p className="ibm-plex-mono-regular">{currentSkill.information}</p>
          </div>
        ) : (
          <p>Loading skills...</p> // Fallback loading message
        )}
      </section>
      <a
        href={resume}
        target="_blank"
        rel="noreferrer"
        className="resume-container"
      >
        <button>RESUME</button>
      </a>
    </div>
  );
};

export default Tools;
