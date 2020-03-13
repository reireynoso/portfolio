import React from 'react'
import HomeIcon from './HomeIcon'
import ProjectCard from './ProjectCard'
import information from '../information'

const Project = () => {

    return (
        <>
        <HomeIcon/>
        <div className="link-container">
            <h1 className="project-content-title">Projects</h1>
            
            <div className="project-container">
                {
                    information.projects.map(project => <ProjectCard key={project.title} project ={project}/>)
                }
            </div>
        </div>
        </>
    )
}

export default Project