import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          we are here to help you to <br /> grow your business <br /> and move
          faward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "red" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "red" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Wen Design and Development</h2>
          <p>
            we specialize in crafting exceptional web experiences that elevate
            your online presence and drive results. Our team of skilled
            developers and designers are dedicated to bringing your vision to
            life through innovative technology and captivating design. Whether
            you're a startup looking to establish your brand or a seasoned
            enterprise aiming to revamp your digital strategy, we have the
            expertise to deliver tailored solutions that meet your unique needs
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Mobile Apps</h2>
          <p>
            Whether you need a sleek iOS app to captivate iPhone users, a
            dynamic Android app to engage the vast Android audience, or a
            cross-platform solution to reach both markets efficiently, our
            experienced team is dedicated to delivering high-quality,
            feature-rich mobile apps tailored to your unique business needs.
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>UI and UX</h2>
          <p>
            We understand that user experience is paramount in today's
            competitive landscape, which is why our team of talented designers
            focuses on crafting intuitive, visually stunning interfaces that
            engage users and drive conversions. Whether you're looking to revamp
            an existing platform or create a new application from scratch, we
            combine user research, wireframing, prototyping, and usability
            testing to ensure every interaction is seamless and every design
            decision is purposeful.
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        {/* <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div> */}
      </motion.div>
    </motion.div>
  );
};

export default Services;
