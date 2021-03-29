import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import EarthQuakeDetail from './components/EarthQuakeDetail/EarthQuakeDetail';
import './styles.css';

import Home from './components/Home/Home';
import PageNotFound from './components/shared/PageNotFound';
import User from './components/User/User';

class App extends Component {
  render() {
    const routes = (
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/user' exact component={User} />
        <Route path='/detail/:id' component={EarthQuakeDetail} />
        <Route component={PageNotFound} />
      </Switch>
    );
    return (
      <div>
        <div>{routes}</div>
      </div>
    );
  }
}

export default App;
