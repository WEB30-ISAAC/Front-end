import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./LoginPage";

import "./App.css";

function App() {
  return (
    <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={LoginPage} />
          </Switch>
        </div>
    </Router>
  );
}

export default App;
