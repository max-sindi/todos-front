import React from 'react'
import { Link } from 'react-router-dom'
import { todos as todosPath} from 'config/routing'
import { connect } from 'react-redux'
import { FetchChecker, TodoItem } from 'components/partials'
import { initTodosGetting } from 'store/todos/actions'

class TodosAllPage extends React.Component {

  componentDidMount() {
    this.props.initTodosGetting()
  }

  render() {
    const { todos, isFetched } = this.props

    return (
      <div>
        <Link to={`/${todosPath}/new`}>Create new Todo -></Link>
        <div>
          <FetchChecker isFetched={isFetched} data={todos} DataItemRender={TodoItem}/>
        </div>
      </div>
    )
  }
}

export default connect(
  store => ({
    todos: store.todos.gettedTodos,
    isFetched: store.todos.isFetchedGet,
  }),
  { initTodosGetting }
)(TodosAllPage)
