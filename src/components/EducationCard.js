import React from 'react'

const EducationCard = (props) => {
    const {school, location_year, program} = props.edu
    return (
        <div className="education-card">
            <h3>{school}</h3>
            <i>{location_year}</i>
            <p>{program}</p>
        </div>
    )
}

export default EducationCard