import React from "react";
import "../Assets/CSS/Pages/Home.css"
import seaVideo from "../Assets/Video/pexels-rostislav-uzunov-7513671 (2160p).mp4"
const Home = () => {
    return (
        <div className="homeContainer">
            <video playsInline autoPlay muted loop id="seaVideo">
                <source src={seaVideo}></source>
            </video>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/brooke-s-love/" target="_blank" rel="noreferrer">LI</a>
                </li>
                <li>
                    <a href="https://github.com/brookelove" target="_blank" rel="noreferrer">GH</a>
                </li> 
                <li>
                    <a href="https://www.instagram.com/bytesizedbean/" target="_blank" rel="noreferrer">IN</a>
                </li>    
                {/* <li>
                    <a>FB</a>
                </li>     */}
            </ul>
            <section className="main">
                <a href="/about">
                    <h1>ABOUT</h1>
                </a>
                {/* <a href="/about#contactContainer">
                    <h1>CONTACT</h1>
                </a> */}
                <a href="/work"><h1>PROJECTS</h1></a>
            </section>
        </div>
    )
}

export default Home;