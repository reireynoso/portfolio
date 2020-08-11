import React from 'react'
import {Link} from 'react-router-dom'
// import Header from './Header'
import HomeIcon from './HomeIcon'
import {DiRor, DiRuby, DiJavascript1, DiCss3, DiHtml5, DiGithubBadge, DiReact, DiNodejs} from 'react-icons/di'

const About = () => {
    return (
            <>
            <HomeIcon/>
            {/* <Header/> */}
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
                        Full Stack Web Developer with a proficiency in the following: Javascript, Ruby, React, Ruby on Rails, HTML/CSS as the Software Engineering Coach for Flatiron School. I have experience with web applications, pair programming and team collaboration. 
                        
                        <br/>
                        <br/>

                        I take pride in my work ethic. I have always put in my best effort into what I do whether it is for personal growth or helping others grow. Once I set my mind into goal, I become absorbed and dedicated to accomplishing it. I consider myself a flexible individual. I am capable of doing things by myself and I can also work with others to complete a goal. I enjoy creating content related to programming through blogs, lecture videos, and Github labs.

                        <br/>
                        <br/>

                        I bring strong skills in management, instruction and communication as well as an exceptional background with complex problem solving and educational technology implementation. I also have four years experience teaching middle school math, and have earned a Bachelor’s Degree in Mathematics, and a Master’s Degree in Educational Technology. 

                        <br/>
                        <br/>

                        If you think I would be a good fit for your company, please do not hesitate to reach out on my <a id="linked-in" target="_blank" href="https://www.linkedin.com/in/reinald-reynoso622/" rel="noopener noreferrer">LinkedIn</a>
                       
                        </p>
                    </div>
            </div>
            </>
    )
}

export default About