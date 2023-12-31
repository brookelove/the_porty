import React from "react";
import hiMe from "../Assets/Images/hiMe.png";
import heartMe from "../Assets/Images/heartme.png";
import Tools from "../Components/Tools";
import "../Assets/CSS/Pages/About.css";
import Highlight from "../Components/Highlights";

const About = () => {
    return (
        <div className="aboutContainer">
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
            </div>
            <div className="middle">
                <section className="name">
                    <h1>HEY,</h1>
                    <section className="subHi">
                    <h1>I'M </h1>
                    <h1>SAVIEN</h1>
                    </section>
                </section>
                <img src={hiMe}
                className="brooke"></img>
                <img src={heartMe}
                className="heartMe" ></img>
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
        <Highlight/>
        <Tools/>
        </div>
    )
}
export default About;