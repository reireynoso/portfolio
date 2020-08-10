import React, {useState} from 'react';
import { Route, Switch, NavLink } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Blog from './components/Blog'
import Resume from './components/Resume';
import CodingContent from './components/CodingContent'
// import Header from './components/Header'
import AnimateComponent from './components/AnimateComponent'
import Particles from 'react-particles-js';
import {IoMdClose, IoMdMenu} from 'react-icons/io'

const App = () => {
  const [showHeader, setShowHeader] = useState(false)
  return (
    <div className="App">  
        <div className="nav-open" onClick={() => setShowHeader(true)}>
            <IoMdMenu size={40}/>
        </div>
        <AnimateComponent show={showHeader}>
          <div className="nav-tab">
              <div className="nav-close" onClick={() => setShowHeader(false)}>
                <IoMdClose size={40}/>
              </div>
              <div className="nav-links">
                    <NavLink onClick={() => setShowHeader(false)} className="links" activeClassName="link-active" exact to="/">Home</NavLink>
                    <NavLink onClick={() => setShowHeader(false)} className="links" activeClassName="link-active" to="/about">About</NavLink>
                    <NavLink onClick={() => setShowHeader(false)} className="links" activeClassName="link-active" to="/projects">Projects</NavLink>
                    <NavLink onClick={() => setShowHeader(false)} className="links" activeClassName="link-active" to="/content">Content</NavLink>
                    <NavLink onClick={() => setShowHeader(false)} className="links" activeClassName="link-active" to="/blogs">Blogs</NavLink>
                    <NavLink onClick={() => setShowHeader(false)} className="links" activeClassName="link-active" to="/resume">Resume</NavLink>
                </div>
          </div>
        </AnimateComponent>
        <Particles
            params={{
            		particles: {
                  number: {
                      value: 60,
                  },
            			line_linked: {
                            width: 2
            			}
                },
                interactivity: {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    },
                    "modes": {
                        "grab": {
                            "distance": 200,
                            "opacity": 1
                        }
                    }
                }
            }}
          />
        <Switch>
          <Route path="/resume" component={Resume}/>
          <Route path="/blogs" component={Blog}/>
          <Route path="/content" component={CodingContent}/>
          <Route path="/projects" component={Project}/>
          <Route path="/about" component={About}/>
          <Route exact path="/" component={Home}/> 
        </Switch>
    </div>
  );
}

export default App;
