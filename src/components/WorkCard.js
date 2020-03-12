import React from 'react'

const WorkCard = (props) => {
    const {title, company_year, duties} = props.work
    return (
        <div className="work-card">
            <h3>{title}</h3>
            <p>{company_year}</p>
            <ul>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</li>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</li>
            </ul>
        </div>
    )
}

export default WorkCard