import React, {useEffect, useRef} from "react";
import resume from "../Assets/Images/SL_Resume_PDF.pdf"
import { FaReact, FaSass } from "react-icons/fa6";
import { FaAws, FaGithub, FaGitlab, FaNode, FaJava, FaPython, FaCss3Alt, FaHtml5, FaBootstrap, FaFigma } from "react-icons/fa";
import { BiLogoJavascript, BiLogoJquery, BiLogoSlack } from "react-icons/bi";
import { SiMysql, SiExpress, SiHandlebarsdotjs, SiJest, SiApollographql, SiKotlin, SiNotion, SiCanva, SiNginx, SiDocker} from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import "../Assets/CSS/Components/Tools.css"

const Tools = () => {

    return(
        <div className="toolsContainer">
            <h1>SKILLS</h1>
            <div className="d-even">
            <section>
            <div className="portfolio-group d-c-center">
            <h3>Languages:</h3>
            <div className="scroller">
                <ul className="item-list scroller-inner">
                    <li className="item">
                        <div className="tool-tip">Java</div>
                        <FaJava className="reactIcon"/>
                    </li>
                    <li className="item">
                        <div className="tool-tip">Python</div>
                        <FaPython className="reactIcon"/>
                    </li>
                    <li className="item">
                        <div className="tool-tip">JavaScript</div>
                        <BiLogoJavascript className="reactIcon"/>
                    </li>
                    <li className="item">
                        <div className="tool-tip">HTML5</div>
                        <FaHtml5 className="reactIcon"/>
                    </li>
                    <li className="item">
                        <div className="tool-tip">CSS3</div>
                        <FaCss3Alt className="reactIcon"/>
                    </li>
                    <li className="item">
                        <div className="tool-tip">Kotlin</div>
                        <SiKotlin className="reactIcon"/>
                    </li>
                    <li className="item">
                        <div className="tool-tip">JSON</div>
                        <VscJson className="reactIcon"/>
                    </li>
                </ul>
            </div>
        </div>

        <div className="portfolio-group d-c-center">
            <h3>Frameworks and Libraries:</h3>
            <div className="scroller">
            <ul className="item-list scroller-inner">
                <li className="item">
                    <div className="tool-tip">React.js</div>
                    <FaReact className="reactIcon"/>
                </li>
                <li className="item">
                    <div className="tool-tip">Node.js</div>
                    <FaNode className="reactIcon"/>
                </li>
                <li className="item">
                    <div className="tool-tip">Express</div>
                    <SiExpress className="reactIcon"/>
                </li>
                <li className="item">
                    <div className="tool-tip">Sassy CSS</div>
                    <FaSass className="reactIcon"/>
                </li>
                <li className="item">
                 <div className="tool-tip">Bootstrap</div>
                    <FaBootstrap className="reactIcon"/>
                </li>
                <li className="item">
                <div className="tool-tip">JQuery</div>
                    <BiLogoJquery className="reactIcon"/>
                </li>
                <li className="item">
                    <div className="tool-tip">Handlebars.js</div>
                    <SiHandlebarsdotjs className="reactIcon"/>
                </li>
                <li className="item">
                    <div className="tool-tip">Apollo GraphQL</div>
                    <SiApollographql className="reactIcon"/>
                </li>
                {/* Add other frameworks and libraries as needed */}
            </ul>
            </div>
        </div>

        <div className="portfolio-group d-c-center">
            <h3>Version Control and Collaboration:</h3>
            <div className="scroller">
            <ul className="scroller-inner">
                <li className="item">
                    <div className="tool-tip">Github</div>
                    <FaGithub className="reactIcon"/>
                </li>
                <li className="item">
                    <div className="tool-tip">Gitlab</div>
                    <FaGitlab className="reactIcon"/>
                </li>
                <li className="item">
                    <div className="tool-tip">Nginx</div>
                    <SiNginx className="reactIcon"/>
                </li>
                <li className="item">
                    <div className="tool-tip">Docker</div>
                    <SiDocker className="reactIcon"/>
                </li>
            </ul>
            </div>
        </div>
            </section>
            <section>
        <div className="portfolio-group d-c-center">
            <h3>Testing and Quality Assurance:</h3>
            <ul>
                <li className="item">
                    <div className="tool-tip">Jest</div>
                    <SiJest className="reactIcon"/>
                </li>
            </ul>
        </div>

        <div className="portfolio-group d-c-center">
            <h3>Cloud Services:</h3>
            <ul>
                <li className="item">
                    <div className="tool-tip inProgressTool-tip">AWS in Progress</div>
                    <FaAws className="reactIcon inProgress"/>
                </li>
            </ul>
        </div>

        <div className="portfolio-group d-c-center">
            <h3>Design and Productivity:</h3>
            <div className="scroller">
            <ul className="scroller-inner">
                <li className="item">
                    <div className="tool-tip">Figma</div>
                    <FaFigma className="reactIcon"/>
                </li>
                <li className="item">
                    <div className="tool-tip">Canva</div>
                    <SiCanva className="reactIcon"/>
                </li>
                <li className="item">
                    <div className="tool-tip">Notion</div>
                    <SiNotion className="reactIcon"/>
                </li>
            </ul>
            </div>
        </div>
             </section>
             </div>
            <div className="resumeContainer">
            <a href={resume} target="_blank" rel="noreferrer">
            <button className="button">
                RESUME
            </button>
            </a>
        </div>
        </div>
    )
}

export default Tools;