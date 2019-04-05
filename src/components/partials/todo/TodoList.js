import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ data }) => {
  if(data.length === 0) {
    return <span>Has no data</span>
  } else {
    return data.map((item, index) => <TodoItem indexInArray={index} key={item.id} todo={item} />)
  }
}

export default TodoList