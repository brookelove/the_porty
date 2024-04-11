import React, {useEffect, useState} from "react";
import resume from "../Assets/Images/SL_Resume_PDF.pdf"
import "../Assets/CSS/Components/Tools.css"
import toolVideo from "../Assets/Images/tools.mp4"

const Tools = () => {
    const [shuffledSkills, setShuffledSkills] = useState([]); 
    const skills = [
        { name: "Java", category: "language" },
        { name: "Python", category: "language" },
        { name: "JavaScript", category: "language" },
        { name: "HTML5", category: "language" },
        { name: "CSS3", category: "language" },
        { name: "Kotlin", category: "language" },
        { name: "JSON", category: "language" },
        { name: "React.js", category: "framework" },
        { name: "Node.js", category: "framework" },
        { name: "Express", category: "framework" },
        { name: "Sassy CSS", category: "framework" },
        { name: "Bootstrap", category: "framework" },
        { name: "JQuery", category: "framework" },
        { name: "Handlebars.js", category: "framework" },
        { name: "Apollo GraphQL", category: "framework" },
        { name: "Github", category: "version-control" },
        { name: "Gitlab", category: "version-control" },
        { name: "Nginx", category: "version-control" },
        { name: "Docker", category: "version-control" },
        { name: "Jest", category: "testing" },
        { name: "AWS", category: "cloud" },
        { name: "Figma", category: "design" },
        { name: "Canva", category: "design" },
        { name: "Notion", category: "productivity" }
    ];
    useEffect(() => {
        const shuffledData = skills.sort(() => Math.random() - 0.5);
        setShuffledSkills(shuffledData);
    }, []);

    return(
        <div className="toolsContainer">
            <div>
            <h1>SKILLS</h1>
            <section>
                {/* languages */}
                <video autoPlay muted loop id="shapes">
                    <source  className="toolVideo"src={toolVideo} type="video/mp4"/>
                </video>
                <ul className="pillContainer">
                {shuffledSkills.map((skill, index) => (
                            <li key={index} className={skill.category}>
                                {skill.name}
                            </li>
                        ))}
                </ul>
            </section>
            <a href={resume} target="_blank" rel="noreferrer">
            <button className="button">
                RESUME
            </button>
            </a>
            </div>
        </div>
    )
}

export default Tools;