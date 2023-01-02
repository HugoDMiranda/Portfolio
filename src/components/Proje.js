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
        projectName === "WeatherApp"
          ? "carousel-item active "
          : "carousel-item "
      }
    >
      <h1 className="name-project">{projectName}</h1>
      <a href={href} className="video-container" target="_blanck">
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
      <div className="description">
        <h2>Description</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Proje;
