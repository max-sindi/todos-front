import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import routingConfig from './config/routing'
import pages from './components/pages'

const todos = rootedPath(routingConfig.todos)
const { TodosPage } = pages

class Routing extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavLink to={todos}>To todos</NavLink>
          <Switch>
            <Route path={todos} exact component={TodosPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

function rootedPath(path) {
  return `/${path}`
}

export default Routing
