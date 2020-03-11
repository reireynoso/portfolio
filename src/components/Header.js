import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className="nav">
            <div className="page-links">
                <Link className="links" to="/about">About</Link>
                <Link className="links" to="/projects">Projects</Link>
                <Link className="links" to="/blogs">Blogs</Link>
                <Link className="links" to="/contact">Resume</Link>
            </div>
        </div>
    )
}

export default Header