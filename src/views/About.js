import "../stylesheets/About.css";
import { motion } from "framer-motion";
import desktop from "../img/desktop.png";
import { Link } from "react-router-dom";
import Skills from "../components/Skills";

export default function About() {
  return (
    <motion.div
      className="insideAbout"
      initial={{ opacity: 0, transition: { duration: 0.1 } }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <div className="con">
        <div className="about">
          <div className="name">
            <h1 className="myname">I am Hugo D. Miranda Betancourt</h1>
            <h2>I am a Web developer</h2>
          </div>
          <div className="me">
            <h3>About Me</h3>
            <p>
              My name is Hugo Miranda and I`m a passionate Frontend Web
              developer using web technologies to build amazing projects and
              focusing on solving problems from different aspects of programming
              using the power of technology.
            </p>
            <p>I will love to hear from you,feel free to contact me.</p>
          </div>
          <Link className="hire-me" to="/contact">
            Hire me
          </Link>
        </div>
        <div className="desktop-container">
          <img src={desktop} alt="desktop" className="desktop" />
        </div>
      </div>
      <div className="tecno">
        <h2>Skills</h2>
        <Skills />
      </div>
    </motion.div>
  );
}
