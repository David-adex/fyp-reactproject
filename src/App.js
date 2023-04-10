//import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import PickThemePage from './PickThemePage';

function App() {
  return (
    <Router>
      <div>
        <Nav />
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route path="/signup">
          <SignUpPage />
        </Route>
        <Route path="/theme">
          <PickThemePage />
        </Route>
        <Route path="/form">
          {/* Add resume form component */}
        </Route>
        <Route path="/form2">
          {/* Add component */}
        </Route>
        <Route path="/preview">
          {/* Add resume preview and download component */}
        </Route>
      </Switch>
      </div>
    </Router>
  );
}
export default App;
