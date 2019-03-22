import React from 'react'
import { Link } from 'react-router-dom'
import { todos as todosPath} from 'config/routing'
import { connect } from 'react-redux'
import { FetchChecker, TodoItem, Search } from 'components/partials'
import { initTodosGetting, deleteTodo } from 'store/todos/actions'

// SOON
// const filters = [
//   {
//     name: 'isDone',
//     value: true,
//   },
//   {
//     name: 'isDone',
//     value: false,
//   },
//   {
//     name: 'isDone',
//     value: null
//   }
// ]

class TodosAllPage extends React.Component {

  componentDidMount() {
    this.props.initTodosGetting()
  }

  render() {
    const { todos, isFetched } = this.props

    return (
      <div>
        <Link to={`/${todosPath}/new`}>Create new Todo -></Link>
        <div style={{ margin: '40px 0'}}>
          <Search onChangeTrigger={this.props.initTodosGetting}/>
          {/*<Filters filters={filters}/>*/}
        </div>
        <hr />
        <div>
        <h2>Todoshki:</h2>
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
  { initTodosGetting, deleteTodo }
)(TodosAllPage)
