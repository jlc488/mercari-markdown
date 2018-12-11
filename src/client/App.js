import React, { PureComponent } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
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
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={200}
        >
          <Switch location={location}>
            <Route
              path="/list"
              render={match => (
                <List match={match} {...this.props} />
              )}
            />
            <Route
              path="/write"
              render={() => <Write {...this.props} />}
            />
            <Route
              path="/edit/:id"
              render={match => (
                <Edit match={match} {...this.props} />
              )}
            />
            <Route
              path="/read/:id"
              render={match => (
                <Read match={match} {...this.props} />
              )}
            />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
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
