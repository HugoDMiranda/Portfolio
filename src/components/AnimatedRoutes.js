import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "../views/About";
import Contact from "../views/Contact.js";
import Projects from "../views/Projects.js";
import Certifications from "../views/Certifications.js";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
