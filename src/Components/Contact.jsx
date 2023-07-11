import React from "react";
import "../Assets/CSS/Components/Contact.css";

const Contact = () => {
    return (
        <div className="contactContainer">
            <h1>Contact</h1>
            <section>
                <h2>Say Hi</h2>
                <form >
                    <label for="name">WHO ARE YOU?</label>
                    <input type="text" name="name"></input>
                    <label for="subject">WHAT DO YOU WANT TO CHAT ABOUT?</label>
                    <input type="text" name="subject"></input>
                    <label for="email">EMAIL</label>
                    <input type="email" name="email"></input>
                    <label for="email">MESSAGE</label>
                    <input type="text" name="message"></input>
                    <button className="button button--shape">
                        <span>SEND</span>
                    </button>
                </form>
                <span></span>
                <div>
                    <p>brookelovedevelops@gmail.com</p>
                    <p>instagram: @brookelove</p>
                    <p>linkedin: @brookelove</p>
                </div>
            </section>
        </div>
    )
}
export default Contact