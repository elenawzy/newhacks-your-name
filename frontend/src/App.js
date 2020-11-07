import React from 'react';
import './App.css';
import BackgroundVideo from './components/BackgroundVideo';
import Dashboard from './components/Dashboard';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={BackgroundVideo}/>
          <Route path="/dashboard" component={Dashboard}/>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
