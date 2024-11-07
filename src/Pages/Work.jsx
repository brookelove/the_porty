import React, { useState } from "react";
import "../Assets/CSS/Pages/Work.css";
import projects from "../utils/data/projects";
import { Link } from "react-router-dom";

// components
import Header from "../Components/Header";

const Work = () => {
  const [category, setCategory] = useState([]);
  let tempArr = [];

  return (
    <div className="workContainer">
      <Header />
      <h1>Index</h1>
      <div className="allProjects">
        <div className="projectsContainer">
          {projects.map((project, index) => (
            <Link to={`/project/${index}`} key={index}>
              <div className="projectCard" key={index}>
                <img
                  className="projectImg"
                  src={project.media}
                  alt={project.name}
                />
                <section>
                  <h5 className="inter-xbold-italic  index ">0{project.id}</h5>
                </section>
              </div>
            </Link>
          ))}
        </div>
        <button className="githubBtn">
          <a href="https://github.com/brookelove" target="noref">
            GITHUB
          </a>
        </button>
      </div>
    </div>
  );
};

export default Work;
