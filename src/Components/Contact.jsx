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
                        SEND
                    </button>
                </form>
            <div className="contactLinks">
                {/* put and creative drawn image there or something  */}
            </div>
            <div className="thankSection">
                <h1>Thanks For Stopping By, Can't Wait To Chat</h1>
                <h3>Savien Brooke Love</h3>
                <div>
                    <a>EMAIL</a>
                    <a>LINKEDIN</a>
                    <a>GITHUB</a>
                </div>
            </div>
            </section>
        </div>
    )
}
export default Contact