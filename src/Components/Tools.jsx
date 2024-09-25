import React, { useEffect, useState } from "react";
import resume from "../Assets/Images/SL_Resume_PDF.pdf";
import "../Assets/CSS/Components/Tools.css";
import skills from "../utils/data/skills";

const wrapIndex = (index, length) => {
  return ((index % length) + length) % length; // Handles negative indices correctly
};

const Tools = () => {
  const [shuffledSkills, setShuffledSkills] = useState([]);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  useEffect(() => {
    const sortedData = skills.sort((a, b) => a.name.localeCompare(b.name));
    setShuffledSkills(sortedData);
  }, []);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.clientX);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;

    const distance = event.clientX - startX;
    if (distance > 100) {
      // Dragged right
      setCurrentSkillIndex((prevIndex) =>
        wrapIndex(prevIndex - 1, shuffledSkills.length)
      );
      setStartX(event.clientX);
    } else if (distance < -100) {
      // Dragged left
      setCurrentSkillIndex((prevIndex) =>
        wrapIndex(prevIndex + 1, shuffledSkills.length)
      );
      setStartX(event.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="toolsContainer"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div>
        <h1>SKILLS</h1>
        <div className="cards">
          {shuffledSkills.map((skill, index) => {
            const isCurrent =
              index === wrapIndex(currentSkillIndex, shuffledSkills.length);
            const isPrevious =
              index === wrapIndex(currentSkillIndex - 1, shuffledSkills.length);
            const isNext =
              index === wrapIndex(currentSkillIndex + 1, shuffledSkills.length);
            return (
              <div
                key={skill.name} // Ensure this is unique for each skill
                className={`skill-card ${
                  isCurrent
                    ? "current"
                    : isPrevious
                    ? "previous"
                    : isNext
                    ? "next"
                    : "hidden"
                }`}
              >
                <div className="iconCard">
                  <img alt={skill.name} />
                </div>
                {isCurrent && (
                  <section className="skill-information">
                    <h3>{skill.name}</h3>
                    <h5>{skill.type}</h5>
                    <p>{skill.information}</p>
                  </section>
                )}
              </div>
            );
          })}
        </div>
        <a href={resume} target="_blank" rel="noreferrer">
          <button className="">RESUME</button>
        </a>
      </div>
    </div>
  );
};

export default Tools;
