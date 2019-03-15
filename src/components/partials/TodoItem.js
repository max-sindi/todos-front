import React from 'react'

const TodoItem = ({ body, title }) => {
  return (
    <div style={{ marginBottom: 20 }}>
      <div>{title}</div>
      <div>{body}</div>
    </div>
  )
}

export default TodoItem
