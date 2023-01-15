import "../stylesheets/Projects.css";
import Proje from "../components/Proje.js";
import { motion } from "framer-motion";
import ProjectsData from "../data/projects.json";
import otherProjects from "../data/otherProjects.json";
import OtherProject from "../components/OtherProject.js";
import { DiGithubBadge } from "react-icons/di";

function Projects() {
  return (
    <motion.div
      className="projects-container"
      initial={{ opacity: 0, transition: { duration: 0.1 } }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      {ProjectsData ? (
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner img-project-container">
            {ProjectsData &&
              ProjectsData.map((projectdata) => {
                return (
                  <Proje
                    key={projectdata.Project}
                    projectName={projectdata.Project}
                    href={projectdata.Github}
                    page={projectdata.Page}
                    tecno={projectdata.Tecno}
                    description={projectdata.Description}
                  />
                );
              })}
          </div>
          <div className="container-other">
            <h3>Other Projects</h3>
            <div className="otherProjects">
              {otherProjects &&
                otherProjects.map((otherProject) => {
                  return (
                    <OtherProject
                      key={otherProject.Project}
                      img={otherProject.img}
                      Github={otherProject.Github}
                      Page={otherProject.Page}
                      projectName={otherProject.Project}
                    />
                  );
                })}
            </div>
          </div>
          <div className="container-repository">
            <h3>My repository</h3>
            <a
              className="repository"
              href="https://github.com/HugoDMiranda"
              target="_blanck"
            >
              <DiGithubBadge size="55px" className="icon-repository" />
            </a>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      ) : null}
    </motion.div>
  );
}

export default Projects;
