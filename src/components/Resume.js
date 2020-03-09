import React from 'react'
import HomeIcon from './HomeIcon'

const Resume = () => {
    return (
        <div className="link-container">
            <HomeIcon/>
            <h1 className="resume-content-title">Resume</h1>
            <div className="education-container">
                <h2 className="resume-content-subtitle">Education</h2>
                <div className="education-card">
                    <h2>Rutgers - Newark</h2>
                    <p>B.A in Mathematics</p>
                </div>
            </div>

            <div className="work-container">
                <h2 className="resume-content-subtitle">Employment History</h2>
                <div className>
                    <h2>Software Engineering Coach</h2>
                    <p>Company: WeWork x Flatiron School</p>
                    <p>Duties</p>
                    <ul>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Resume