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
            <div className="projectCard"
              key={index}
            >
              <img src={project.media} alt={project.name} />
              <div className="projectQuickView">
              <h2>{project.name}</h2>
              
              <ul>
                {project.languages.map((language, langIndex) => (
                  <li key={langIndex}>#{language}</li>
                ))}
              </ul>
              </div>
            </div>
          ))}
        </div>
        {/* <div> */}
        <button>
          <a>GITHUB</a>
        </button>
        {/* </div> */}
      </div>
    );
  };
  
  export default Work;