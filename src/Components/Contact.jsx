import React from "react";
import "../Assets/CSS/Components/Contact.css";

const Contact = () => {
    return (
        <div className="contactContainer">
                <h1>REACH OUT OR CONTACT ME ON SOCIAL MEDIA</h1>
            <section className="contactFormContainer">
                <form>
                    <label for="name">NAME</label>
                    <input type="text" name="name"></input>
                    <label for="number">PHONE</label>
                    <input type="email" name="number"></input>
                    <label for="email">EMAIL</label>
                    <input type="email" name="email"></input>
                    <label for="subject">TALK ABOUT</label>
                    <select name="subject" id="cars">
                        <option value="Other">OTHER</option>
                        <option value="landing">LANDING PAGE</option>
                        <option value="Multi-page">MULTI-PAGE</option>
                        <option value="Cover">COVER</option>
                        <option value="E-commerce">E-COMMERCE</option>
                        <option value="Questions">QUESTIONS</option>
                    </select>
                    <label for="email">MESSAGE</label>
                    <input type="text" name="message"></input>
                    <button className="button button--shape">
                        <span>SEND</span>
                    </button>
                </form>
           
            <span className="line"></span>
            <div className="contactLinks">
                {/* <p>brookelovedevelops@gmail.com</p>
                <p>instagram: @brookelove</p>
                <p>linkedin: @brookelove</p> */}
                <a mailto="brookelovedevelops@gmail.com">EMAIL</a>
                <a>TIKTOK</a>
                <a>LINKDIN</a>
                <a>INSTAGRAM</a>
            </div>
            </section>
        </div>
    )
}
export default Contact