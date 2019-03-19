import React from 'react'
import App from './App'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import store from './store/store'

test('renders correctly', () => {
  const component = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>,
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
