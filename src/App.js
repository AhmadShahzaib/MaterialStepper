import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WelcomeComponent from "./Components/OnBoarding/WelcomeComponent";
import ProductPage from "./Pages/ProductPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={WelcomeComponent} />
        <Route exact path="/homepage" component={HomePage} />
        <Route exact path="/productpage" component={ProductPage} />
      </Switch>
    </Router>
  );
}

export default App;
