import React, {useRef} from "react";
import emailjs from '@emailjs/browser';
import "../Assets/CSS/Components/ContactModal.css";
import { GrFormClose } from "react-icons/gr";
const ContactModal = ({setIsOpen}) => {
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
        <div className="modal">
        <div className="contactModalContainer">
            <div onClick={()=> setIsOpen(false)}><GrFormClose size={30} className="closeBTN" /></div>
            <span className="line"></span>
            <h1>LET'S CONNECT</h1>
            <span className="line"></span>
            <form ref={form}>
                <label for="name">FIRST NAME</label>
                <input type="text" name="name"></input>
                <label for="email">EMAIL</label>
                <input type="text" name="email"></input>
                <label for="phone">PHONE</label>
                <input type="text" name="phone"></input>
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
                    <button style={{marginTop:"30px", marginLeft:"75px"}}className="button button--shape" onClick={()=> sendEmail}>
                        <span>SEND</span>
                    </button>
            </form>
        </div>
        </div>
    )
}
export default ContactModal;