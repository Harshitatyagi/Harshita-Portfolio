import React from 'react'
import { motion } from 'framer-motion'
import "../Css/Project.css"
import ProjectCard from "./ProjectCard"
import memorify from  "../Images/memorify.png"
import Todo from "../Images/Todo.png"
import dijkstra from "../Images/dijkstra.png"
//import wiggles from "../Images/wiggles.png"
//import keeper from "../Images/keeper.png"
//<ProjectCard projectName="mymemoriesclient" projectImage={mymemoriesclient}/>
const Project = () => {
  const projectHeading="Projects";
  return (
    <div className='projectContainerWrapper' id='Project'>
    <motion.div 
    initial={{ x: 0, opacity: 0}}
    whileInView={{ x: [0], y:[-50,0], opacity: 1}}
    transition={{ duration: 1 }}>
    <h3>
    {projectHeading.split("").map((char) => <span>{char}</span>)}
    </h3>
    </motion.div>
    <div className='projectCardContainer'>
      <ProjectCard projectName="Memorify" projectImage={memorify}/>
      <ProjectCard projectName="ToDoApp"  projectImage={Todo}/>
      <ProjectCard projectName="DijkstraAlgorithm" projectImage={dijkstra}/>
    </div>
    </div>
  )
}

export default Project
 //  <ProjectCard projectName="Portfolio"/>

// 