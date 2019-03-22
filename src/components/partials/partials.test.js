import React from 'react'
import { Search } from './'
import renderer from 'react-test-renderer'
import {render, fireEvent, cleanup, waitForElement} from 'react-testing-library'
import store from 'store/store'
import { Provider } from 'react-redux'

afterEach(cleanup)

test('Search renders correctly', () => {
  const component = renderer.create(
    <Provider store={store}>
      <Search />
    </Provider>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

})
