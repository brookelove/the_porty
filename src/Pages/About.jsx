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
        <header className="d-even">
            <div className="left">
            <section className="name">
                    <h1>HEY,</h1>
                    <section className="subHi">
                    <h1>I'M </h1>
                    <h1>SAVIEN</h1>
                    </section>
                </section>
                <a href="https://www.linkedin.com/in/brooke-s-love/">LINKEDIN</a>
            </div>
            <div className="middle">
                
                <img src={hiMe}
                className="brooke"></img>
                <img src={heartMe}
                className="heartMe" ></img>
                
            </div>
            <div className="right">
                <p className="shortInfo">I'm a Full-stack Software developer who loves creating products that are creative, intuitive, and an experience.</p>
                <section className="title">
                    <h1 className="soft">SOFTWARE</h1>
                    <h1>DEVELOPER</h1>
                </section>
            </div>
        </header>
        <main>
            <p></p>
        </main>
        <Highlight/>
        <Tools/>
        <section className="processSection">
            <h1>PROCESS</h1>
            <ol>
                <li>
                    <h4>INFO</h4>
                    <p>Gather information for upcoming projects.What needs to be completed, what is completed.</p>
                </li>
                <li>
                    <h4>PLAN</h4>
                    <p>Plan out what needs to be created, wireframes, color schemes, and more.</p>
                </li>
                <li><h4>PLAY</h4><p>This is where we code!</p></li>
                <li><h4>DELIVER</h4><p></p></li>
            </ol>
        </section>
        <section>
            <h1>3 YEARS OF EXPERIENCE WORKING WITH PROJECTS</h1>
            <p>With these years of experience keeping up to date with current items. My journey has lead to develop different types of items to expand my knowledge.</p>
        </section>
        </div>
    )
}
export default About;