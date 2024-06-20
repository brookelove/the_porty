import React, {useEffect, useState, useRef} from "react";
import "../Assets/CSS/Components/Header.css"
import { setTheme } from "../utils/themes";
import { RiBearSmileFill } from "react-icons/ri";
const Header = () => {
    const stickyRef = useRef(null);
    const [offset,setOffset]=useState(0);
    const [sticky,setSticky]=useState(false);
    const [date, setDate] = useState(new Date());
    const [showLinks, setShowLinks] = useState(false);
    const [themeIndex, setThemeIndex] = useState(0);

    const themeArr = ["theme-dark","theme-light", "theme-orange","theme-pink","theme-red"]

    let theme = localStorage.getItem('theme');

    const handleScroll=() => {
        const scrollPosition=window.scrollY;
        if (scrollPosition > offset) {
            setSticky(true);
          } else {
            setSticky(false);
          }
      }

    const handleTheme = (theme) => {
        let storageTheme = localStorage.getItem('theme');
        if(storageTheme !=null){
            const nextIndex = (themeIndex + 1) % themeArr.length;
            const nextTheme = themeArr[nextIndex];
            setThemeIndex(nextIndex);
            setTheme(nextTheme);
        }
    }

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000);
        if (stickyRef.current) {
            setOffset(stickyRef.current.offsetTop);
        }
        return () => clearInterval(timer);
    }, []);

    useEffect(()=> {
       const currPage = window.location.href;
       const pageLinks = {
        "/": { id: "homeLi", class: "dot" },
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
        window.addEventListener('scroll',handleScroll)
    }, [theme])
    
    
    return(
        <navbar className={`navbarContainer ${sticky ? "scrolled frosted" : ""}`}>
             {showLinks ? null : (
            <section className="weatherInfo">
                <h6>{date.toLocaleDateString()}</h6>
                <h6>{date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h6>
                <a onClick={() => handleTheme(themeArr[themeIndex])}><RiBearSmileFill size="25"/></a>
            </section> 
             )}
         <section className="leftside">
        <ul className={showLinks ? "show" : ""}>
            <li id="homeLi" >
                <a id="homeA" href="/">Home</a>
            </li>
            <li id="workLi">
                <a id="workA" href="/work">My Pieces</a>
            </li>
        </ul>
        </section>
        </navbar>
    )
}
export default Header;