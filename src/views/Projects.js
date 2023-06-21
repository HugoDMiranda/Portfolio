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
          id="carouselExampleIndicators"
          className="carousel carousel-fade"
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
            <div className="carousel-indicators">
              <button
                className="indicator-button"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                className="indicator-button"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                className="indicator-button"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
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
              <a
                className="repository"
                href="https://github.com/HugoDMiranda"
                target="_blanck"
              >
                <DiGithubBadge size="200px" className="icon-repository" />
                <h4>My repository</h4>
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </motion.div>
  );
}

export default Projects;
