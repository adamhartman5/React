import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
      React App
    </div>
  );
}

export default App;
