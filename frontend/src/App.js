import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Dashboard}/>
          <Route path="/dashboard" component={Dashboard}/>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
