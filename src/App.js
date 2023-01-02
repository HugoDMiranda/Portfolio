import "./App.css";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer.js";
import { motion } from "framer-motion";
import AnimatedRoutes from "./components/AnimatedRoutes.js";

function App() {
  return (
    <Router>
      <motion.div
        className="App"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: "tween", duration: 1 }}
      >
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </motion.div>
    </Router>
  );
}

export default App;
