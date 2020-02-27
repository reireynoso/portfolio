import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className="nav">
            <div className="page-links">
                <Link className="links" to="/">Home</Link>
                <Link className="links" to="/About">About</Link>
            </div>

            <div className="icons">
                <div>Somthing</div>
                <div>Else</div>
            </div>
        </div>
    )
}

export default Header