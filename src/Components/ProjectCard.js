import React from 'react'
import { motion } from 'framer-motion'
import {AiOutlineEye} from "react-icons/ai"
import { FaGithubAlt } from 'react-icons/fa'

const ProjectCard = ({projectName,projectImage}) => {
  const desc = {
    MemorifyDesc : "A landing page website for Cats developed using HTML, CSS and Bootstrap. It is completely responsive",
     MemorifyGithub : "https://github.com/Harshitatyagi/my-memories-client",
     MemorifyWebsite : "https://harshitamemories.netlify.app/",

    PortfolioDesc : "Dynamic personal portfolio showcasing skills and projects, built with React.js for a captivating and interactive web experience.",
    PortfolioGithub : "https://github.com/reach-anu/Portfolio",
    PortfolioWebsite : "https://anushaka.netlify.app/",

    reacttodoappDesc : "A simple clone of Google keep made using React.js and react-props", 
   reacttodoappWebsite : "https://harshita-todo.netlify.app/",
    reacttodoappGithub :  "https://github.com/Harshitatyagi/react-todo-app", 

    dijkstraAlgorithmDesc:"A comprehensive pet-friendly website which serves as a one-stop destination for all the pet. A group project made in a team of four. ",
    dijkstraAlgorithmWebsite:"https://github.com/Harshitatyagi/dijkstraAlgorithm",
     dijkstraAlgorithmGithub:"https://dijkstra-algorithm11.netlify.app/",
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