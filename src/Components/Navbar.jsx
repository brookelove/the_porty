import React, {useId, useRef, useEffect} from "react";
import "../Assets/CSS/Components/Navbar.css"
const Navbar = () => {
    useEffect(()=> {
       const currPage = window.location.href;
       const aboutAEl = document.getElementById("aboutA");
       const aboutLiEl = document.getElementById("aboutLi");
       const priceAEl = document.getElementById("priceA");
       const priceLiEl = document.getElementById("priceLi");
       const workAEl = document.getElementById("workA");
       const workLiEl = document.getElementById("workLi");
       const homeAEl = document.getElementById("homeA");
       const homeLiEl = document.getElementById("homeLi");
        // const ulEl = document.getElementById(ul)
        // console.log(ulEl.children())
        if(currPage === aboutAEl.href) {
            console.log("about")
            aboutLiEl.classList.add("dot");
            priceLiEl.classList.remove("dot");
            workLiEl.classList.remove("dot");
            homeLiEl.classList.remove("dot");
        } else if (currPage.includes("prices")){
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
        <ul>
            <li id="aboutLi"><a id="aboutA" href="/about">About</a></li>
            <li id="priceLi"><a id="priceA" href="#prices">Prices</a></li>
            <li id="workLi"><a id="workA" href="/work">Projects</a></li>
            <li id="homeLi"><a id="homeA" href="/home">Home</a></li>
        </ul>
        </div>
    )
}
export default Navbar;