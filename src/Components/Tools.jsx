// import React, { useEffect, useState } from "react";
// import { gsap } from "gsap";
// import resume from "../Assets/Images/SL_Resume_PDF.pdf";
// import "../Assets/CSS/Components/Tools.css";
// import skills from "../utils/data/skills";

// const Tools = () => {
//   const [shuffledSkills, setShuffledSkills] = useState([]);
//   const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const cardWidth = 240;

//   useEffect(() => {
//     const sortedData = skills.sort((a, b) => a.name.localeCompare(b.name));
//     setShuffledSkills([...sortedData, ...sortedData]); // Duplicate skills for infinite scroll
//   }, []);

//   const wrapIndex = (index, length) => {
//     return (index + length) % length;
//   };

//   const handleMouseDown = (event) => {
//     setIsDragging(true);
//     setStartX(event.clientX);
//   };

//   const handleMouseMove = (event) => {
//     if (!isDragging) return;

//     const distance = event.clientX - startX;

//     // Check if the drag distance exceeds threshold
//     if (Math.abs(distance) > 100 && !isAnimating) {
//       setIsAnimating(true); // Start animation

//       if (distance > 0) {
//         // Move to the previous skill
//         setCurrentSkillIndex((prevIndex) =>
//           wrapIndex(prevIndex - 1, shuffledSkills.length)
//         );
//       } else {
//         // Move to the next skill
//         setCurrentSkillIndex((prevIndex) =>
//           wrapIndex(prevIndex + 1, shuffledSkills.length)
//         );
//       }

//       setStartX(event.clientX);
//       animateSkillChange();
//     }
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   const animateSkillChange = () => {
//     // Animate skill information change
//     gsap.fromTo(
//       ".skill-information",
//       { opacity: 0 },
//       {
//         opacity: 1,
//         duration: 0.5,
//         onComplete: () => setIsAnimating(false), // Reset animating state when complete
//       }
//     );

//     // Animate cards to align the current card to the center
//     gsap.to(".cards", {
//       x: -(
//         currentSkillIndex * cardWidth -
//         window.innerWidth / 2 +
//         cardWidth / 2
//       ), // Adjust the offset according to card width + margin
//       duration: 0.5,
//       ease: "power2.out",
//     });
//   };

//   const activeIndex = wrapIndex(currentSkillIndex, skills.length);
//   const currentSkill = shuffledSkills[(currentSkillIndex + 1) % skills.length];

//   return (
//     <div
//       className="tools-container"
//       onMouseDown={handleMouseDown}
//       onMouseMove={handleMouseMove}
//       onMouseUp={handleMouseUp}
//       onMouseLeave={handleMouseUp}
//     >
//       <h1 className="inria-serif-bold">SKILLS</h1>
//       <section className="cards-container">
//         <div className="cards">
//           {shuffledSkills.map((skill, index) => {
//             const isActive = wrapIndex(index, skills.length) === activeIndex;
//             return (
//               <div
//                 className={`icon-card ${isActive ? "active-card" : ""}`}
//                 key={index}
//               >
//                 <img alt={skill.name} />
//               </div>
//             );
//           })}
//         </div>
//         {shuffledSkills.length > 0 && currentSkill ? (
//           <div className="skill-information">
//             <h2 className="inter-bold">{currentSkill.name}</h2>
//             <h4 className="inter-bold">{currentSkill.type}</h4>
//             <p className="ibm-plex-mono-regular">{currentSkill.information}</p>
//           </div>
//         ) : (
//           <p>Loading skills...</p>
//         )}
//       </section>
//       <a
//         href={resume}
//         target="_blank"
//         rel="noreferrer"
//         className="resume-container"
//       >
//         <button>RESUME</button>
//       </a>
//     </div>
//   );
// };

// export default Tools;
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import resume from "../Assets/Images/SL_Resume_PDF.pdf";
import "../Assets/CSS/Components/Tools.css";
import skills from "../utils/data/skills";

const Tools = () => {
  const [shuffledSkills, setShuffledSkills] = useState([]);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0); // Default to 0 (can change to target specific skill)
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const cardWidth = 240;

  useEffect(() => {
    const sortedData = skills.sort((a, b) => a.name.localeCompare(b.name));
    setShuffledSkills([...sortedData, ...sortedData]); // Duplicate skills for infinite scroll

    // Ensure the initial card (CSS or any) is centered after mount
    gsap.to(".cards", {
      x: -(
        currentSkillIndex * cardWidth -
        window.innerWidth / 2 +
        cardWidth / 2
      ), // Adjust position to center the card
      duration: 0.5,
      ease: "power2.out",
    });
  }, [currentSkillIndex]); // Run on index or component mount

  const wrapIndex = (index, length) => {
    return (index + length) % length;
  };

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.clientX);
  };

  const handleMouseMove = (event) => {
    if (!isDragging || isAnimating) return;

    const distance = event.clientX - startX;

    if (Math.abs(distance) > 100) {
      setIsAnimating(true);

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
      ".skill-information",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        onComplete: () => setIsAnimating(false),
      }
    );

    // Animate cards to align the current card to the center
    gsap.to(".cards", {
      x: -(
        currentSkillIndex * cardWidth -
        window.innerWidth / 2 +
        cardWidth / 2
      ),
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const activeIndex = wrapIndex(currentSkillIndex, skills.length);
  const currentSkill = shuffledSkills[activeIndex];

  return (
    <div
      className="tools-container"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <h1 className="inria-serif-bold">SKILLS</h1>
      <section className="cards-container">
        <div className="cards">
          {shuffledSkills.map((skill, index) => {
            const isActive = wrapIndex(index, skills.length) === activeIndex;
            return (
              <div
                className={`icon-card ${isActive ? "active-card" : ""}`}
                key={index}
              >
                <img alt={skill.name} />
              </div>
            );
          })}
        </div>
        {shuffledSkills.length > 0 && currentSkill ? (
          <div className="skill-information">
            <h2 className="inter-bold">{currentSkill.name}</h2>
            <h4 className="inter-bold">{currentSkill.type}</h4>
            <p className="ibm-plex-mono-regular">{currentSkill.information}</p>
          </div>
        ) : (
          <p>Loading skills...</p>
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
