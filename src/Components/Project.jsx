import { useParams } from "react-router";
import "../Assets/CSS/Components/Project.css";
import projects from "../utils/data/projects";

const Project = () => {
    const { index } = useParams();
    console.log(index);
    const projectIndex = parseInt(index, 10);
    const { name, type, languages, media, blurb, submedia, video, links } = projects[projectIndex];
    const filteredSubMedia = submedia.filter((item, index) => index !== 2 && item !== "not working");
    return (
        <div className="projectContainer">
            <section>
                <header>
                    <section className="header">
                        <h1>{name}</h1>
                        <h5> | {type}</h5>
                    </section>
                    <h6>Languages</h6>
                    <ul className="languages">
                        {languages.map((language, index) => (
                            <li key={index}>{language}</li>
                        ))}
                    </ul>
                     <h6>Description</h6>
                    <p className="blurb">{blurb}</p>
                </header>
                <video controls loop>
                    <source src={video} type="video/mp4"/>
                </video>
            </section>
            <ul className="imageList">
                <li><img src={media} alt={name} /></li>
                {filteredSubMedia.map((item, index) => (
                   <li><img key={index} src={item} alt={`Submedia ${index}`} /></li> 
                ))}
            </ul>
            <aside className="websiteContainer">
                <a href={links.website}>WEBSITE</a>
                <a href={links.gitFront}>CODE</a>
            </aside>
        </div>
    );
};

export default Project;
