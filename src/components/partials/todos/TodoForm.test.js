import React from 'react'
import TodoForm from './TodoForm'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import store from 'store/store'

test('renders correctly', () => {
  const component = renderer.create(
    <Provider store={store}>
      <TodoForm />
    </Provider>
  )

  let tree = component.toJSON()
  console.log(component.toTree());

  // expect(tree).toMatchSnapshot()
})
