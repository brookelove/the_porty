import { useParams } from "react-router";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Assets/CSS/Components/Project.css";
import projects from "../utils/data/projects";

const Project = () => {
  const { index } = useParams();
  console.log(index);
  const projectIndex = parseInt(index, 10);
  const { name, type, languages, media, blurb, submedia, video, links } =
    projects[projectIndex];
  const filteredSubMedia = submedia.filter(
    (item, index) => index !== 2 && item !== "not working"
  );
  useEffect(() => {
    // Create the ResizeObserver
    const resizeObserver = new ResizeObserver(() => {
      // Your observer logic
    });

    // Start observing
    resizeObserver.observe(document.querySelector(".projectVideo"));

    // Cleanup observer when component unmounts
    return () => {
      resizeObserver.disconnect(); // Disconnect the observer when it's not needed anymore
    };
  }, []);
  return (
    <div className="projectContainer">
      <Link to="/work" className="back-to-work">
        GO BACK
      </Link>
      <section>
        <header>
          <section className="header">
            <h1>{name}</h1>
            <h5>| {type}</h5>
          </section>
          <h6>Languages</h6>
          <ul className="languages">
            {languages.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        </header>
        <video autoPlay loop muted className="projectVideo">
          <source src={video} type="video/mp4" />
        </video>
      </section>
      <h6>Description</h6>
      <p className="blurb">{blurb}</p>
      <aside className="websiteContainer">
        <a href={links.live} target="_blank">
          WEBSITE
        </a>
        <a href={links.gitFront} target="_blank">
          FRONTEND
        </a>
        {links.gitBack ? <a href={links.gitBack}>BACKEND</a> : null}
      </aside>
    </div>
  );
};

export default Project;
