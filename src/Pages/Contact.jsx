import React, {useRef} from "react";
import emailjs from '@emailjs/browser';
import "../Assets/CSS/Components/Contact.css";
import Desk from "../Assets/Images/Desk.png";
import lightChat from "../Assets/Images/LightChat.gif";
import darkChat from "../Assets/Images/DarkChat.gif";

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
      const whichChat = () => {
        const theme = localStorage.getItem("theme");
        if(theme && theme.includes && theme.includes("light")) {
            return lightChat
        } else {
            return darkChat
        }
      }
    return (
        <div className="contactContainer" id="contactContainer">
            <section className="contactFormContainer">
                <section className="formImgSection">
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
                <img src={whichChat()} alt="3d animation of lets chat on a phone with a call button" className="letsChatGif"/>
                </section>
            <div className="contactLinks">
            </div>
            {/* <div className="thankSection">
                <h1>Thanks For Stopping By, Can't Wait To Chat</h1>
                <section>
                <div>
                    <a href="mailto:brookelovedevelops@gmail.com">EMAIL</a>
                    <a href="https://www.linkedin.com/in/brooke-s-love/">LINKEDIN</a>
                    <a href="https://github.com/brookelove">GITHUB</a>
                </div>
            <img src={Desk} alt="3d picture of desk" className="deskImage"/>
            </section>
            </div> */}
            </section>
        </div>
    )
}
export default Contact