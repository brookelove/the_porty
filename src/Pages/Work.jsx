import React, {useState} from "react";
import Navbar from "../Components/Header";
import "../Assets/CSS/Pages/Work.css";
import projects  from "../utils/data/projects";


const Work = () => {
    // const [isP1Open, setP1IsOpen] = useState(false);
    // const [isP2Open, setP2IsOpen] = useState(false);
    // useEffect(()=> {
    //     var allBtn = document.querySelectorAll(".plusContainer");
    //     for (let i = 0; i < allBtn.length; i++){
    //         allBtn[i].addEventListener("click",function() {
    //             // create condition to have if isOpen to true remove this if it set to false add thi
    //             var grandparentEl = this.parentElement.parentElement;
    //             var cousinEL = grandparentEl.children[2]
    //                 if(isOpen){
    //                     cousinEL.classList.add("none");
    //                     setIsOpen(true);
    //                 } else {
    //                     cousinEL.classList.remove("none");
    //                     setIsOpen(true);
    //                 }
    //         })
    //     }

    // }, [isOpen])
    let tags = [];
    let makeTags = ()=> {
        // for(let i = 0; i < projects.languages.length; i++){
        //     if()
        // }
    }

    return (
        <div className="workContainer parallax">
            <Navbar/>
            {/* tags */}
            <div className="tagContainer"></div>
            <div className="projectContainer">
            {projects.map((project) =>{
                return(
                    <div>
                        <img src={project.media} alt={project.name} />
                        <h2>{project.name}</h2>
                        <ul>
                        {project.languages.map((language)=> <li>{language}</li>)}
                        </ul>
                    </div>
                )
            })}
            </div>
            {/* <div className="projectContainer">
                <div>
                    <section>
                            <img src={prjOne} alt="computer with the website blush strokes beauty on it"/>
                        <section className="projectInfoContainer">
                            <section>
                            <h4>Blush Strokes Beauty</h4>
                            <h6>Multipage Website</h6>
                            </section>
                            <div className="plusContainer" onClick={()=> {
                                if(isP1Open){
                                    setP1IsOpen(false)
                                }else{
                                    setP1IsOpen(true)
                                }
                            }}>
                                <span className="left"></span>
                                <span className="right"></span>
                            </div>
                        </section>
                        <section id="proj-1" className={isP1Open ? "projInfo" : "projInfo none"}>
                             <p>Custom Make up artist website</p>
                             <p>React, CSS, JavaScript</p>
                             <a href="https://effortless-scone-fd5266.netlify.app" target="_blank" rel="noreferrer">click me</a>
                        </section>
                    </section>
                    <section>
                            <img src={prjTwo} alt="computer with the website The Sylver Effect on it"/>  
                        <section className="projectInfoContainer" >
                        <section>
                            <h4>The Sylver Effect</h4>
                            <h6>Multipage Website</h6>
                        </section>
                        <div className="plusContainer" onClick={()=> {
                                if(isP2Open){
                                    setP2IsOpen(false)
                                }else{
                                    setP2IsOpen(true)
                                }
                            }}>
                            <span className="left"></span>
                            <span className="right"></span>
                        </div>
                        </section>
                        <section id="proj-2" className={isP2Open ? "projInfo" : "projInfo none"}>
                            <p>Custom Make up artist website</p>
                            <p>React, CSS, JavaScript</p>
                            <a href="https://endearing-longma-9eecbd.netlify.app" target="_blank" rel="noreferrer">click me</a>
                        </section>
                    </section>
                </div>
            </div> */}
            {/* <Service id="prices"/> */}
            {/* <Process/> */}
        </div>
    )
}

export default Work;