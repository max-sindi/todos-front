import React, { Component } from 'react'
import { connect } from 'react-redux'
import todoActions from '../../store/todos/actions'


class TodosNewPage extends Component {

  handleInputChange = e => {
    const { name, value } = e.target
    this.props.changeFormValue({ name, value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.saveCurrentTodo()
  }

  render() {
    const { title, body, clearTodoForm } = this.props

    return (
      <div>
        <h2>Create new Todo</h2>
        <div className="todos-body">
          <form onSubmit={this.handleSubmit}>
            <input value={title.value} name="title" placeholder="Enter todo's title" onChange={this.handleInputChange}/>
            <input value={body.value} name="body" placeholder="Enter todo's body" onChange={this.handleInputChange}/>
            <button type="submit">Confirm</button>
            <button type="button" onClick={clearTodoForm}>Clear</button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(
  store => ({
    title: store.todos.form.title,
    body: store.todos.form.body,
  }),
  { ...todoActions }
)(TodosNewPage)
