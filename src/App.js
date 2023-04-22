//import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import Resume from './Resume';

function App() {
  return (
    <Router>
      <div>
        <Nav />
      <Switch>
        <Route exact path="/">
          <LoginPage/>
        </Route>
        <Route path="/signup">
          <SignUpPage />
        </Route> 
        <Route path="/form" >
          <Resume/>
        </Route> 
      </Switch>
      </div>
    </Router>
  );
}
export default App;
