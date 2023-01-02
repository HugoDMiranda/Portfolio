import React from "react";
import "../stylesheets/styleComponents/Skills.css";
import { DiGithubBadge, DiCss3, DiReact, DiMongodb } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { SiJavascript, SiSass, SiTypescript, SiMysql } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";

function Skills() {
  return (
    <ul className="tec-list">
      <li>
        <AiFillHtml5 size="55px" className="icons" />
      </li>
      <li>
        <DiCss3 size="55px" className="icons" />
      </li>
      <li>
        <SiJavascript size="55px" className="icons" />
      </li>
      <li>
        <SiTypescript size="55px" className="icons" />
      </li>
      <li>
        <DiReact size="55px" className="icons" />
      </li>
      <li>
        <IoLogoNodejs size="55px" className="icons" />
      </li>
      <li>
        <DiGithubBadge size="55px" className="icons" />
      </li>
      <li>
        <SiSass size="55px" className="icons" />
      </li>
      <li>
        <FaBootstrap size="55px" className="icons" />
      </li>
      <li>
        <SiMysql size="55px" className="icons" />
      </li>
      <li>
        <DiMongodb size="55px" className="icons" />
      </li>
    </ul>
  );
}

export default Skills;
