import { Link } from "react-router-dom";
// import BigIdeas from "./BigIdeas";
import Contact from "./Contact";
import Header from "./Header";

const NewHome = () => {
    return (
        <div>
            {/* <Header/> */}
            <section className="newHomeContainer">
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
            <main>
            <h1>BYTE WHISPERER</h1>
            <div className="scrollContainer">
            <h5 className="scrollText">* happy since 1999 * unopologetic since 2023 * Creative, Fun, Organzied * TA | Developer</h5>
            </div>
            </main>
            </section>
            <div className="bigIdeasContainer">
                <h1>SMALL TOWN FULLSTACK | SOFTWARE DEVELOPER</h1>
                <p>Creating Fun Innovative Projects</p>
            <Link to="/work">LEARN MORE</Link>
            </div>
            <div className="blurbContainer">
            <section className="miniBlurb">
                {/* mini blurb about me and a link to the about me */}
                <p>Hi Im Savien,</p>
                <p>A passionate <b>software developer</b> based in Georgia. I am a currently working on <b>contract</b> projects and  a <b>Tutor/TA</b>for a Fullstack Developer bootcamp. I create momeorable projects that are fun and user friendly.</p>
            </section>
            </div>
        </div>
    )
}

export default NewHome;