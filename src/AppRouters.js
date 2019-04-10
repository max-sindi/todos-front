import React from 'react'
import {Route, Switch, Redirect, Link} from "react-router-dom"
import * as Pages from 'components/pages'


const AppRouters = () => {
  return (
    <>
      <Link to={"/"}>Home -></Link>
      <Switch>
        <Route exact={true} path={'/'} component={() => <Redirect to={'/todos'}/>}/>
        <Route exact={true} path={'/todos'} component={Pages.TodosAll}/>
        <Route exact={true} path={'/todos/new'} component={Pages.TodosNew}/>
        <Route exact={true} path={'/todos/:id/edit'} component={Pages.TodoEdit}/>
      </Switch>
    </>
  );
};

export default AppRouters
