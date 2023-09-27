import React from "react";
import BigIdeas from "../Components/BigIdeas";
import Contact from "../Components/Contact";
import Navbar from "../Components/Header";
import Resume from "../Components/Resume";
import Tools from "../Components/Tools";
import "../Assets/CSS/Pages/About.css"

const About = () => {
    return (
        <div className="aboutContainer">
        <Navbar/>
        <div className="lineContainer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        <header>
            <div className="left">
                <a>LINKEDIN</a>
                <a>INSTAGRAM</a>
            </div>
            <div className="middle">
                <section className="name">
                    <h1>HEY,</h1>
                    <section className="subHi">
                    <h1>I'M </h1>
                    <h1>SAVIEN</h1>
                    </section>
                </section>
                <img className="brooke"></img>
                <section className="title">
                    <h1 className="soft">SOFTWARE</h1>
                    <h1>DEVELOPER</h1>
                </section>
            </div>
            <div className="right">
                <p className="shortInfo">I'm a Full-stack Software developer who loves creating products that are creative, intuitive, and an experience.</p>
            </div>
        </header>
        <main>
            <p></p>
        </main>
        <Tools/>
        <Resume/>
        <Contact id="contact"/>
        </div>
    )
}

export default About;