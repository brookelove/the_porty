import React, {useEffect, useState, useRef} from "react";
import "../Assets/CSS/Components/Header.css"
import ContactModal from "./ContactModal";
import { setTheme } from "../utils/themes";
import { Link } from "react-router-dom";

const Header = () => {
    const stickyRef = useRef(null);
    const [toggle, setToggle] = useState('dark');
    const [sticky,setSticky]=useState(false);
    const [offset,setOffset]=useState(0);
    const [isOpen, setIsOpen] = useState(false);
    let theme = localStorage.getItem('theme');

    const handleScroll=() => {
        const scrollPosition=window.scrollY;
        if (scrollPosition > offset) {
            setSticky(true);
          } else {
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

   

    useEffect(()=> {
        if(!stickyRef.current){
            return
        }
        setOffset(stickyRef.current.offsetTop)
    },[stickyRef,setOffset])
    useEffect(()=> {
       const currPage = window.location.href;
       const pageLinks = {
        "/home": { id: "homeLi", class: "dot" },
        "/about": { id: "aboutLi", class: "dot" },
        "/work": { id: "workLi", class: "dot" },
    };

    for (const path in pageLinks) {
        const linkData = pageLinks[path];
        const linkElement = document.getElementById(linkData?.id);
        if (linkElement) {
            if (currPage.includes(path)) {
                linkElement.classList.add(linkData.class);
            } else {
                linkElement.classList.remove(linkData.class);
            }
        }
    }
    });

    useEffect(() => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setToggle('dark')
        } else if (localStorage.getItem('theme') === 'theme-light') {
            setToggle('light')
        }
        window.addEventListener('scroll',handleScroll)

    }, [theme])
    
    return(
        <navbar className={`navbarContainer ${sticky ? "scrolled frosted" : ""}`}>
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
        <span></span>
        {isOpen && <ContactModal setIsOpen={setIsOpen} />}
        </navbar>
    )
}
export default Header;