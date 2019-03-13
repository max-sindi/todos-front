import React, { Component } from 'react'
import TodoForm from './TodoForm'
import fields from './fields'

class TodosPages extends Component {
  render() {
    return (
      <div>
        <TodoForm fields={fields}/>
      </div>
    )
  }
}

export default TodosPages
