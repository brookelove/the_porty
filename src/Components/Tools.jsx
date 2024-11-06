import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import "../Assets/CSS/Components/Tools.css";
import skills from "../utils/data/skills";
import Modal from "../Components/Modal";

const Tools = () => {
  const [shuffledSkills, setShuffledSkills] = useState([]);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const cardWidth = 240;
  const containerRef = useRef(null); // For referencing the carousel container

  // Modal management
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    const sortedData = skills.sort((a, b) => a.name.localeCompare(b.name));
    setShuffledSkills([...sortedData, ...sortedData]); // Duplicate skills for infinite scroll
  }, []);

  // Ensure the currentSkillIndex starts at the middle of the list after shuffle
  useEffect(() => {
    if (shuffledSkills.length > 0) {
      setCurrentSkillIndex(Math.floor(shuffledSkills.length / 2)); // Start at the middle of the list
    }
  }, [shuffledSkills]);

  // Using useLayoutEffect to set the initial position of the carousel after data is loaded
  useLayoutEffect(() => {
    if (shuffledSkills.length > 0) {
      animateSkillChange(); // Adjust carousel to show the correct card in the center initially
    }
  }, [shuffledSkills, currentSkillIndex]);

  // Wrapping the index for infinite scrolling
  const wrapIndex = (index, length) => {
    return (index + length) % length;
  };

  // Handle dragging start
  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.clientX);
    containerRef.current.style.cursor = "grabbing"; // Change cursor on drag
  };

  // Handle dragging move
  const handleMouseMove = (event) => {
    if (!isDragging || isAnimating) return;

    const distance = event.clientX - startX;
    if (Math.abs(distance) > 100) {
      setIsAnimating(true);

      if (distance > 0) {
        // Move to previous skill
        setCurrentSkillIndex((prevIndex) =>
          wrapIndex(prevIndex - 1, shuffledSkills.length)
        );
      } else {
        // Move to next skill
        setCurrentSkillIndex((prevIndex) =>
          wrapIndex(prevIndex + 1, shuffledSkills.length)
        );
      }

      setStartX(event.clientX);
      animateSkillChange();
    }
  };

  // Handle dragging end
  const handleMouseUp = () => {
    setIsDragging(false);
    containerRef.current.style.cursor = "grab"; // Reset cursor
  };

  // Ensure the active index is valid
  const activeIndex = wrapIndex(currentSkillIndex, shuffledSkills.length);
  const currentSkill = shuffledSkills[activeIndex];

  // Animate skill change
  const animateSkillChange = () => {
    const activeCard = document.querySelectorAll(".icon-card")[activeIndex];
    const skillInfo = document.querySelector(".skill-information");

    gsap.fromTo(
      ".skill-information",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        onComplete: () => setIsAnimating(false),
      }
    );

    gsap.to(".cards", {
      x: -(
        currentSkillIndex * cardWidth -
        window.innerWidth / 2 +
        cardWidth / 2 +
        35
      ),
      duration: 0.5,
      ease: "power2.out",
    });
  };

  if (shuffledSkills.length === 0) return <p>Loading skills...</p>;

  return (
    <div
      id="skills-section"
      className="tools-container"
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="d-center header">
        <h1 className="inria-serif-bold sub-heading">SKILLS</h1>
      </div>
      <section className="cards-container">
        <div className="cards">
          {shuffledSkills.map((skill, index) => {
            const isActive =
              wrapIndex(index, shuffledSkills.length) === activeIndex;
            return (
              <div
                className={`icon-card ${isActive ? "active-card" : ""}`}
                key={index}
              >
                <skill.icon size={150} color={skill.color} />
              </div>
            );
          })}
        </div>
        {currentSkill ? (
          <div className="skill-information">
            <h2 className="inter-bold">{currentSkill.name}</h2>
            <h4 className="inter-bold">{currentSkill.type}</h4>
            <p className="ibm-plex-mono-regular">{currentSkill.information}</p>
          </div>
        ) : (
          <p>Loading skills...</p>
        )}
      </section>
      <button className="resumeBtn" onClick={openModal}>
        RESUME
      </button>
      <Modal isVisible={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Tools;
