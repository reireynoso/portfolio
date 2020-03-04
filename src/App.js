import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Blog from './components/Blog'

const App = () => {
  return (
    <div className="App">
        <Switch>
          <Route path="/blogs" component={Blog}/>
          <Route path="/projects" component={Project}/>
          <Route path="/about" component={About}/>
          <Route exact path="/" component={Home}/> 
        </Switch>
    </div>
  );
}

export default App;
