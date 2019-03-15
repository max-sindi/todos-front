import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveCurrentTodo } from '../../store/todos/actions'
import { TodoForm } from 'components/partials'

class TodosNewPage extends Component {

  handleSubmit = e => {
    this.props.saveCurrentTodo()
  }

  render() {
    const { title, body } = this.props

    return (
      <div>
        <h2>Create new Todo</h2>
        <div className="todos-body">
          <TodoForm handleSubmit={this.handleSubmit} />
        </div>
      </div>
    )
  }
}

export default connect(
  null, { saveCurrentTodo })
(TodosNewPage)
