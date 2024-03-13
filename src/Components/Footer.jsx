import React, {useEffect, useState, useRef} from "react";
import "../Assets/CSS/Components/Footer.css"

const Footer = () => {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText("brookelovedevelops@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    }

    return(
        <footer className="frosted">
            <h1>LET'S HANG OUT</h1>
            <a onClick={handleCopy} className="email">brookelovedevelops@gmail.com</a>
            <p><u>clip to copy</u></p>
            <section>
                <div>
                    <img/>
                    <p>© 2024 - BROOKE ❤️-HOWARD</p>
                </div>
                <div>
                    <h4><u>SOCIALS</u></h4>
                    <ul className="d-even">
                        <li><a href="https://github.com/brookelove">GITHUB</a></li>
                        <li><a href="https://www.linkedin.com/in/brooke-s-love/">LINKEDIN</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}
export default Footer;