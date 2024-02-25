import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Adomic
        </motion.span>
        <div className="social">
          <a href="https://web.facebook.com/adomicarts">
            <img
              src="/facebook.png"
              alt="https://web.facebook.com/adomicarts"
            />
          </a>

          <a href="https://www.youtube.com/channel/UC25afovsrhvtrli23D2rkFw">
            <img
              src="/youtube.png"
              alt="https://www.youtube.com/channel/UC25afovsrhvtrli23D2rkFw"
            />
          </a>
          {/* <a href="https://medium.com/@saminchandeepa">
            <img src="/dribbble.png" alt="https://medium.com/@saminchandeepa" />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
