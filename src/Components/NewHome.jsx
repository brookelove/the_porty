import BigIdeas from "./BigIdeas";
import Contact from "./Contact";
import Header from "./Header";

const NewHome = () => {
    return (
        <div>
            <Header/>
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
            <h5>* happy since 1999 * unopologetic since 2023 * Creative, Fun, Organzied * TA | Developer</h5>
            </main>
            </section>
            <BigIdeas/>
            <Contact/>
        </div>
    )
}

export default NewHome;