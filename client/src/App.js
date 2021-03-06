import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ProtectedRoute from './components/ProtectedRoute'
import Login from "./components/Login";
import BubblePage from './components/BubblePage'
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <ProtectedRoute path="/bubbles" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
