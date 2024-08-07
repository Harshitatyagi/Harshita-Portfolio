import React, { useState, useEffect } from "react";
import "../Css/Skills.css";
import { motion } from "framer-motion";
import {
  IoLogoJavascript,
  IoLogoReact,
  IoLogoNodejs,
  IoLogoCss3,
  IoLogoHtml5,
} from "react-icons/io5";
import {
  SiExpress,
  SiVisualstudio,
  SiCplusplus,
  SiPostman,
  SiMongodb,
  SiNetlify,
  SiRender,
  SiMysql,
} from "react-icons/si";
import { FaGitAlt, FaGithub } from "react-icons/fa";

const SkillBox = ({ Reacticon, title }) => {
  return (
    <div className="skillIconContainer">
      <Reacticon className="reactIcon" />
      <div className="iconTitleContainer">
        <p className="iconTitle">{title}</p>
      </div>
    </div>
  );
};

const Skills = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const skillsHeading = "Professional Skills";

  return (
    <div className="skillsContainerWrapper" id="Skills">
      <motion.div
        className="skillsContainer"
        initial={{ opacity: 0, y: [-50], scale: 0 }}
        whileInView={{ opacity: 1, y: [0], scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3>
          {skillsHeading
            .split("")
            .map((char, index) =>
              char === " " ? (
                windowWidth <= 400 ? (
                  <br key={index} />
                ) : (
                  " "
                )
              ) : (
                <span key={index}>{char}</span>
              )
            )}
        </h3>
      </motion.div>
      <motion.div
        className="skillsBox"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <SkillBox Reacticon={IoLogoJavascript} title="Javascript" />
        <SkillBox Reacticon={IoLogoReact} title="ReactJS" />
        <SkillBox Reacticon={IoLogoNodejs} title="NodeJS" />
        <SkillBox Reacticon={SiExpress} title="ExpressJS" />
        <SkillBox Reacticon={FaGitAlt} title="Git" />
        <SkillBox Reacticon={FaGithub} title="Github" />
        <SkillBox Reacticon={IoLogoCss3} title="CSS3" />
        <SkillBox Reacticon={IoLogoHtml5} title="HTML5" />
        <SkillBox Reacticon={SiVisualstudio} title="Visual Studio Code" />
        <SkillBox Reacticon={SiCplusplus} title="C++" />
        <SkillBox Reacticon={SiPostman} title="Postman" />
        <SkillBox Reacticon={SiMongodb} title="MongoDB" />
        <SkillBox Reacticon={SiMysql} title="MySQL" />
        <SkillBox Reacticon={SiNetlify} title="Netlify" />
        <SkillBox Reacticon={SiRender} title="Render" />
      </motion.div>
    </div>
  );
};

export default Skills;


