import React, {useRef} from "react";
import emailjs from '@emailjs/browser';
import "../Assets/CSS/Components/Contact.css";

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_wjdiaov', 'template_cl9o5tp', form.current, 'uLVCGqKunzZ2MPlPV')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <div className="contactContainer" id="contactContainer">
            <section className="scrollContainer">
                <h1 className="scrollText rotate">LET'S CONNECT</h1>
            </section>
            <section className="contactFormContainer">
                <form ref={form}>
                    <label for="name">NAME</label>
                    <input type="text" name="name"></input>
                    <label for="number">PHONE</label>
                    <input type="email" name="number"></input>
                    <label for="email">EMAIL</label>
                    <input type="email" name="email"></input>
                    <label for="subject">TALK ABOUT</label>
                    <select name="subject" id="subject">
                        <option value="Other">OTHER</option>
                        <option value="landing">LANDING PAGE</option>
                        <option value="Multi-page">MULTI-PAGE</option>
                        <option value="Cover">COVER</option>
                        <option value="E-commerce">E-COMMERCE</option>
                        <option value="Questions">QUESTIONS</option>
                    </select>
                    <label for="message">MESSAGE</label>
                    <input type="text" name="message"></input>
                    <button className="button button--shape" onClick={()=> sendEmail}>
                        <span>SEND</span>
                    </button>
                </form>
           
            <span className="line"></span>
            <div className="contactLinks">
                <h2>SOCIALS</h2>
                <a href="mailto:brookelovedevelops@gmail.com">EMAIL</a>
                <a href="https://www.tiktok.com/@bytesizedbean" target="_blank" rel="noreferrer">TIKTOK</a>
                <a href="https://www.linkedin.com/in/brooke-s-love/" target="_blank" rel="noreferrer">LINKDIN</a>
                <a href="https://www.instagram.com/bytesizedbean/" target="_blank" rel="noreferrer">INSTAGRAM</a>
            </div>
            </section>
        </div>
    )
}
export default Contact