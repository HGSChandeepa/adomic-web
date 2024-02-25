import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "One Tender",
    img: "/ot.png",
    desc: " A platform for Easy access all the tenders across Australia. It is a platform that provides a comprehensive list of tenders from various industries",
  },
  {
    id: 2,
    title: "All In One AI",
    img: "/allinone.png",
    desc: "A plat form where content creators can Genarate scripts for their videos. It uses AI to generate the scripts.Images and videos can be generated using AI.Also Code snippets can be generated using AI.",
  },
  {
    id: 3,
    title: "Grocery Made Easy",
    img: "/grocery.png",
    desc: "A mobile application that can track your grocery list. It can also generate reports and graphs based on your grocery list.And pay your bills using the app.",
  },
  {
    id: 4,
    title: "SWC Curtains",
    img: "/swc.png",
    desc: "A website for a curtain company. It is a platform that provides a comprehensive list of curtains from various industries with interactive UI.and payment gateway.with quatations email sending.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {/* <button>See Demo</button> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
