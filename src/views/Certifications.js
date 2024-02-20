import "../stylesheets/Certificates.css";
import Certi from "../components/Certi.js";
import { motion } from "framer-motion";
import certificatesData from "../data/certificates.json";

function Certificates() {
  return (
    <motion.div
      className="row row-cols-1 row-cols-md-2 g-4 cer-container"
      initial={{ opacity: 0, transition: { duration: 0.1 } }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      {certificatesData
        ? certificatesData.map((certificateData) => {
            return (
              <Certi
                key={certificateData.certificate}
                img={certificateData.img}
                certificate={certificateData.certificate}
                link={certificateData.link}
                description={certificateData.description}
              />
            );
          })
        : null}
    </motion.div>
  );
}

export default Certificates;
