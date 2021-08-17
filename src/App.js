import React from "react";
import './App.css';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        
        <Switch>
          <Route path="/search">
            <h1> This is the search page </h1>
          </Route>

          <Route path="/">
            <Home />
            <h1> This is the home page</h1>
          </Route>
        </Switch>

      
      </Router>


     


    </div>
  );
}

export default App;
