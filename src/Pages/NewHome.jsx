import { Link } from "react-router-dom";
import Home from "../Assets/CSS/Pages/Home.css"
import Featured from "../Components/Featured";
import Isometric from "../Assets/Images/TempIsoRoom.png";
const NewHome = () => {
    return (
        <div>
            <section className="newHomeContainer">
                <img src={Isometric} className="isometricRoom" alt="isometric 3d room of a coding room "/>
            <main>
            <section>
            <h1>SMALL TOWN SOFTWARE DEVELOPER</h1>
            </section>
            <div className="scrollContainer">
            <h5 className="scrollText"> * happy since 1999 * Creative, Fun, Organzied * TA | Developer *</h5>
            </div>
            </main>
            </section>
            <div className="bigIdeasContainer">
                <h1>Creativity Is Intelligence Having Fun</h1>
                <p>- A. Einstein</p>
            <Link to="/work" className="linkToLearn">LEARN MORE</Link>
            </div>
            <div className="blurbContainer">
            <section className="miniBlurb">
                {/* mini blurb about me and a link to the about me */}
                <p>Hi Im Savien,</p>
                <p>A passionate <b>software developer</b> based in Georgia. I am a currently working on <b>contract</b> projects and  a <b>Tutor/TA</b>for a Fullstack Developer bootcamp. I create momeorable projects that are fun and user friendly.</p>
            </section>
            </div>
            <Featured/>
        </div>
    )
}

export default NewHome;