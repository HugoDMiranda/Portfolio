import "../stylesheets/Footer.css";
import { Link } from "react-router-dom";
import { AiFillLinkedin } from "react-icons/ai";
import { DiGithubBadge } from "react-icons/di";

function Footer() {
  return (
    <footer>
      <div className="social-icons-container">
        <a
          href="https://github.com/HugoDMiranda"
          className="social-icon"
          target="blank"
        >
          <DiGithubBadge size="40px" />
        </a>
        <a
          href="https://www.linkedin.com/in/hugo-david-miranda-betancourt-3626b6235/"
          className="social-icon"
          target="blank"
        >
          <AiFillLinkedin size="30px" />
        </a>
      </div>
      <div className="footer-menu-container">
        <Link className="footer-link" to="/contact">
          Contact Me
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
