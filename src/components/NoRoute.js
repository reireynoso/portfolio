import React from 'react'
import {Link} from 'react-router-dom'
import {FaHome} from 'react-icons/fa'

const NoRoute = () => {
    return (
        <>
        <div className="link-container">
            <div style={{textAlign: "center"}}>
                <h1>Sorry, not sure how you ended up here but that means there's nothing on this page :(</h1>
                <Link to="/" className="redirect-link"><FaHome size={24}/> Home</Link>
            </div>
        </div>
        </>
    )
}

export default NoRoute