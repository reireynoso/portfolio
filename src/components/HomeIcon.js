import React from 'react'
import {Link} from 'react-router-dom'

const HomeIcon = () => {
    return (
        <div className="home-icon">
            <Link to="/">
                <i className="fas fa-home fa-2x"></i>
            </Link>
            <a href="https://www.linkedin.com/in/reinald-reynoso622/" target="_blank">
                <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://github.com/reireynoso" target="_blank">
                <i className="fab fa-github fa-2x"></i>
            </a>
        </div>
    )
}

export default HomeIcon