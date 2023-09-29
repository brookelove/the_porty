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
            <div>
                {/* mini blurb about me and a link to the about me */}
            </div>
            {/* <Contact/> */}
        </div>
    )
}

export default NewHome;