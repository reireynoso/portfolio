import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Home from './components/Home'

const App = () => {
  return (
    <div className="App">
        {/* <Header /> */}
        <Header/>
        <Home />
    </div>
  );
}

export default App;
