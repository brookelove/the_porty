import React, {useEffect, useState} from "react";
import "../Assets/CSS/Components/Featured.css"
import projects  from "../utils/data/projects";
import { Link } from "react-router-dom";

const Featured = () => {
    const [isFeatured, setIsFeatured] = useState([]);

    useEffect(()=> {
        setIsFeatured(projects.filter(project => project.isFeatured) )
    }, [])
    console.log(isFeatured)
    return(
        <div className="featuredContainer">
            <header className="parallax_wrapper">
                {/* background layer */}
                <h1 className="scrollText">FEAT</h1>
                <div className="parallax"></div>
                {/* <img className="parallax"/> */}
                <h1 className="scrollText">URED</h1>
            </header>
            <main className="d-c-center" >
                {isFeatured.map(project => {
                    return (
                        <div key={project.id} className="projectContainer">
                            <Link to={`/project/${project.id}`} alt={project.name}>
                                <img src={project.media}/>
                                <section className="d-between">
                                    <h1>{project.type}</h1>
                                    <h1>0{project.id}</h1>
                                </section>
                            </Link>
                        </div>
                );
            })}
            </main>
            {/* might need a outroscreen */}
        </div>
    )
}
export default Featured