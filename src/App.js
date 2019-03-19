import React, { Component } from 'react'
import Routing from './Routing'
import { Notifications } from 'components/partials/'

class App extends Component {
  render() {
    return (
      <>
        <Routing />
        <Notifications />
      </>
    );
  }
}

export default App;
