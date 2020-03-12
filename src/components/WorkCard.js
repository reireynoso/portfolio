import React from 'react'

const WorkCard = (props) => {
    const {title, company_year, duties} = props.work
    return (
        <div className="work-card">
            <h3>{title}</h3>
            <p>{company_year}</p>
            <ul>
                {
                    duties.map(duty => <li key={duty}>{duty}</li>)
                }
            </ul>
        </div>
    )
}

export default WorkCard