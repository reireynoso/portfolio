import React from 'react'
import Header from './Header'

const Home = () => {
    return (
        <div className="landing-page">
            <h1 className="lg-heading">Reinald <span className="last-name">Reynoso</span></h1>
            <h2 className="sm-heading">Full Stack Web Developer</h2>
            <Header/>
        </div>
    )
}

export default Home