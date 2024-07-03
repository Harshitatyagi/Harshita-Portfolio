import React from 'react'
import { motion } from 'framer-motion'
import {AiOutlineEye} from "react-icons/ai"
import { FaGithubAlt } from 'react-icons/fa'

const ProjectCard = ({projectName,projectImage}) => {
  const desc = {
    
    Doubt-SmasherDesc:"Doubt-Smasher is an interactive platform designed to help users clarify and resolve their doubts. 
                          It is place where they can engage themselves in discussions to enhance learning and understanding.
                               Built for the students of our college"
    Doubt-SmasherGithub: "https://doubtsmasher.netlify.app/"
    Doubt-SmasherWebsite: "https://github.com/Harshitatyagi/DoubtSmasher_frontend"
  
     MemorifyDesc : "Memorify is a sleek MERN app designed for sharing your memories. Users can post photos with captions, like, and edit their posts seamlessly. 
                       It's the perfect platform to capture and cherish your moments.",
     MemorifyGithub : "https://github.com/Harshitatyagi/my-memories-client",
     MemorifyWebsite : "https://harshitamemories.netlify.app/",

    Shortest PathfinderDesc:"Shortest Pathfinder is an efficient tool that implements Dijkstra's algorithm to find the shortest paths in graphs.
                             It's an ideal solution for visualizing and understanding pathfinding for various applications. ",
    Shortest PathfinderWebsite:"https://github.com/Harshitatyagi/dijkstraAlgorithm",
    Shortest PathfinderGithub:"https://dijkstra-algorithm11.netlify.app/",
    
   My PortfolioDesc : "Dynamic personal portfolio showcasing skills and projects,
                         built with React.js for a captivating and interactive web experience.",
    My PortfolioGithub : "https://github.com/Harshitatyagi/Harshita-Portfolio",
    My PortfolioWebsite : "https://harshita11portfolio.netlify.app/",
    
    To-Do AppDesc : "To-Do App is a straightforward tool designed to help you manage your daily tasks effectively. Built using React.js,
                            it ensures a smooth and efficient way to keep your schedule on track.", 
   To-Do AppWebsite : "https://harshita-todo.netlify.app/",
    To-Do AppGithub :  "https://github.com/Harshitatyagi/react-todo-app", 

      Tour PlansDesc : "A Tour plan App created using React.js which has tours cards with details of locations to visit", 
   Tour PlansWebsite : "https://tourism11react.netlify.app",
    Tour PlansGithub :  "https://github.com/Harshitatyagi/Tourism_cards", 

    
  }


  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{ duration: 0.8 }}
    className='projectCard'>
   

      <a href={desc[projectName + 'Website']} target="_blank"  rel="noopener noreferrer">
      <div className='projectImageContainer'>
      <img src={projectImage } alt="project-view"/>
        <AiOutlineEye className='viewIcon'/>
      </div>
      <div className='projectInfo'>
        <h2>{projectName}</h2>
        <a href={desc[projectName + 'Github']} target="_blank" rel="noopener noreferrer"><FaGithubAlt className='githubIcon'/></a>
      </div>
      <p>{desc[projectName + 'Desc']}</p>
      </a>
    </motion.div>
  )
}

export default ProjectCard
