import React from 'react'
import HomeIcon from './HomeIcon'
import information from '../information'
import EducationCard from './EducationCard'
import WorkCard from './WorkCard'

const Resume = () => {
    return (
        <div className="link-container">
            <HomeIcon/>
            <h1 className="resume-content-title">Resume</h1>
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