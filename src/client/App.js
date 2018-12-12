import React, { PureComponent } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { List, Edit, Read, Write } from "./view"
import { Provider } from 'mobx-react'
import WikiPresenter from './presenters/WikiPresenter'

import "./app.css"

export default class App extends PureComponent {
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
              render={match => <Provider WikiPresenter={WikiPresenter}><List match={match} {...this.props} /></Provider>}
            />
            <Route path="/write" render={() => <Provider WikiPresenter={WikiPresenter}><Write {...this.props} /></Provider>}
            />
            <Route
              path="/edit/:id"
              render={match => <Provider WikiPresenter={WikiPresenter}><Edit match={match} {...this.props} /></Provider>}
            />
            <Route
              path="/read/:id"
              render={match => <Provider WikiPresenter={WikiPresenter}><Read match={match} {...this.props} /></Provider>}
            />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )
  }

  render() {
    return (
      <BrowserRouter>
        <Route render={({ location }) => this.renderContent(location)} />
      </BrowserRouter>
    )
  }
}
