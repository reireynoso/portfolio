import React from 'react'
import {Link} from 'react-router-dom'

const HomeIcon = () => {
    return (
        <div className="home-icon">
            <Link to="/">
                <i className="fas fa-home fa-2x"></i>
            </Link>
            <a href="" target="_blank">
                <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="" target="_blank">
                <i class="fab fa-github fa-2x"></i>
            </a>
        </div>
    )
}

export default HomeIcon