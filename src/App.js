import React, {useState} from 'react';
import { Route, Switch, NavLink } from 'react-router-dom'
import {IoMdClose, IoMdMenu} from 'react-icons/io'
import {FaUserCircle, FaTerminal, FaFileAlt, FaPenFancy, FaHome, FaBookReader} from 'react-icons/fa'
import './App.css';
import Particles from 'react-particles-js';
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Blog from './components/Blog'
import Resume from './components/Resume';
import CodingContent from './components/CodingContent'
import AnimateComponent from './components/AnimateComponent'
import NoRoute from './components/NoRoute'


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
                    <NavLink onClick={() => setShowHeader(false)} className="links" activeClassName="link-active" exact to="/"><FaHome size={25}/> Home</NavLink>
                    <NavLink onClick={() => setShowHeader(false)} className="links" activeClassName="link-active" to="/about"><FaUserCircle size={25}/> About</NavLink>
                    <NavLink onClick={() => setShowHeader(false)} className="links" activeClassName="link-active" to="/projects"><FaTerminal size={25}/> Projects</NavLink>
                    <NavLink onClick={() => setShowHeader(false)} className="links" activeClassName="link-active" to="/content"><FaBookReader size={25}/> Content</NavLink>
                    <NavLink onClick={() => setShowHeader(false)} className="links" activeClassName="link-active" to="/blogs"><FaPenFancy size={25}/> Blogs</NavLink>
                    <NavLink onClick={() => setShowHeader(false)} className="links" activeClassName="link-active" to="/resume"><FaFileAlt size={25}/> Resume</NavLink>
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
          <Route component={NoRoute}/> 
        </Switch>
    </div>
  );
}

export default App;
