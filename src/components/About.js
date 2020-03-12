import React from 'react'
// import {Link} from 'react-router-dom'
import HomeIcon from './HomeIcon'
import {DiRor, DiRuby, DiJavascript1, DiCss3, DiHtml5, DiGithubBadge, DiReact, DiNodejs} from 'react-icons/di'

const About = () => {
    return (
        
            <div className="link-container">
                <HomeIcon/>
                    <h1 className="content-title">About Me</h1>
                    <div className="content-info">
                        <img className="profile" alt="rei-linkedin" src="https://raw.githubusercontent.com/reireynoso/modern_portfolio/master/dist/img/personal.JPG"/>
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
                        <p className="content-intro">
                        Full stack web developer with four years of experience teaching middle school math, Bachelor’s Degree in Mathematics, and a Master’s Degree in Educational Technology. 
                        
                        <br/>
                        <br/>

                        I take pride in my work ethic. I have always put in my best effort into what I do whether it is for personal growth or helping others grow. Once I set my mind into goal, I become absorbed and dedicated to accomplishing it. I consider myself a flexible individual. I am capable of doing things by myself and I can also work with others to complete a goal. 

                        <br/>
                        <br/>

                        I bring strong skills in management, instruction and communication as well as an exceptional background with complex problem solving and educational technology implementation. I have experience with React, Redux, Javascript, Ruby, Ruby on Rails, HTML/CSS and Restful API.

                        <br/>
                        <br/>

                        If you think I would be a good fit for your company, please do not hesitate to reach out on my <a id="linked-in" target="_blank" href="https://www.linkedin.com/in/reinald-reynoso622/" rel="noopener noreferrer>LinkedIn</a>
                       
                        </p>
                    </div>
            </div>
    )
}

export default About