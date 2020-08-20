import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Particles from 'react-particles-js';
import particlesParams from './particles-params'
import Home from './components/Home'
import HomeIcon from './components/HomeIcon'
import About from './components/About'
import Project from './components/Project'
import Blog from './components/Blog'
import Resume from './components/Resume';
import CodingContent from './components/CodingContent'
import Header from './components/Header'
import NoRoute from './components/NoRoute'


const App = () => {

  return (
    <div className="App">  
        <Header/>
        <Particles params={particlesParams}/>
        <HomeIcon />
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
