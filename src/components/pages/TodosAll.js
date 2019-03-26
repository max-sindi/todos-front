import React, {Component} from 'react'
import {fetchTodos} from "store/todos/todosActions"
import {connect} from "react-redux"
import {Loader, TodoItem} from "components/partials"


class TodosAll extends Component {
  componentDidMount() {
    this.props.fetchTodos()
  }

  mapItems = (item, index) => <TodoItem index={index} key={item.id} todo={item} />

  render() {
    const { todos } = this.props
    return (
      <div>
        {!todos ? <Loader /> : todos.map(this.mapItems)}
      </div>
    );
  }
}

export default connect(
  store => ({
    todos: store.todos.data
  }),
  {fetchTodos}
)(TodosAll)