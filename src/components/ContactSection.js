import React from "react";
import "../stylesheets/styleComponents/ContactSection.css";
import Contactinfo from "./Contactinfo.js";
import { DiGithubBadge } from "react-icons/di";
import { AiFillLinkedin, AiFillPhone, AiOutlineMail } from "react-icons/ai";
import emailjs from "emailjs-com";
import { useRef } from "react";
import swal from "sweetalert";
import ContactText from "./ContactText";

function ContactSection() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xzk8fko",
        "template_y29bm7s",
        form.current,
        "ApV9hbqQsGMQ3NhlL"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent");
          swal("Message sent", "success", "success");
        },
        (error) => {
          console.log(error.text);
          console.log("message error");
        }
      );
  };

  return (
    <div className="inner-container">
      <div className="sections">
        <div className="left">
          <Contactinfo
            icon={<DiGithubBadge size="100px" />}
            contacttext="HugoD.Miranda"
          />
          <Contactinfo
            icon={<AiFillLinkedin size="100px" />}
            contacttext="Hugo David Miranda Betancourt"
          />
          <Contactinfo
            icon={<AiFillPhone size="100px" />}
            contacttext="312 7989399"
          />
          <Contactinfo
            icon={<AiOutlineMail size="100px" />}
            contacttext="hdmirandab@hotmail.com"
          />
        </div>
        <form className="right" id="form" ref={form} onSubmit={sendEmail}>
          <ContactText />
          <button
            className="btn btn-secondary contact-button"
            value="Send"
            type="submit"
            id="button"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactSection;
