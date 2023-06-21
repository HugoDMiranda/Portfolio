import "../stylesheets/styleComponents/Proje.css";
import WeatherAppVideo from "../img/projects/WeatherApp.mp4";
import NoteAppVideo from "../img/projects/NoteApp.mp4";
import PokedexAppVideo from "../img/projects/PokedexApp.mp4";
import CalculatorAppVideo from "../img/projects/CalculatorApp.mp4";
import QuotesAppVideo from "../img/projects/QuotesApp.mp4";

function Proje({ projectName, page, href, tecno, description }) {
  function videoPlay(e) {
    e.target.play();
  }

  function videoPause(e) {
    e.target.pause();
  }

  return (
    <div
      className={
        projectName === "NoteApp" ? "carousel-item active" : "carousel-item"
      }
      data-bs-interval="5000"
    >
      <h1 className="name-project">{projectName}</h1>
      <div className="proje-content">
        <a href={page} className="video-container" target="_blanck">
          <video
            src={
              projectName === "NoteApp"
                ? NoteAppVideo
                : projectName === "Quotes"
                ? QuotesAppVideo
                : projectName === "WeatherApp"
                ? WeatherAppVideo
                : projectName === "Pokedex"
                ? PokedexAppVideo
                : projectName === "Calculator"
                ? CalculatorAppVideo
                : null
            }
            className="d-block w-100 img-project"
            alt={projectName}
            type="video/mp4"
            muted
            loop
            onMouseEnter={videoPlay}
            onMouseOut={videoPause}
          ></video>
        </a>
        <div className="proje-text">
          <div className="description">
            <h2>Description</h2>
            <p>{description}</p>
          </div>
          <h2 className="tec-used">Used technologies</h2>
          <ul className="tec-list2">
            {tecno.map((tecno) => {
              return (
                <li key={projectName + tecno} className="project-tec">
                  {tecno}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Proje;
