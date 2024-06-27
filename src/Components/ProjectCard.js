import React from 'react'
import { motion } from 'framer-motion'
import {AiOutlineEye} from "react-icons/ai"
import { FaGithubAlt } from 'react-icons/fa'

const ProjectCard = ({projectName,projectImage}) => {
  const desc = {
    DoubtSmasherDesc:
    DoubtSmasherGithub:
    DoubtSmasherWebsite:
  
    MemorifyDesc : "",
     MemorifyGithub : "https://github.com/Harshitatyagi/my-memories-client",
     MemorifyWebsite : "https://harshitamemories.netlify.app/",

    dijkstraAlgorithmDesc:" ",
    dijkstraAlgorithmWebsite:"https://github.com/Harshitatyagi/dijkstraAlgorithm",
     dijkstraAlgorithmGithub:"https://dijkstra-algorithm11.netlify.app/",
    
    PortfolioDesc : "Dynamic personal portfolio showcasing skills and projects, built with React.js for a captivating and interactive web experience.",
    PortfolioGithub : "https://github.com/Harshitatyagi/Harshita-Portfolio",
    PortfolioWebsite : "https://harshita11portfolio.netlify.app/",
    
    reacttodoappDesc : "A simple TodoApp to keep along your daily schedule on track.", 
   reacttodoappWebsite : "https://harshita-todo.netlify.app/",
    reacttodoappGithub :  "https://github.com/Harshitatyagi/react-todo-app", 

    
     blogappDesc : "A Blog website for technical articles developed using react", 
   blogappWebsite : "https://blogreact11.netlify.app/",
    blogappGithub :  "https://github.com/Harshitatyagi/blog_react_app", 

      tourDesc : "A simple clone of Google keep made using React.js and react-props", 
   tourWebsite : "https://tourism11react.netlify.app",
    tourGithub :  "https://github.com/Harshitatyagi/Tourism_cards", 

    
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
