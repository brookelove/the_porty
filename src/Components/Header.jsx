import React, { useEffect, useState, useRef } from "react";
import "../Assets/CSS/Components/Header.css";
import { setTheme } from "../utils/themes";
import { FaRegCircleDot } from "react-icons/fa6";
const Header = () => {
  const stickyRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [sticky, setSticky] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [themeIndex, setThemeIndex] = useState(0);

  const themeArr = [
    "theme-dark",
    "theme-light",
    "theme-orange",
    "theme-pink",
    "theme-red",
  ];

  let theme = localStorage.getItem("theme");

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > offset) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const handleTheme = (theme) => {
    console.log(theme);
    let storageTheme = localStorage.getItem("theme");
    if (storageTheme != null) {
      const nextIndex = (themeIndex + 1) % themeArr.length;
      const nextTheme = themeArr[nextIndex];
      setThemeIndex(nextIndex);
      setTheme(nextTheme);
    }
  };

  useEffect(() => {
    if (stickyRef.current) {
      setOffset(stickyRef.current.offsetTop);
    }
  }, []);

  useEffect(() => {
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
    window.addEventListener("scroll", handleScroll);
  }, [theme]);

  return (
    <navbar
      className={`navbarContainer ${sticky ? "scrolled frosted" : "frosted"}`}
    >
      {/*{showLinks ? null : (
      {/* <a onClick={() => handleTheme(themeArr[themeIndex])}>
         }   <RiBearSmileFill size="25" />
          </a>
        </section>
      )}*/}
      {/* <section className="leftside">
        <ul className={showLinks ? "show" : ""}>
          <li id="homeLi">
            <a id="homeA" href="/" className="inter-bold">
              Home
            </a>
          </li>
          <li id="workLi">
            <a id="workA" href="/work" className="inter-bold">
              My Pieces
            </a>
          </li>
        </ul>
      </section> */}
      {/* need to add in an hamburger icon that only appears when less than 768px */}
      <ul>
        <li className="inter-semibold">
          <a data-replace="Journey">
            <span>Journey</span>
          </a>
        </li>
        <li className="inter-semibold">
          <a data-replace="Resume">
            <span>Resume</span>
          </a>
        </li>
        <li className="inter-semibold">
          <a data-replace="Skills">
            <span>Skills</span>
          </a>
        </li>
      </ul>
      <a>
        <h3 className="inter-bold">Hacker Jack</h3>
      </a>
      <ul>
        <li className="inter-semibold">
          <a data-replace="About">
            <span>About</span>
          </a>
        </li>
        <li className="inter-semibold">
          <a data-replace="Process">
            <span>Process</span>
          </a>
        </li>
        <li className="inter-semibold">
          <a data-replace="Reach Out">
            <span>Reach Out</span>
          </a>
        </li>
        <li className="inter-semibold">
          {/* want to make it a drop down bar to choose whichever one at any time */}
          <FaRegCircleDot onClick={() => handleTheme(themeArr[themeIndex])} />
        </li>
      </ul>
    </navbar>
  );
};
export default Header;
