import React, {useState} from "react";
// import Navbar from "../Components/Header";
import "../Assets/CSS/Pages/Work.css";
import projects  from "../utils/data/projects";


const Work = () => {
    return (
      <div className="workContainer parallax">
        <div className="tagContainer">{/* ... tags */}</div>
        <div
          className="projectContainer"
        >
          {projects.map((project, index) => (
            <div
              key={index}
            >
              <img src={project.media} alt={project.name} />
              <h2>{project.name}</h2>
              <ul>
                {project.languages.map((language) => (
                  <li key={language}>{language}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Work;