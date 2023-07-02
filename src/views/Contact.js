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
      <h2>CONTACT ME</h2>
      <ContactSection />
    </motion.div>
  );
}

export default Contact;
