import React from "react";
import { FaReact, FaSass } from "react-icons/fa6";
import { FaAws, FaGithub, FaGitlab, FaNode, FaJava, FaPython, FaCss3Alt, FaHtml5, FaBootstrap, FaFigma } from "react-icons/fa";
import { BiLogoJavascript, BiLogoJquery, BiLogoSlack } from "react-icons/bi";
import { SiMysql, SiExpress, SiHandlebarsdotjs, SiJest, SiApollographql, SiKotlin, SiNotion, SiCanva } from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import "../Assets/CSS/Components/Tools.css"

const Tools = () => {
    return(
        <div className="toolsContainer">
            <ul className="grid">
                <li className="item"> 
                <FaReact className="reactIcon"/>
                    <div className="tool-tip">React.js</div>
                    </li>
                <li className="item">
                    <div className="tool-tip">Sassy CSS</div>
                    <FaSass className="reactIcon"/>
                </li>
                <li className="item">
                    <div className="tool-tip inProgressTool-tip">AWS in Progress</div>
                    <FaAws className="reactIcon inProgress"/>
                </li>
                <li className="item">
                <div className="tool-tip">Github</div>
                    <FaGithub className="reactIcon"/>
                </li>
                <li className="item">
                <div className="tool-tip">Gitlab</div>
                    <FaGitlab className="reactIcon"/>
                </li>
                <li className="item">
                <div className="tool-tip">Node.js</div>
                    <FaNode className="reactIcon"/>
                </li>
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
                    <div className="tool-tip">CSS3</div>
                    <FaCss3Alt className="reactIcon"/>
                </li>
                <li className="item">
                    <div className="tool-tip">HTML5</div>
                    <FaHtml5 className="reactIcon"/>
                </li>
                <li className="item">
                <div className="tool-tip">JQuery</div>
                    <BiLogoJquery className="reactIcon"/>
                </li>
                <li className="item">
                 <div className="tool-tip">Bootstrap</div>
                    <FaBootstrap className="reactIcon"/>
                </li>
                <li className="item">
                    <div className="tool-tip">MySQL</div>
                    <SiMysql className="reactIcon"/>
                </li>
                <li className="item">
                    <div className="tool-tip">Express</div>
                    <SiExpress className="reactIcon"/>
                </li>
                <li className="item">
                    <div className="tool-tip">Handlebars.js</div>
                    <SiHandlebarsdotjs className="reactIcon"/>
                </li>
                <li className="item">
                    <div className="tool-tip">Jest</div>
                    <SiJest className="reactIcon"/>
                </li>
                <li className="item">
                    <div className="tool-tip">Apollo GraphQL</div>
                    <SiApollographql className="reactIcon"/>
                </li>
                <li className="item">
                    <div className="tool-tip">Kotlin</div>
                    <SiKotlin className="reactIcon"/>
                </li>
                <li className="item">
                    <div className="tool-tip">JSON</div>
                    <VscJson className="reactIcon"/>
                </li>
                <li className="item">
                    <div className="tool-tip">Notion</div>
                    <SiNotion className="reactIcon"/>
                </li>
                <li className="item">
                    <div className="tool-tip">Canva</div>
                    <SiCanva className="reactIcon"/>
                </li>
                <li className="item">
                    <div className="tool-tip">Figma</div>
                    <FaFigma className="reactIcon"/>
                </li>
                <li className="item">
                    <div className="tool-tip">Figma</div>
                    <BiLogoSlack className="reactIcon"/>
                </li>
            </ul>
        </div>
    )
}

export default Tools;