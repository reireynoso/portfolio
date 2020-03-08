import React from 'react'
import Header from './Header'

const Home = () => {
    return (
        <div>
            <div className="logo">
                <i className="fas fa-laptop-code fa-3x"></i>
            </div>
            <div className="landing-page">
                <h1 className="lg-heading">Reinald <span className="last-name">Reynoso</span></h1>
                <h2 className="sm-heading">Full Stack Web Developer and Educator</h2>
            </div>
            <Header/>
            <div className="icons">
                <a href="" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a>
                <a href="" target="_blank"><i class="fab fa-github fa-2x"></i></a>
                <a href="" target="_blank"> <i class="fab fa-medium fa-2x"></i></a>
            </div>
        </div>
    )
}

export default Home