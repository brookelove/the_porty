import React, {useState} from "react";
import "../Assets/CSS/Pages/Work.css";
import projects  from "../utils/data/projects";
import { Link } from "react-router-dom";


const Work = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
    return (
      <div className="workContainer parallax">
        <div className="d-even tags">
                <a>ALL</a>
                <a><p>🎓</p> SCHOOL</a>
                <a>PERSONAL</a>
                <a><p>💼</p> WORK</a>
            </div>
        <div
          className="projectContainer"
        >
          {projects.map((project, index) => (
             <Link to={`/project/${index}`} key={index}>
            <div className="projectCard"
              key={index}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <img src={project.media} alt={project.name} />
              <div className={
                hoveredProject === index ? "projectQuickView show" : "projectQuickView"
              }>
              <h2>{project.name}</h2>
              
              <ul>
                {project.languages.map((language, langIndex) => (
                  <li key={langIndex}>#{language}</li>
                ))}
              </ul>
              </div>
            </div>
            </Link>
          ))}
        </div>
        <button>
          <a>GITHUB</a>
        </button>
        {/* </div> */}
      </div>
    );
  };
  
  export default Work;