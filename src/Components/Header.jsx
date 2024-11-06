import React, { useEffect, useState, useRef } from "react";
import "../Assets/CSS/Components/Header.css";
import { setTheme } from "../utils/themes";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";

import SpriteAnimation from "./Sprite";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const Header = () => {
  const stickyRef = useRef(null);
  const [themeIndex, setThemeIndex] = useState(0);
  const location = useLocation();

  const themeArr = ["theme--dark", "theme--light", "theme--clean"];

  const handleTheme = () => {
    const nextIndex = (themeIndex + 1) % themeArr.length;
    setThemeIndex(nextIndex);
    setTheme(themeArr[nextIndex]);
  };

  const handleLinkClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    let yOffset =
      sectionId === "about-section"
        ? 200
        : sectionId === "journey-section"
        ? 10
        : 150;

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
    const trigger = ScrollTrigger.create({
      trigger: stickyRef.current,
      start: "top top", // Header will stick when it reaches the top of the viewport
      end: "bottom+=3000 top", // Stops sticking when the bottom of the header reaches the top of the viewport
      pin: true, // Pins the header
      pinSpacing: false, // Removes additional spacing
      toggleClass: { targets: stickyRef.current, className: "scrolled" }, // Adds 'scrolled' class when pinned
    });

    return () => {
      trigger.kill(); // Cleanup the ScrollTrigger instance on unmount
    };
  }, []);

  const isOnProjectsPage = location.pathname === "/work";

  return (
    <navbar ref={stickyRef} className="navbarContainer frosted">
      <ul>
        <li className="inter-semibold">
          <Link data-replace="Home" to="/">
            <span>Home</span>
          </Link>
        </li>

        <li className="inter-semibold">
          <Link
            data-replace="Projects"
            to="work"
            className={isOnProjectsPage ? "inactive" : ""}
          >
            <span>Projects</span>
          </Link>
        </li>
        <li className="inter-semibold">
          <Link
            data-replace="Journey"
            className={isOnProjectsPage ? "inactive" : ""}
            onClick={() => handleLinkClick("journey-section")}
          >
            <span>Journey</span>
          </Link>
        </li>
        <li className="inter-semibold">
          <Link
            data-replace="Skills"
            className={isOnProjectsPage ? "inactive" : ""}
            onClick={() => handleLinkClick("skills-section")}
          >
            <span>Skills</span>
          </Link>
        </li>
        <li className="inter-semibold">
          <Link
            data-replace="About"
            className={isOnProjectsPage ? "inactive" : ""}
            onClick={() => handleLinkClick("about-section")}
          >
            <span>About</span>
          </Link>
        </li>
        <li className="inter-semibold">
          <Link
            data-replace="Reach Out"
            className={isOnProjectsPage ? "inactive" : ""}
            onClick={() => handleLinkClick("contact-section")}
          >
            <span>Reach Out</span>
          </Link>
        </li>
        <li className="inter-semibold" onClick={handleTheme}>
          <SpriteAnimation />
        </li>
      </ul>
    </navbar>
  );
};

export default Header;
