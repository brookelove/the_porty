import React from "react";
import Navbar from "../Components/Navbar";
import Service from "../Components/Services";
import Process from "../Components/Process";
import seaVideo from "../Assets/Video/pexels-rostislav-uzunov-7513671 (2160p).mp4"
import "../Assets/CSS/Pages/Work.css";
import prjOne from "../Assets/Images/1.png";
import prjTwo from "../Assets/Images/2.png";
const Work = () => {
    return (
        <div className="workContainer">
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
                <section>
                    <h3>01</h3>
                    <a>
                        <img src={prjOne}/>
                    </a>
                    <section>
                        <p>TECH:</p>
                        <p>Multi-page Website</p>
                    </section>
                </section>
                <section>
                    <h3>02</h3>
                    <a>
                        <img src={prjTwo}/>  
                    </a>
                    <section>
                        <p>TECH:</p>
                        <p>Multi-page Website</p>
                    </section>
                </section>
            </div>
            <Service/>
            <Process/>
        </div>
    )
}

export default Work;