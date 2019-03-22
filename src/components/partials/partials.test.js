import { Search } from './'
import renderer from 'react-test-renderer'
import store from 'store/store'
import { Provider } from 'react-redux'

test('Search renders correctly', () => {
  const component = rendered.create(
    <Provider>
      <Search />
    </Provider>
  )
})
