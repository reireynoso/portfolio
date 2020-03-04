import React from 'react'
import HomeIcon from './HomeIcon'
const Project = () => {

    return (
        <div className="link-container">
            <HomeIcon/>
            <h1 className="project-content-title">Projects</h1>
            <div className="project-container">
                <h2 className="project-title">Project Title</h2>
                <img className="project-image" src="https://i.ytimg.com/vi/WxmL6egpkKs/hqdefault.jpg" alt=""/>
                <p className="project-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                <div className="project-buttons">
                    <button>Demo</button>
                    <button>Repo</button>
                    <button>Site</button>
                </div>
            </div>
        </div>
    )
}

export default Project