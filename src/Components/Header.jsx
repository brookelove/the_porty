import React, {useEffect, useState, useRef} from "react";
import "../Assets/CSS/Components/Header.css"
import { setTheme } from "../utils/themes";

const Header = () => {
    const stickyRef = useRef(null);
    const [offset,setOffset]=useState(0);
    const [sticky,setSticky]=useState(false);
    const [date, setDate] = useState(new Date());
    const [toggle, setToggle] = useState('dark');
    const [showLinks, setShowLinks] = useState(false);

    const handleHamburgerClick = () => {
        setShowLinks(!showLinks);
    };

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
        var timer = setInterval(()=> setDate(new Date()), 1000);
        if(!stickyRef.current){
            return
        }
        setOffset(stickyRef.current.offsetTop)
        return function clearTime(){
            clearInterval(timer)
        }
    },[stickyRef,setOffset])
    useEffect(()=> {
       const currPage = window.location.href;
       const pageLinks = {
        "/home": { id: "homeLi", class: "dot" },
        "/about": { id: "aboutLi", class: "dot" },
        "/work": { id: "workLi", class: "dot" },
        "/contact": { id: "contactLi", class: "dot" },
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
             {showLinks ? null : (
            <section className="weatherInfo">
                <h6>{date.toLocaleDateString()}</h6>
                <h6>{date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h6>
                <a>🦩</a>
            <a>🐕‍🦺</a>
            <a>🐈</a>
            </section> 
             )}
            <div className="hamburger-menu" onClick={handleHamburgerClick}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>   
         <section className="leftside">
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
        <ul className={showLinks ? "show" : ""}>
            <li id="homeLi" >
                <a id="homeA" href="/">Home</a>
            </li>
            <li id="aboutLi">
                <a id="aboutA" href="/about">About</a>
                </li>
            <li id="contactLi">
                <a id="contactA" href="/contact">Contact</a>
            </li>
            <li id="workLi">
                <a id="workA" href="/work">Projects</a>
            </li>
        </ul>
        
        </section>
        </navbar>
    )
}
export default Header;