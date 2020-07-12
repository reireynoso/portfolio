import React from 'react'
import {Link} from 'react-router-dom'

const Header = ({pathname}) => {
    const path = pathname.replace("/", "")
    return (
        <div className="nav">
            <div className="page-links">
                <Link className={`links ${path === "about"? "link-active" : ""}`} to="/about">About</Link>
                <Link className={`links ${path === "projects"? "link-active" : ""}`} to="/projects">Projects</Link>
                <Link className={`links ${path === "blogs"? "link-active" : ""}`} to="/blogs">Blogs</Link>
                <Link className={`links ${path === "resume"? "link-active" : ""}`} to="/resume">Resume</Link>
            </div>
        </div>
    )
}

export default Header