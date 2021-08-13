import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WelcomeComponent from "./Components/OnBoarding/WelcomeComponent";
// import ProductPage from "./pages/ProductPage";
import SplashKWC from "./pages/SplashKWC";
import Verification from "./pages/verificationPage";
import Proof from "./pages/AdressProof";
import Identity from "./pages/IdentityUpload";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={WelcomeComponent} />
        <Route exact path="/homepage" component={HomePage} />
        {/* <Route exact path="/productpage" component={ProductPage} /> */}
        <Route exact path="/splash" component={SplashKWC} />
        <Route exact path="/verify" component={Verification} />
        <Route exact path="/proof" component={Proof} />
        <Route exact path="/identity" component={Identity} />
      </Switch>
    </Router>
  );
}

export default App;
