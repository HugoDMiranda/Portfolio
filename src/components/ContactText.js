import "../stylesheets/styleComponents/ContactText.css";
import React from "react";

function ContactText() {
  return (
    <div className="contact-text">
      <label className="htext"> Your Name</label>
      <textarea className="textarea" type="text" name="name" id="name" />

      <label className="htext"> Your Email</label>
      <textarea
        className="textarea"
        type="email"
        name="user_email"
        id="user_email"
      />

      <label className="htext"> Message</label>
      <textarea
        className="textarea message"
        name="message"
        type="text"
        id="message"
      />
    </div>
  );
}

export default ContactText;
