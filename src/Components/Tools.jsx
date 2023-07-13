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
                <FaReact/>
                    <tool-tip role="tooltip" tip-position="top">
                    React.JS
                    </tool-tip>
                    </li>
                <li className="item"><FaSass/></li>
                <li className="item"><FaAws/></li>
                <li className="item"><FaGithub/></li>
                <li className="item"><FaGitlab/></li>
                <li className="item"><FaNode/></li>
                <li className="item"><FaJava/></li>
                <li className="item"><FaPython/></li>
                <li className="item"><BiLogoJavascript/></li>
                <li className="item"><FaCss3Alt/></li>
                <li className="item"><FaHtml5/></li>
                <li className="item"><BiLogoJquery/></li>
                <li className="item"><FaBootstrap/></li>
                <li className="item"><SiMysql/></li>
                <li className="item"><SiExpress/></li>
                <li className="item"><SiHandlebarsdotjs/></li>
                <li className="item"><SiJest/></li>
                <li className="item"><SiApollographql/></li>
                <li className="item"><SiKotlin/></li>
                <li className="item"><VscJson/></li>
                <li className="item"><SiNotion/></li>
                <li className="item"><SiCanva/></li>
                <li className="item"><FaFigma/></li>
            </ul>
        </div>
    )
}

export default Tools;