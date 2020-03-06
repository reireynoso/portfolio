import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className="nav">
            <div className="page-links">
                <Link className="links" to="/about">About</Link>
                <Link className="links" to="/projects">Projects</Link>
                <Link className="links" to="/blogs">Blogs</Link>
                <Link className="links" to="/contact">Contact</Link>
            </div>

            {/* <div className="icons">
                <div><i class="fab fa-linkedin fa-2x"></i></div>
                <div><i class="fab fa-github fa-2x"></i></div>
                <div> <i class="fab fa-medium fa-2x"></i></div>
            </div> */}
        </div>
    )
}

export default Header