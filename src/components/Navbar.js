import { useEffect, useState } from "react";
import "../stylesheets/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [view, setView] = useState(false);

  useEffect(() => {
    const mediaQueryCondition = window.matchMedia("( max-width: 992px )");

    function isSmallScreen() {
      return window.matchMedia("( max-width: 992px )").matches;
    }
    // console.log(isSmallScreen());

    setView(isSmallScreen());

    console.log(view);
  }, [view]);

  return (
    <header className="navbarContainer navbar navbar-expand-lg  navbar-dark">
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
              {{
                ...(view ? (
                  <button
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    AboutMe
                  </button>
                ) : (
                  <button>About</button>
                )),
              }}
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
    </header>
  );
}

export default Navbar;
