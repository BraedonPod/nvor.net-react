import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Index from './components/Index/Index';
import Tor from './components/Tor/Tor';
import Infra from './components/Infra/Infra';
import Advocacy from './components/Advocacy/Advocacy';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
        <Router>
        <Navbar />
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/tor" component={Tor}/>
            <Route path="/infra" component={Infra}/>
            <Route path="/advocacy" component={Advocacy}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
