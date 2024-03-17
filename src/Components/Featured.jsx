import React, {useEffect, useState} from "react";
import "../Assets/CSS/Components/Featured.css"
import projects  from "../utils/data/projects";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";
import FightingCat from "../Assets/Images/Cats/1.png"

const Featured = () => {
    const [isFeatured, setIsFeatured] = useState([]);
    const [isHeaderSticky, setIsHeaderSticky] = useState(false);
    const [headerClass, setHeaderClass] = useState("");
    const [isEndStack, setIsEndStack] = useState(false);

    useEffect(()=> {
        setIsFeatured(projects.filter(project => project.isFeatured))
        console.log(window.scrollY)
        const handleScroll = debounce(() => {
            if(window.scrollY >= 2150 && window.scrollY <= 4329) {
                setIsHeaderSticky(true);
                setIsEndStack(false); 
                setHeaderClass("stickyFeat")
            } else if (window.scrollY >= 4330){
                setIsHeaderSticky(true);
                setIsEndStack(true);
                setHeaderClass("finishedStack")
            } else {
                setIsHeaderSticky(false); 
                setIsEndStack(false);
                setHeaderClass("")
            }
          },100);

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
             <header className={`parallax_wrapper ${headerClass}`}>
                {/* background layer */}
                <h1 className="scrollText left">FEAT</h1>
                <img src={`${FightingCat}`} alt="fighting cat"/>
                 <h1 className="scrollText right">URED</h1>
            </header>

            <main className={`d-c-center ${isEndStack ? "endStack" : ""}`} >
            
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