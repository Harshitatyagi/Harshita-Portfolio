import React from 'react'
import { motion } from 'framer-motion'
import "../Css/Project.css"
import ProjectCard from "./ProjectCard"
import memorify from  "../Images/memorify.png"
import Todo from "../Images/Todo.png"
import dijkstra from "../Images/dijkstra.png"
import doubt from "../Images/doubt.png"
import portfolio from "../Images/portfolio.png"
import tour from "../Images/tour.png"

<<<<<<< HEAD
=======


>>>>>>> f75bb6acba75f5af2f675a2c7a1009ac12a197f8
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
<<<<<<< HEAD
            
     
      <ProjectCard projectName="DoubtSmasher" projectImage={doubt}/>   
      <ProjectCard projectName="Memorify" projectImage={memorify}/>
       <ProjectCard projectName="ShortestPathfinder" projectImage={dijkstra}/>
      <ProjectCard projectName="ToDoApp"  projectImage={Todo}/>
      <ProjectCard projectName="MyPortfolio" projectImage={portfolio}/>
      <ProjectCard projectName="TourPlans" projectImage={tour}/>
=======
      <ProjectCard projectName="Doubt-Smasher" projectImage={doubt}/>          
      <ProjectCard projectName="Memorify" projectImage={memorify}/>
       <ProjectCard projectName="Shortest Pathfinder" projectImage={dijkstra}/>
      <ProjectCard projectName="To-Do App"  projectImage={todo}/>
      <ProjectCard projectName="My Portfolio" projectImage={portfolio}/>
      <ProjectCard projectName="Tour Plans" projectImage={tour}/>
>>>>>>> f75bb6acba75f5af2f675a2c7a1009ac12a197f8
    </div>
    </div>
  )
}

export default Project
<<<<<<< HEAD
 
=======

>>>>>>> f75bb6acba75f5af2f675a2c7a1009ac12a197f8
