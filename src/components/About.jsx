import React from "react"
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants";
import SectionWrapper from '../hoc/SectionWrapper'

const ServiceCard = ({ index ,icon,title}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient  p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 0.1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am an experienced Full Stack Developer with expertise in JavaScript,
        TypeScript, Next.js, React.js, Node.js, and MongoDB. I ensure the
        delivery of high-quality web applications with excellent problem-solving
        abilities. I am passionate about creating exceptional user experiences
        and staying up-to-date with the latest industry trends. With meticulous
        attention to detail and a strong technical skill set, I am dedicated to
        contributing to the success of every project. If you are in need of a
        dedicated Full Stack Developer proficient in JavaScript, TypeScript,
        Next.js, React.js, Node.js, and MongoDB, I am confident that I can meet
        your requirements effectively.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About,"about")
