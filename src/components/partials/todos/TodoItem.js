import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from 'store/todos/actions'
import { Link } from 'react-router-dom'
import { todos as todosPath } from 'config/routing'

const TodoItem = ({ deleteTodo, body, title, isDone, id, index }) => {

  function callDeleteTodo() {
    deleteTodo(id, index)
  }

  return (
    <div style={{ marginBottom: 20 }}>
      <div>
        <div>{title}</div>
        <div>{body}</div>
        {/* checked icon */}
        { isDone && <span>&#10004;</span>}
      </div>
      <button onClick={callDeleteTodo}>Delete</button>
      <Link to={`${todosPath}/${id}/edit`}>Edit -></Link>
    </div>
  )
}

export default connect(null, { deleteTodo })(TodoItem)
