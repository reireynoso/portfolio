import React from 'react'
import {Link} from 'react-router-dom'
import HomeIcon from './HomeIcon'
import {FaUserCircle, FaTerminal, FaFileAlt, FaPenFancy, FaHome, FaBookReader} from 'react-icons/fa'

const NoRoute = () => {
    return (
            <>
            <HomeIcon/>
            <div className="link-container">
                <div style={{textAlign: "center"}}>
                    <h1>Sorry, there's nothing on this page :(</h1>
                    <Link to="/" className="redirect-link"><FaHome size={24}/> Home</Link>
                </div>
            </div>
            </>
    )
}

export default NoRoute