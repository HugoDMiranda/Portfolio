import "../stylesheets/styleComponents/Certi.css";

function Certi({ img, alt, certificate, link, description }) {
  return (
    <div className="col ind-cer-container">
      <div className="card">
        <img src={img} className="card-img-top img-fluid" alt={certificate} />
        <div className="card-body">
          <h2 className="card-title">{certificate}</h2>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Certi;
