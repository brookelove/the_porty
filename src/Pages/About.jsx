import React from "react";
import Contact from "../Components/Contact";
import Navbar from "../Components/Navbar";
import Resume from "../Components/Resume";
import "../Assets/CSS/Pages/About.css"

const About = () => {
    return (
        <div className="aboutContainer parallax">
        <Navbar/>
        <header>
            <div className="left">
                <a>LINKEDIN</a>
                <a>INSTAGRAM</a>
            </div>
            <div className="middle">
                <section className="name">
                    <h1>HEY,</h1>
                    <h1>I'M BROOKE</h1>
                </section>
                <img className="brooke"></img>
                <section className="">
                    <h1>SOFTWARE DEVELOPER</h1>
                </section>
            </div>
            <div className="right">
                <p className="shortInfo">I'm a Full-stack Software developer who loves creating products that are creative, intuitive, and an experience</p>
            </div>
        </header>
        <Resume/>
        <Contact/>
        </div>
    )
}

export default About;