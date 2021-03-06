import './Content.css'
import React from 'react'

import { Switch, Route } from 'react-router-dom';

import Home from '../../views/examples/Home';
import About from '../../views/examples/About';
import Param from '../../views/examples/Param';
import NotFound from '../../views/examples/NotFound';

function Content() {
  return (
    <div className="Content">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/param/:id">
          <Param />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </div>
  );
}

export default Content;
