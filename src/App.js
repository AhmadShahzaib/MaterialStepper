import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import WelcomeComponent from './Components/OnBoarding/WelcomeComponent';

function App() {
  
  return (
    <Router>
       <Switch>
      
         <Route exact path="/" component={WelcomeComponent} />
        
       
      </Switch>
    </Router>
    
  );
}

export default App;
