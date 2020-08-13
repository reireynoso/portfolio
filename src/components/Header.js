import React, {useState} from 'react'
import {NavLink}  from 'react-router-dom'
import {FaUserCircle, FaTerminal, FaFileAlt, FaPenFancy, FaHome, FaBookReader} from 'react-icons/fa'
import AnimateComponent from './AnimateComponent'

const Header = () => {
    const [showHeader, setShowHeader] = useState(false)
    return (
        <>
            <div className="nav-icon" onClick={() => setShowHeader(!showHeader)}>  
                <div className={`btn-line ${showHeader ? "open" : ""}`}></div>
                <div className={`btn-line ${showHeader ? "open" : ""}`}></div>
                <div className={`btn-line ${showHeader ? "open" : ""}`}></div>
            </div>
            <AnimateComponent show={showHeader}>
            <div className="nav-tab">
                <div className="nav-links">
                        <NavLink onClick={() => setShowHeader(false)} className="links" activeClassName="link-active" exact to="/"><FaHome size={25}/> Home</NavLink>
                        <NavLink onClick={() => setShowHeader(false)} className="links" activeClassName="link-active" to="/about"><FaUserCircle size={25}/> About</NavLink>
                        <NavLink onClick={() => setShowHeader(false)} className="links" activeClassName="link-active" to="/projects"><FaTerminal size={25}/> Projects</NavLink>
                        <NavLink onClick={() => setShowHeader(false)} className="links" activeClassName="link-active" to="/content"><FaBookReader size={25}/> Content</NavLink>
                        <NavLink onClick={() => setShowHeader(false)} className="links" activeClassName="link-active" to="/blogs"><FaPenFancy size={25}/> Blogs</NavLink>
                        <NavLink onClick={() => setShowHeader(false)} className="links" activeClassName="link-active" to="/resume"><FaFileAlt size={25}/> Resume</NavLink>
                    </div>
            </div>
            </AnimateComponent>
        </>
    )
}

export default Header