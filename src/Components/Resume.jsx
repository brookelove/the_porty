import React from "react";
import resume from "../Assets/Images/SL_Resume_PDF.pdf"
import "../Assets/CSS/Components/Resume.css"

const Resume = () => {
    return (
        <div className="resumeContainer">
            <a href={resume} target="_blank" rel="noreferrer">
            <button className="button button--shape">
                <span>CREDENTIALS</span>
            </button>
            </a>
        </div>
    )
}
export default Resume;