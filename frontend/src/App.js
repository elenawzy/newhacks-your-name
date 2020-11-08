import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BackgroundVideo from './components/BackgroundVideoComp';
import Dashboard from './components/Dashboard';
import Inbox from './components/Inbox';
import SendMail from './components/SendMail';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={BackgroundVideo}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/inbox" component={Inbox}/>
          <Route path="/sendmail" component={SendMail}/>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
