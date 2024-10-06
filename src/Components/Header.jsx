import React, { useEffect, useState, useRef } from "react";
import "../Assets/CSS/Components/Header.css";
import { setTheme } from "../utils/themes";
import { FaRegCircleDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

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

  const handleLinkClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    let yOffset;
    console.log(sectionId === "about-section");
    if (sectionId === "about-section") {
      yOffset = 200;
    } else if (sectionId === "journey-section") {
      yOffset = 10;
    } else {
      yOffset = 150;
    }

    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: element,
        offsetY: yOffset,
      },
      ease: "power2.inOut",
    });
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
      {/* need to add in an hamburger icon that only appears when less than 768px */}
      <ul>
        <li className="inter-semibold">
          <a
            data-replace="Journey"
            onClick={() => handleLinkClick("journey-section")}
          >
            <span>Journey</span>
          </a>
        </li>
        <li className="inter-semibold">
          <Link data-replace="Projects" to="work">
            <span>Projects</span>
          </Link>
        </li>
        <li className="inter-semibold">
          <a
            data-replace="Resume"
            onClick={() => handleLinkClick("resume-section")}
          >
            <span>Resume</span>
          </a>
        </li>
        <li className="inter-semibold">
          <a
            data-replace="Skills"
            onClick={() => handleLinkClick("skills-section")}
          >
            <span>Skills</span>
          </a>
        </li>
      </ul>
      <a>
        <h3 className="inter-bold">Hacker Jack</h3>
      </a>
      <ul>
        <li className="inter-semibold">
          <a
            data-replace="About"
            onClick={() => handleLinkClick("about-section")}
          >
            <span>About</span>
          </a>
        </li>
        <li className="inter-semibold">
          <a
            data-replace="Process"
            onClick={() => handleLinkClick("process-section")}
          >
            <span>Process</span>
          </a>
        </li>
        <li className="inter-semibold">
          <a
            data-replace="Reach Out"
            onClick={() => handleLinkClick("contact-section")}
          >
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
