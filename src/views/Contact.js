import ContactSection from "../components/ContactSection.js";
import "../stylesheets/Contact.css";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0, transition: { duration: 0.1 } }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <h1>CONTACT ME</h1>
      <ContactSection />
    </motion.div>
  );
}

export default Contact;
