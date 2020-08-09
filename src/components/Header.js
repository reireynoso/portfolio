import React from 'react'
import {FaChevronDown} from 'react-icons/fa'
import {NavLink, withRouter} from 'react-router-dom'

const Header = ({location: {pathname}, history}) => {
    const handleSelect = (e) => {
        history.push(e.target.value)
    }

    return (
        <div className="nav">
            <div className="page-links">
                <NavLink className="links" activeClassName="link-active" exact to="/">Home</NavLink>
                <NavLink className="links" activeClassName="link-active" to="/about">About</NavLink>
                <NavLink className="links" activeClassName="link-active" to="/projects">Projects</NavLink>
                {/* <NavLink className="links" activeClassName="link-active" to="/content">Content</NavLink> */}
                <NavLink className="links" activeClassName="link-active" to="/blogs">Blogs</NavLink>
                <NavLink className="links" activeClassName="link-active" to="/resume">Resume</NavLink>
            </div>
            <div className="dropdown">
                <select value={pathname} onChange={handleSelect} className="dropdown-select">
                   <option value="/">Home</option>
                   <option value="/about">About</option>
                   <option value="/projects">Projects</option>
                   <option value="/blogs">Blogs</option>
                   <option value="/resume">Resume</option>
                </select>
                <div className="dropdown-icon">
                    <FaChevronDown size={18}/>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Header)