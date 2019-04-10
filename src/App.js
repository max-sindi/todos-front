import React from "react"
import {connect} from "react-redux"
import {BrowserRouter as Router} from "react-router-dom"
import * as Pages from 'components/pages'
import {Card} from "antd"
import AppRouters from "./AppRouters"
import 'antd/dist/antd.css'

class App extends React.Component {
  render() {
    const {isAuthed} = this.props

    return (
      <Card>
        <Router>
          {isAuthed ? <AppRouters /> : <Pages.Login />}
        </Router>
      </Card>
    )
  }
}

export default connect(
  store => ({
    isAuthed: store.auth.isAuthed
  })
)(App)