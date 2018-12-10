import React, { PureComponent } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  List, Edit, Read, Write
} from './view';
import './app.css';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = '';
  }

  renderContent(location) {
    console.log('fuck');
    return (
      <Switch location={location}>
        <Route
          path="/list"
          render={match => (
            <List match={match} />
          )}
        />
        <Route
          path="/write"
          render={match => (
            <Write match={match} />
          )}
        />
        <Route
          path="/edit/:id"
          render={match => (
            <Edit match={match} />
          )}
        />
        <Route
          path="/read/:id"
          render={match => (
            <Read match={match} />
          )}
        />
      </Switch>
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Route render={({ location }) => this.renderContent(location)} />
      </BrowserRouter>
    );
  }
}
