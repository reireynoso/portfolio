import React from 'react'
import HomeIcon from './HomeIcon'
import {DiRor, DiRuby, DiJavascript1, DiCss3, DiHtml5, DiGithubBadge, DiReact, DiNodejs} from 'react-icons/di'

const About = () => {
    return (
        
            <div className="link-container">
                {/* <div className="home-icon">
                    <i className="fas fa-home fa-3x"></i>
                </div> */}
                <HomeIcon/>
                {/* <div className="link-container-inner"> */}
                    <h1 className="content-title">About Me</h1>
                    <div className="content-info">
                        <img className="profile" src="https://raw.githubusercontent.com/reireynoso/modern_portfolio/master/dist/img/personal.JPG"/>
                        <div className="dev-icons">
                            <DiRor size={32}/>
                            <DiRuby size={32}/>
                            <DiJavascript1 size={32}/>
                            <DiReact size={32}/>
                            <DiNodejs size={32}/>
                            <DiCss3 size={32}/>
                            <DiHtml5 size={32}/>
                            <DiGithubBadge size={32}/>
                        </div>
                        <p className="content-intro">Flatiron School graduate with a focus in full stack web development, four years experience teaching middle school math, Bachelor’s Degree in Mathematics, and a Master’s Degree in Educational Technology. I bring strong skills in management, instruction and communication as well as an exceptional background with complex problem solving and educational technology implementation. I have experience with React, Redux, Javascript, Ruby, Ruby on Rails, HTML/CSS and Restful API.</p>
                    </div>
                {/* </div> */}
            </div>
    )
}

export default About