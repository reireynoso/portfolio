import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Blog from './components/Blog'
import Resume from './components/Resume';
import Particles from 'react-particles-js';

const App = () => {
  return (
    <div className="App">
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
          <Route path="/projects" component={Project}/>
          <Route path="/about" component={About}/>
          <Route exact path="/" component={Home}/> 
        </Switch>
    </div>
  );
}

export default App;
