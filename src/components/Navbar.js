import "../stylesheets/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbarContainer navbar navbar-expand-lg  navbar-dark">
      <div className="container-fluid ">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto">
            <Link className="nav-link" to="/">
              AboutMe
            </Link>
            <Link className="nav-link" to="/projects">
              Projects
            </Link>
            <Link className="nav-link" to="/certifications">
              Certifications
            </Link>
            <Link className="nav-link" to="/contact">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
