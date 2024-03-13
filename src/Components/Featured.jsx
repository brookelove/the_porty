import React, {useEffect, useState} from "react";
import "../Assets/CSS/Components/Featured.css"
import projects  from "../utils/data/projects";
import { Link } from "react-router-dom";

const Featured = () => {
    const [isFeatured, setIsFeatured] = useState([]);
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);


    useEffect(()=> {
        setIsFeatured(projects.filter(project => project.isFeatured))

        // // this is for the first image
        // if(window.scrollY >= 2100) {
        //     setIsHeaderFixed(true); 
        // } else if(window.scrollY >= 3500){
        //     // second image

        // } else if (window.scrollY >= 4100) {
        //     // third image
        // } else {
        //     // remove the other versions and let it go back to normal
        // }
        // // the thing that is sliding up is the project and not the word
    }, [])
    console.log(window.scrollY)
    return(
        <div className="featuredContainer">
             <div className="stacking-container">
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
                                <img src={project.media} alt={project.name}/>
                                <section className="d-between">
                                    <h1>{project.type}</h1>
                                    <h1>0{project.id}</h1>
                                </section>
                            </Link>
                        </div>
                );
            })}
            </main>
            </div>
            {/* might need a outroscreen */}
        </div>
    )
}
export default Featured