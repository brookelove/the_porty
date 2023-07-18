import React, {useId, useRef, useEffect, useState} from "react";
import "../Assets/CSS/Components/Navbar.css"
import ContactModal from "./ContactModal";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    useEffect(()=> {
       const currPage = window.location.href;
       const aboutAEl = document.getElementById("aboutA");
       const aboutLiEl = document.getElementById("aboutLi");

       const priceLiEl = document.getElementById("priceLi");

       const workAEl = document.getElementById("workA");
       const workLiEl = document.getElementById("workLi");

       const homeAEl = document.getElementById("homeA");
       const homeLiEl = document.getElementById("homeLi");

        if(currPage === aboutAEl.href) {
            console.log("about")
            aboutLiEl.classList.add("dot");
            priceLiEl.classList.remove("dot");
            workLiEl.classList.remove("dot");
            homeLiEl.classList.remove("dot");
        } else if (currPage.includes("#prices")){
            console.log("price")
            aboutLiEl.classList.remove("dot");
            priceLiEl.classList.add("dot");
            workLiEl.classList.remove("dot");
            homeLiEl.classList.remove("dot");
        } else if (currPage === workAEl.href){
            console.log("work");
            aboutLiEl.classList.remove("dot");
            priceLiEl.classList.remove("dot");
            workLiEl.classList.add("dot");
            homeLiEl.classList.remove("dot");
        } else if (currPage === homeAEl.href){
            console.log("home")
            aboutLiEl.classList.remove("dot");
            priceLiEl.classList.remove("dot");
            workLiEl.classList.remove("dot");
            homeLiEl.classList.add("dot");
        } else {
            console.log("remove all extra dots")
            aboutLiEl.classList.remove("dot");
            priceLiEl.classList.remove("dot");
            workLiEl.classList.remove("dot");
            homeLiEl.classList.remove("dot");
        }
    });
    return(
        <div className="navbarContainer">
            <section>
                <h6>happy since 1999</h6>
                <h6>unopologetic since 2023</h6>
            </section>
        <ul>
            <li id="aboutLi">
                <a id="aboutA" href="/about">About</a>
                <p>01</p>
                </li>
            <li id="priceLi">
                <a id="priceA" href="/work#prices">Prices</a>
                <p>02</p>
            </li>
            <li id="workLi">
                <a id="workA" href="/work">Projects</a>
                <p>03</p>
            </li>
            <li id="homeLi">
                <a id="homeA" href="/home">Home</a>
                <p>04</p>
            </li>
            <li id="homeLi">
            <a className="sendContact" onClick={()=>setIsOpen(true)}
            href="#contact">let's connect</a>
                <p>05</p>
            </li>
        </ul>
        {isOpen && <ContactModal setIsOpen={setIsOpen} />}
        </div>
    )
}
export default Navbar;