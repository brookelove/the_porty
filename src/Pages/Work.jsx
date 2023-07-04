import React from "react";
import Navbar from "../Components/Navbar";
import seaVideo from "../Assets/Video/pexels-rostislav-uzunov-7513671 (2160p).mp4"
import "../Assets/CSS/Pages/Work.css";
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
                    <a></a>
                </section>
                <section>
                    <a></a>
                </section>
            </div>
        </div>
    )
}

export default Work;