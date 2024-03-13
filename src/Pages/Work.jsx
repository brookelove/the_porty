import React, {useState} from "react";
import "../Assets/CSS/Pages/Work.css";
import projects  from "../utils/data/projects";
import { Link } from "react-router-dom";


const Work = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  // creates an array of the category type
  const [category, setCategory] = useState([]);
  let tempArr = [];
  const getCategory = (type) => {
    switch (type) {
      case "school":
        tempArr =  projects.filter(project => project.category == "school") 
        setCategory(tempArr)
        break;
      case "personal":
        tempArr =  projects.filter(project => project.category == "personal") 
        setCategory(tempArr)
        break;
      case "professional":
          tempArr =  projects.filter(project => project.category == "professional") 
          setCategory(tempArr)
          break;
      default:
        setCategory(projects)
    }
  }
    return (
      <div className="workContainer parallax">
        <div className="d-even tags">
                <a onClick={() => getCategory("all")}>ALL</a>
                <a onClick={() => getCategory("school")}>SCHOOL</a>
                <a onClick={() => getCategory("personal")}>PERSONAL</a>
                <a onClick={() => getCategory("professional")}>PROFESSIONAL</a>
            </div>
        <div className="projectContainer">
          {(category.length ? category : projects).map((project, index) => (
             <Link to={`/project/${index}`} key={index}>
            <div className="projectCard"
              key={index}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <img className={`projectImg ${
                  hoveredProject === index ? "show" : ""
                }`}src={project.media} alt={project.name} />
              <video autoPlay loop muted>
                    <source src={project.video} type="video/mp4"/>
                </video>
              <footer className="d-between">
                <div>
                  <h5>.0{project.id}</h5>
                  <h4>{project.type}</h4>
                </div>
                <h2 className="cap">{project.name}</h2>
              </footer>
            </div>
            </Link>
          ))}
        </div>
        <button>
          <a>GITHUB</a>
        </button>
      </div>
    );
  };
  
  export default Work;