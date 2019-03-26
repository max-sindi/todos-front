import React from "react"
import ReactDOM from 'react-dom'
import {Provider} from "react-redux"
import * as serviceWorker from './serviceWorker'
import {Route, BrowserRouter as Router, Switch, Redirect} from "react-router-dom";
import store from "store";
import * as Pages from 'components/pages'


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact={true} path={'/'} component={() => <Redirect to={'/todos'}/>} />
        <Route exact={true} path={'/todos'} component={Pages.TodosAll}/>
        <Route exact={true} path={'/todos/:id/edit'} component={Pages.TodoEdit} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();