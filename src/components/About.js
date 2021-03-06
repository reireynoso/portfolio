import React from 'react'
import {Link} from 'react-router-dom'
import {DiRor, DiRuby, DiJavascript1, DiCss3, DiHtml5, DiGithubBadge, DiReact, DiNodejs} from 'react-icons/di'

const About = () => {
    return (
        <div className="link-container">
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

                    <Link className="project-view-button" to="/projects">View Projects</Link>

                    <p className="content-intro">
                    
                    <span id="statement">I am a full stack web developer with a passion for UI design and commitment to education.</span>

                    <br/>
                    <br/>
                    
                    I have experience with pair programming, team collaboration and developing web applications with Javascript, NodeJS, ExpressJS, Ruby, React, Ruby on Rails, HTML/CSS, RESTful API architecture and MVC paradigm. I relish creating content related to programming through blogs, lecture videos, and Github labs to contribute resources to the coding community.
                    
                    <br/>
                    <br/>

                    I bring strong skills in instruction, management, and communication as well as an exceptional background with complex problem solving and educational technology implementation. I also have four years experience teaching middle school math, and have earned a Bachelor’s Degree in Mathematics, and a Master’s Degree in Educational Technology. 
                    
                    <br/>
                    <br/>

                    I take pride in my work ethic. I have always put in my best effort into what I do whether it is for personal growth or helping others grow. Once I set my mind into goal, I become absorbed and dedicated to accomplishing it. I consider myself a flexible individual. I am capable of doing things by myself and I can also work with others to complete a goal. 

                    <br/>
                    <br/>

                    As a web developer, I enjoy using my attention to detail, my love for creating things, and my work ethic to have a positive impact on others. 

                    <br/>
                    <br/>

                    If you think I would be a good fit for your company, please do not hesitate to reach out on my <a id="linked-in" target="_blank" href="https://www.linkedin.com/in/reinald-reynoso622/" rel="noopener noreferrer">LinkedIn</a>
                    
                    </p>
                </div>
        </div>
          
    )
}

export default About