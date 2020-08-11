import React from 'react'

const Home = () => {
    return (
        <div>
            <div className="home">
                <div className="logo">
                    <i className="fas fa-laptop-code fa-3x"></i>
                </div>
                <div className="landing-page">
                    <h1 className="lg-heading">Reinald Reynoso</h1>
                    <h2 className="sm-heading">Full Stack Web Developer and Educator</h2>
                </div>

                <div className="icons">
                    <a rel="noopener noreferrer" href="https://www.linkedin.com/in/reinald-reynoso622/" target="_blank"><i className="fab fa-linkedin fa-2x"></i></a>
                    <a rel="noopener noreferrer" href="https://github.com/reireynoso" target="_blank"><i className="fab fa-github fa-2x"></i></a>
                    <a rel="noopener noreferrer" href="https://medium.com/@reireynoso" target="_blank"> <i className="fab fa-medium fa-2x"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Home