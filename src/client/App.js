import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import BaseComponent from './view/components/BaseComponent'
import { List, Edit, Read, Write } from "./view"

export default class App extends BaseComponent {
  constructor(props) {
    super(props)
    this.state = ""
  }

  renderContent(location) {
    return (
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={200}>
          <Switch location={location}>
            <Route
              path="/list"
              render={match => <List match={match} {...this.props} />}
            />
            <Route path="/write" render={() => <Write {...this.props} />}
            />
            <Route
              path="/edit/:id"
              render={match => <Edit match={match} {...this.props} />}
            />
            <Route
              path="/read/:id"
              render={match => <Read match={match} {...this.props} />}
            />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )
  }

  render() {
    return (
      <BrowserRouter>
        <Route render={({ location }) => this.renderRedirect(location) || this.renderContent(location)} />
      </BrowserRouter>
    )
  }
}
