import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from 'store/todos/actions'
import { Link } from 'react-router-dom'
import { todos as todosPath } from 'config/routing'

const TodoItem = ({ deleteTodo, body, title, id, index }) => {

  function callDeleteTodo() {
    deleteTodo(id, index)
  }

  return (
    <div style={{ marginBottom: 20 }}>
      <div>{title}</div>
      <div>{body}</div>
      <button onClick={callDeleteTodo}>Delete</button>
      <Link to={`${todosPath}/${id}/edit`}>Edit -></Link>
    </div>
  )
}

export default connect(null, { deleteTodo })(TodoItem)
