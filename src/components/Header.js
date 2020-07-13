import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = ({pathname}) => {
    const path = pathname.replace("/", "")
    return (
        <div className="nav">
            <div className="page-links">
                <NavLink className="links" activeClassName="link-active" to="/about">About</NavLink>
                <NavLink className="links" activeClassName="link-active" to="/projects">Projects</NavLink>
                <NavLink className="links" activeClassName="link-active" to="/blogs">Blogs</NavLink>
                <NavLink className="links" activeClassName="link-active" to="/resume">Resume</NavLink>
            </div>
        </div>
    )
}

export default Header