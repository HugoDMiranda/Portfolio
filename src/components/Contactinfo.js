import "../stylesheets/styleComponents/Contactinfo.css";
import React from "react";

function Contactinfo({ icon, contacttext }) {
  return (
    <div className="contact-info">
      <i className="contact-icon">{icon}</i>
      <p className="contact-description">{contacttext}</p>
    </div>
  );
}
export default Contactinfo;
