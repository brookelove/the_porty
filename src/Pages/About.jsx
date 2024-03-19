import React, {useEffect, useRef} from "react";
import hiMe from "../Assets/Images/hiMe.png";
import heartMe from "../Assets/Images/heartme.png";
import Tools from "../Components/Tools";
import "../Assets/CSS/Pages/About.css";
import Highlight from "../Components/Highlights";

const About = () => {
    const processSectionRef = useRef(null);
    const stickyRef = useRef(null)
    useEffect(()=> {
        const stickyDiv = stickyRef.current;
        console.log(stickyRef)
        const transform = (section) => {
            const offsetTop = section.parentElement.offsetTop; //gets the parent container
            console.log(offsetTop) //2485
            const scrollSection = section.querySelector('.scroll_section');
            console.log(scrollSection)
            let perentange = ((window.scrollY - offsetTop)/ window.innerHeight) * 100 //percentage of amount tha we have scrolled on the screen
            scrollSection.style.transform = `translate3d(${-(perentange)}vw, 0, 0)`
        }

        window.addEventListener("scroll", (e)=> transform(stickyDiv));
    },[])
    
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
        <section className="processSection" >
            <h1>PROCESS</h1>
            <div className="sticky_parent">
                <div className="sticky" ref={stickyRef}>
                    <div className="scroll_section">
                        <div className="item">
                            <h4>INFO</h4>
                            <p>Gather information for upcoming projects. This includes conducting thorough research, looking at other websites to figure out what works and doesn't. Figureing out the the next steps befor edevising a plan. Determine what tasks need to be completed and what has already been accomplished.</p>
                        </div>
                        <div className="item">
                            <h4>PLAN</h4>
                            <p>Map out a bluepront by creating detailed wireframes to visualize project layout and functionality. Develop a comprehensive strategy delineating project requirements, timelines, and stakeholders, ensuring a clear roadmap for seamless execution.. </p>
                        </div>
                        <div className="item">
                            <h4>PLAY</h4>
                            <p>This is where we code! Here, I bring ideas to life through proficient coding practices, weaving intricate designs and functionalities into the fabric of our projects. </p>
                        </div>
                        <div className="item">
                            <h4>DELIVER</h4>
                            <p>Seal the deal by delivering polished, high-quality projects that exceed expectations. This stage involves rigorous testing, refinement, and ultimately, unveiling the final product to clients or stakeholders, marking the culmination of our efforts.</p>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="endBlurb">
            <h1>3 YEARS OF EXPERIENCE WORKING WITH PROJECTS</h1>
            <p>With these years of experience keeping up to date with current items. My journey has lead to develop different types of items to expand my knowledge.</p>
        </section>
        </div>
    )
}
export default About;