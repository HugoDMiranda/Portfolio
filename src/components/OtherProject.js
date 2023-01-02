import "../stylesheets/styleComponents/OtherProjects.css";

function OtherProject({ img, projectName, Github }) {
  return (
    <a className="other-img" href={Github} target="_blank" rel="noreferrer">
      <img src={img} className="card-img-top img-fluid" alt={projectName} />
      <h4 className="text-other">{projectName}</h4>
    </a>
  );
}

export default OtherProject;
