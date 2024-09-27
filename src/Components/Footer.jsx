import React, { useEffect, useState, useRef } from "react";
import "../Assets/CSS/Components/Footer.css";
import HangingCat from "../Assets/Images/Cats/2.png";

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("brookelovedevelops@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <footer className="frosted shadow-twenty-two">
      <main>
        <section>
          <h1 className="inter-bold-italic">Let's go on a journey</h1>
          <ul>
            <li className="inter-thin">
              <a onClick={handleCopy} className="email">
                brookelovedevelops@gmail.com
              </a>
            </li>
            <li className="inter-thin">
              <a href="https://github.com/brookelove">github</a>
            </li>
            <li className="inter-thin">
              <a href="https://www.linkedin.com/in/brooke-s-love/">linkedin</a>
            </li>
          </ul>
          <p className="inter-bold">
            <u>click above to contact</u>
          </p>
        </section>
        <section>
          <div></div>
        </section>
      </main>
      <div>
        <p className="copyright inter-bold">Hacker Jack 2024</p>
      </div>
    </footer>
  );
};
export default Footer;
