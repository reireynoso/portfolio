import React from 'react'
import {withRouter}  from 'react-router-dom'

const HomeIcon = ({location: {pathname}}) => {
    return (
        <>
        {
            pathname === "/" ? null : <div className="home-icon">
                <a rel="noopener noreferrer" href="https://www.linkedin.com/in/reinald-reynoso622/" target="_blank">
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a rel="noopener noreferrer" href="https://github.com/reireynoso" target="_blank">
                    <i className="fab fa-github fa-2x"></i>
                </a>
                <a rel="noopener noreferrer" href="https://medium.com/@reireynoso" target="_blank"> 
                    <i className="fab fa-medium fa-2x"></i>
                </a>
            </div>
        }
        </>
    )
}

export default withRouter(HomeIcon)