import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveNewTodo, clearTodoForm } from '../../store/todos/actions'
import { TodoForm } from 'components/partials'

class TodosNewPage extends Component {

  componentDidMount() {
    this.props.clearTodoForm()
  }

  render() {
    return (
      <div>
        <h2>Create new Todo</h2>
        <div className="todos-body">
          <TodoForm handleSubmit={this.props.saveNewTodo} />
        </div>
      </div>
    )
  }
}

export default connect(null, { saveNewTodo, clearTodoForm })(TodosNewPage)
