import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import {Root, A, B, NotFound} from './components/router_example';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={() => <Root text="Hey" />} />
            <Route path='/a' component={A} />
            <Route path='/b' component={B} />
            <Redirect from='/c' to='/' />
            <Route path='/*' component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
