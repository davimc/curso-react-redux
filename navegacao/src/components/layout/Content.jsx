import './Content.css'
import React from 'react'

import Home from '../../views/examples/Home';
import About from '../../views/examples/About';

import { Switch, Route } from 'react-router-dom';

function Content() {
  return (
    <div className="Content">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>


      </Switch>
    </div>
  );
}

export default Content;
