import "../stylesheets/Navbar.css";
import { Link } from "react-router-dom";
import Media from "react-media";

function Navbar() {
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
            <Media query="(min-width: 992px)">
              {(matches) => {
                return matches ? (
                  <>
                    <Link className="nav-link" to="/">
                      <button>About Me</button>
                    </Link>
                    <Link className="nav-link" to="/projects">
                      <button>Projects</button>
                    </Link>
                    <Link className="nav-link" to="/certifications">
                      <button>Certifications</button>
                    </Link>
                    <Link className="nav-link" to="/contact">
                      <button>Contact Me</button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link className="nav-link" to="/">
                      <button
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        About Me
                      </button>
                    </Link>
                    <Link className="nav-link" to="/projects">
                      <button
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        Projects
                      </button>
                    </Link>
                    <Link className="nav-link" to="/certifications">
                      <button
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        Certifications
                      </button>
                    </Link>
                    <Link className="nav-link" to="/contact">
                      <button
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        Contact Me
                      </button>
                    </Link>
                  </>
                );
              }}
            </Media>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
