import React from 'react'
import HomeIcon from './HomeIcon'
import CodingContentCard from './CodingContentCard'
import information from '../information'

const CodingContent = () => {
    const {labs, lectures} = information
    return (
        <>
        <HomeIcon />
        <div className="link-container">
            <h1 className="coding-content-title">Content</h1>
            
            <h2 className="lectures-content-subtitle">Lecture Videos</h2>
            <div className="lectures-container">
                {
                    lectures.map(project => <CodingContentCard key={project.link} content={project}/>)
                }
            </div>

            <h2 className="labs-content-subtitle">GitHub Labs</h2>
            <div className="labs-container">
                {
                    labs.map(lab => <CodingContentCard key={lab.link} content={lab}/>)
                }
            </div>
        </div>
        </>
    )
}

export default CodingContent