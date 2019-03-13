import React, { Component } from 'react';
import { Provider } from 'react-redux'
import Routing from './Routing'
import store from './store/store'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routing />
      </Provider>
    );
  }
}

export default App;
