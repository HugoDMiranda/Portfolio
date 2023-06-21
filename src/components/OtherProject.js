import "../stylesheets/styleComponents/OtherProjects.css";

function OtherProject({ img, projectName, Github, Page }) {
  return (
    <a className="other-img" href={Page} target="_blank" rel="noreferrer">
      <img
        src={img}
        className="card-img-top img-fluid image-proyects"
        alt={projectName}
      />
      <h4 className="text-other">{projectName}</h4>
    </a>
  );
}

export default OtherProject;
