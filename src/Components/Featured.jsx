import React, {useEffect, useState} from "react";
import "../Assets/CSS/Components/Featured.css"
import projects  from "../utils/data/projects";
import { Link } from "react-router-dom";

const Featured = () => {
    const [isFeatured, setIsFeatured] = useState([]);
    const [isHeaderSticky, setIsHeaderSticky] = useState(false);


    useEffect(()=> {
        setIsFeatured(projects.filter(project => project.isFeatured))
        console.log(window.scrollY)
        const handleScroll = () => {
            if (window.scrollY >= 2150 ) { //this is where I want it to stop at && window.scrollY < 4320  and continue scrolling
                
              setIsHeaderSticky(true);
            } else {
              setIsHeaderSticky(false);
            }
          };

          if (window.scrollY >= 3900) {
            setIsHeaderSticky(false); // Stop the sticky header
          }
      
          window.addEventListener("scroll", handleScroll);
      
          return () => {
            window.removeEventListener("scroll", handleScroll);
          };
    }, [])
    console.log(window.scrollY)
    return(
        <div className="featuredContainer">
             <div className="stacking-container">
             <header className={`parallax_wrapper ${isHeaderSticky ? "stickyFeat" : ""}`}>
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

        </div>
    )
}
export default Featured