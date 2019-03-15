import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import { todos } from './config/routing'
import { TodosNewPage, TodosAllPage, TodosEditPage } from 'components/pages'

class Routing extends Component {
  render() {
    return (
      <Router>
        <>
          <NavLink to={`/${todos}`}>To todos -></NavLink> <br/>
          <Switch>
            <Route path={`/${todos}`} exact component={TodosAllPage} />
            <Route path={`/${todos}/new`} exact component={TodosNewPage} />
            <Route path={`/${todos}/:id/edit`} exact component={TodosEditPage} />
          </Switch>
        </>
      </Router>
    )
  }
}

export default Routing
