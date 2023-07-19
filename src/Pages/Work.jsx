import React, {useState} from "react";
import Navbar from "../Components/Navbar";
import Service from "../Components/Services";
import Process from "../Components/Process";
import seaVideo from "../Assets/Video/pexels-rostislav-uzunov-7513671 (2160p).mp4"
import "../Assets/CSS/Pages/Work.css";
import prjOne from "../Assets/Images/1.png";
import prjTwo from "../Assets/Images/2.png";
import ProjectModal from "../Components/ProjectModal";
const Work = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="workContainer parallax">
            <Navbar/>
            <section className="header">
                <video playsInline autoPlay muted loop id="seaVideoWork">
                    <source src={seaVideo}></source>
                </video>
                <div className="title">
                    <h1 className="left">PROJ</h1>
                    <h1 className="right">ECTS</h1>
                </div>
            </section>
            <div className="projectContainer">
                <h2>RECENTLY ADDED</h2>
                <div>
                    <section>
                        <a onClick={()=>setIsOpen(true)}>
                            <img src={prjOne}/>
                        </a>
                        <section>
                            <h4>Blush Strokes Beauty</h4>
                            <h6>Multipage Website</h6>
                            {/* <p>DESCRIPTION: Custom Make up artist website</p>
                            <p>React, CSS, JavaScript</p> */}
                        </section>
                    </section>
                    <section>
                        <a onClick={()=>setIsOpen(true)}>
                            <img src={prjTwo}/>  
                        </a>
                        <section>
                        <h4>The Sylver Effect</h4>
                        <h6>Multipage Website</h6>
                        </section>
                    </section>
                </div>
            </div>
            <Service id="prices"/>
            <Process/>
        </div>
    )
}

export default Work;