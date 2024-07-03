import React from 'react'
import "../Css/About.css" 
import { motion } from 'framer-motion'
import about from "../Images/about.webp"
import { Tilt } from 'react-tilt'

const About = () => {
  const aboutHeading="About";
  return (
    <div className='aboutContainerWrapper' id='About'>
      <motion.h3 
      initial={{ x: 0, opacity: 0}}
      whileInView={{ x: [0], y:[-50,0], opacity: 1}}
      transition={{ duration: 1 }}
      >
        {aboutHeading.split("").map((char)=> <span>{char}</span>)}
      </motion.h3>
      <div className='aboutContainer'>
        <Tilt className='tiltEffect'>
        <motion.img 
        initial={{ x: 0, opacity: 0}}
        whileInView={{ x: [-100,0], y:[0], opacity: 1}}
        transition={{ duration: 1 }}
        src={about} 
        className="aboutIllustration floatingAnimation"
        alt="about-img"
        >
        </motion.img>
        </Tilt>
        <motion.h4 
        initial={{ x: 0, opacity: 0}}
        whileInView={{ x: [100,0], y:[0], opacity: 1}}
        transition={{ duration: 1 }}
        className='aboutSectionText'
        >
        
          I'm a final year student pursuing <span className='highlightText'>B.Tech in Electrical Engineering</span> from NIT Raipur, Chhatissgarh. 
          My journey in web development began out of a curiosity to understand the digital world better and quickly evolved into a passion. 
          Specializing in  <span className='highlightText'>React.js</span>, I enjoy creating responsive, user-centric web applications that provide seamless experiences.

           <br/><br/> 
           Beyond academics, I have immersed myself in various projects that have allowed me to hone my skills in front-end development. I thrive on solving complex problems and continually 
           seek out opportunities to learn and grow in the ever-evolving tech landscape.If you're a 
           like-minded and have a project in mind, let’s <a href='#Contact'>
           <span className='highlightText'>connect</span></a> and create something remarkable together. 
          
           Thank you for visiting my portfolio!
        </motion.h4>
      </div>
    </div>
  )
}

export default About
