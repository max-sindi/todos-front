import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import routingConfig from './config/routing'
import pages from './components/pages'

const todos = rootedPath(routingConfig.todos)
const { Todo_CreateNew_Page, Todo_Edit_Page } = pages.TodosPages
// debugger

class Routing extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavLink to={todos}>To todos</NavLink>
          <Switch>
            <Route path={`${todos}/new`} exact component={Todo_CreateNew_Page} />
            <Route path={`${todos}/:id/edit`} exact component={Todo_Edit_Page} />
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
