import React from 'react'

const ProjectCard = (props) => {
    const {title, projectImage, description, demoLink, repoLink, siteLink} = props.project
    return (
        <div className="project-card">
            <h2 className="project-title">{title}</h2>
            <img className="project-image" src={projectImage} alt={title}/>
            <p className="project-description">{description}</p>

            <div className="project-buttons">
                <a rel="noopener noreferrer" target="_blank" href={demoLink}>
                    <button disabled={!demoLink}>Demo</button>
                </a>
                <a rel="noopener noreferrer" target="_blank" href={repoLink}>
                    <button>Repo</button>
                </a>
                <a rel="noopener noreferrer" target="_blank" href={siteLink}>
                    <button disabled={!siteLink}>Site</button>
                </a>
            </div>
        </div>
    )
}

export default ProjectCard