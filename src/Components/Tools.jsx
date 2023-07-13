import React from "react";
import { FaReact, FaSass } from "react-icons/fa6";
import { FaAws, FaGithub, FaGitlab, FaNode, FaJava, FaPython, FaCss3Alt, FaHtml5, FaBootstrap, FaFigma } from "react-icons/fa";
import { BiLogoJavascript, BiLogoJquery } from "react-icons/bi";
import { SiMysql, SiExpress, SiHandlebarsdotjs, SiJest, SiApollographql, SiKotlin, SiNotion, SiCanva } from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import "../Assets/CSS/Components/Tools.css"

const Tools = () => {
    return(
        <div className="toolsContainer">
            <ul className="grid">
                <li className="item"> 
                <FaReact className="reactIcon"/>
                    <tool-tip role="tooltip" tip-position="top">
                    React.JS
                    </tool-tip>
                    </li>
                <li className="item">
                    <FaSass className="reactIcon"/>
                </li>
                <li className="item" 
                ><FaAws className="reactIcon inProgress"/>
                </li>
                <li className="item">
                    <FaGithub className="reactIcon"/>
                </li>
                <li className="item">
                    <FaGitlab className="reactIcon"/>
                </li>
                <li className="item">
                    <FaNode className="reactIcon"/>
                </li>
                <li className="item">
                    <FaJava className="reactIcon"/>
                </li>
                <li className="item">
                    <FaPython className="reactIcon"/>
                </li>
                <li className="item">
                    <BiLogoJavascript className="reactIcon"/>
                </li>
                <li className="item">
                    <FaCss3Alt className="reactIcon"/>
                </li>
                <li className="item">
                    <FaHtml5 className="reactIcon"/>
                </li>
                <li className="item">
                    <BiLogoJquery className="reactIcon"/>
                </li>
                <li className="item">
                    <FaBootstrap className="reactIcon"/>
                </li>
                <li className="item">
                    <SiMysql className="reactIcon"/>
                </li>
                <li className="item">
                    <SiExpress className="reactIcon"/>
                </li>
                <li className="item">
                    <SiHandlebarsdotjs className="reactIcon"/>
                </li>
                <li className="item">
                    <SiJest className="reactIcon"/>
                </li>
                <li className="item">
                    <SiApollographql className="reactIcon"/>
                </li>
                <li className="item">
                    <SiKotlin className="reactIcon"/>
                </li>
                <li className="item">
                    <VscJson className="reactIcon"/>
                </li>
                <li className="item">
                    <SiNotion className="reactIcon"/>
                </li>
                <li className="item">
                    <SiCanva className="reactIcon"/>
                </li>
                <li className="item">
                    <FaFigma className="reactIcon"/>
                </li>
            </ul>
        </div>
    )
}

export default Tools;