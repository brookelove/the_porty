import React from "react";
import "../Assets/CSS/Components/Highlight.css"

const Highlight = () => {
    return (
        <div className="highlightContainer">
            <section className="timelineContainer">
                <h3>MY TIMELINE SO FAR</h3>
                <span className="line"></span>
                <ul>
                    <li>graduating highschool</li>
                    <li>BS in Biology</li>
                    <li>3 Month Fullstack Develoment Bootcamp</li>
                    <li>MS in Software Developemnt</li>
                    <li>Contract with Citadel Cyber</li>
                </ul>
            </section>
            <section className="gitHubStats">
                <div className="graph"></div>
                {/* adding a graph on the left */}
                    <ul>
                        <li>Total Stars Earned : 2</li>
                        <li>Total Commmits (2023): 202</li>
                        <li>Total PRs: 81</li>
                        <li>Total Issues: 52</li>
                    </ul>
                    <ul>
                    <h3>Most Used Languages</h3>
                        <li>Java 48.41%</li>
                        <li>Javascript: 29.90%</li>
                        <li>CSS 9.70%</li>
                        <li>Python 6.76%</li>
                        <li>HTML 4.53%</li>
                        <li>SCSS 0.70%</li>
                    </ul>
            </section>
        </div>
    )
}
export default Highlight;