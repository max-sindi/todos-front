import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import { todos } from './config/routing'
import { TodosNewPage, TodosAllPage } from './components/pages'

class Routing extends Component {
  render() {
    return (
      <Router>
        <>
          <NavLink to={`/${todos}`}>To todos</NavLink> <br/>
          <Switch>
            <Route path={`/${todos}`} exact component={TodosAllPage} />
            <Route path={`/${todos}/new`} exact component={TodosNewPage} />
          </Switch>
        </>
      </Router>
    )
  }
}

export default Routing
