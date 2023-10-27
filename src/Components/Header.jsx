import React, {useEffect, useState, useRef} from "react";
import "../Assets/CSS/Components/Header.css"
import ContactModal from "./ContactModal";
import { setTheme } from "../utils/themes";
// import { Link } from "react-router-dom";

const Header = () => {
    const stickyRef = useRef(null);
    const [offset,setOffset]=useState(0);
    const [sticky,setSticky]=useState(false);
    const [date, setDate] = useState(new Date());
    const [toggle, setToggle] = useState('dark');
    const [weather, setWeather] = useState(null);

    let theme = localStorage.getItem('theme');
    const APIKEY = process.env.APIKEY;
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=Valdosta&appid=${APIKEY}&units=metric`;

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
        fetch(weatherURL)
        .then((response) => response.json())
        .then((data) => setWeather(data))
        .catch((error) => console.error(error));

    }, [theme])
    
    return(
        <navbar className={`navbarContainer ${sticky ? "scrolled frosted" : ""}`}>
            <section className="weatherInfo">
                <h6>98°F</h6>
                <h6>☀️</h6>
                <h6>{date.toLocaleDateString()}</h6>
                <h6>{date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h6>
                <div>
                    <h6>Current Project</h6>
                    <a>_____________</a>
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
        </ul>
        <span></span>
        </navbar>
    )
}
export default Header;