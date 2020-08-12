import React from 'react'
import information from '../information'
import EducationCard from './EducationCard'
import WorkCard from './WorkCard'

const Resume = () => {
    const route = process.env.NODE_ENV
    return (
        <div className="link-container">
            <h1 className="resume-content-title">Resume</h1>
            <a rel="noopener noreferrer" href={route === "production" ? "/portfolio/reinald-resume.pdf" : "/reinald-resume.pdf"} target="_blank" className="resume-download" download>Download Resume</a>
            <div className="education-container">
                <h2 className="resume-content-subtitle">Education</h2>
                {
                information.education.map(edu => <EducationCard key={edu.school} edu ={edu}/>)
                }
            </div>
            

            <div className="work-container">
                <h2 className="resume-content-subtitle">Employment History</h2>
                {
                    information.work.map(wk => <WorkCard key={wk.title} work={wk}/>)
                }
            </div>
        </div>
    )
}

export default Resume