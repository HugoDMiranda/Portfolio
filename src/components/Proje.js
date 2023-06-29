import "../stylesheets/styleComponents/Proje.css";

function Proje({ projectName, page, href, tecno, description, images }) {
  return (
    <div
      className={
        projectName === "Anime Reviews"
          ? "carousel-item active"
          : "carousel-item"
      }
      data-bs-interval="10000"
    >
      <h1 className="name-project">{projectName}</h1>
      <div className="proje-content">
        <a href={page} className="video-container" target="_blanck">
          <div
            class="uk-position-relative uk-visible-toggle uk-light slider"
            tabindex="-1"
            uk-slider="center: true; autoplay: true; autoplay-interval: 2000;"
          >
            <ul class="uk-slider-items ">
              {images.map((img) => (
                <li>
                  <img src={img} alt="" />
                </li>
              ))}
            </ul>
          </div>
        </a>
        <div className="proje-text">
          <div className="description">
            <h2>Description</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="proje-tect">
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
  );
}

export default Proje;
