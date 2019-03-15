import React from 'react'
import { Link } from 'react-router-dom'
import { todos } from '../../config/routing'

const TodosAllPage = () => {
  return (
    <div>
      <Link to={`/${todos}/new`}>Create new Todo -></Link>
    </div>
  )
}

export default TodosAllPage
