import React, {Component} from 'react'
import {fetchTodos} from "store/todos/todosActions"
import {connect} from "react-redux"
import {Loader, TodoItem, links} from "components/partials"

const CreateNewTodoLink = links.CreateNewTodo

class TodosAll extends Component {
  componentDidMount() {
    this.props.fetchTodos()
  }

  render() {
    const { todos, isFetching } = this.props
    return (
      <div>
        <h2>Todoshki: </h2>
        <CreateNewTodoLink>Create another one</CreateNewTodoLink>
        {isFetching ? <Loader /> : todos.map(
          (item, index) => <TodoItem index={index} key={item.id} todo={item} />
        )}
      </div>
    );
  }
}

export default connect(
  store => ({
    todos: store.todos.data,
    isFetching: store.todos.pending > 0
  }),
  {fetchTodos}
)(TodosAll)