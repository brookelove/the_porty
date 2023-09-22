import React, {useEffect, useState} from "react";
import "../Assets/CSS/Components/Header.css"
import ContactModal from "./ContactModal";
import { setTheme } from "../utils/themes";

const Header = () => {
    const [toggle, setToggle] = useState('dark');
    const [sticky,setSticky]=React.useState(false);
    let theme = localStorage.getItem('theme');

    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 200 ){
          setSticky(true);
        }
        else{
          setSticky(false);
        }
      }

    const handleOnClick = () => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light');
            setToggle('light')
        } else {
            setTheme('theme-dark');
            setToggle('dark')
        }
    }

    const [isOpen, setIsOpen] = useState(false);
    useEffect(()=> {
       const currPage = window.location.href;
       const aboutAEl = document.getElementById("aboutA");
       const aboutLiEl = document.getElementById("aboutLi");

       const workAEl = document.getElementById("workA");
       const workLiEl = document.getElementById("workLi");

       const homeAEl = document.getElementById("homeA");
       const homeLiEl = document.getElementById("homeLi");

        if(currPage === aboutAEl.href) {
            console.log("about")
            aboutLiEl.classList.add("dot");
            workLiEl.classList.remove("dot");
            homeLiEl.classList.remove("dot");
        } else if (currPage.includes("#prices")){
            console.log("price")
            aboutLiEl.classList.remove("dot");
            workLiEl.classList.remove("dot");
            homeLiEl.classList.remove("dot");
        } else if (currPage === workAEl.href){
            console.log("work");
            aboutLiEl.classList.remove("dot");
            workLiEl.classList.add("dot");
            homeLiEl.classList.remove("dot");
        } else if (currPage === homeAEl.href){
            console.log("home")
            aboutLiEl.classList.remove("dot");
            workLiEl.classList.remove("dot");
            homeLiEl.classList.add("dot");
        } else {
            console.log("remove all extra dots")
            aboutLiEl.classList.remove("dot");
            workLiEl.classList.remove("dot");
            homeLiEl.classList.remove("dot");
        }
    });

    useEffect(() => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setToggle('dark')
        } else if (localStorage.getItem('theme') === 'theme-light') {
            setToggle('light')
        }
        // console.log(window.offset)
        // creating sticky navbar here!!!
        

    }, [theme])
    
    return(
        <div className="navbarContainer">
            <section className="weatherInfo">
                {/* <h6>happy since 1999</h6>
                <h6>unopologetic since 2023</h6> */}
                <h6>98°F</h6>
                <h6>☀️</h6>
                <h6>Valdosta</h6>
                <h6>11:04PM</h6>
                <div>
                    <h6>Current Project</h6>
                    <a>__________</a>
                </div>
            </section>
        <ul>
            <li>
            <div className="container--toggle">
            {
                toggle === "light" ?
                <input type="checkbox" id="toggle" className="toggle--checkbox" onClick={handleOnClick} checked />
                :
                <input type="checkbox" id="toggle" className="toggle--checkbox" onClick={handleOnClick} />
            }
            <label htmlFor="toggle" className="toggle--label">
                <span className="toggle--label-background"></span>
            </label>
        </div>
            </li>
            <li id="homeLi">
                <a id="homeA" href="/home">Home</a>
                <p>01</p>
            </li>
            <li id="aboutLi">
                <a id="aboutA" href="/about">About</a>
                <p>02</p>
                </li>
            <li id="workLi">
                <a id="workA" href="/work">Projects</a>
                <p>03</p>
            </li>
            
            <li id="homeLi">
            <a className="sendContact" onClick={()=>setIsOpen(true)}
            href="#contact">let's connect</a>
                <p>04</p>
            </li>
        </ul>
        {isOpen && <ContactModal setIsOpen={setIsOpen} />}
        </div>
    )
}
export default Header;