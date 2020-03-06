import React from 'react'
import {Link} from 'react-router-dom'

const HomeIcon = () => {
    return (
        <div className="home-icon">
            <Link to="/">
                <i className="fas fa-home fa-2x"></i>
            </Link>
        </div>
    )
}

export default HomeIcon