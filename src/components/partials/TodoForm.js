import React from 'react'
import { connect } from 'react-redux'
import { changeFormValue } from 'store/todos/actions'

const TodoForm = ({
  clearTodoForm,
  changeFormValue,
  handleSubmit,
  isEditMode,
  form: {
    title,
    body,
  }
}) => {
  const handleInputChange = ({ target: { name, value } }) => changeFormValue({
    name, value
  })

  const callHandleSubmit = e => {
    e.preventDefault()
    handleSubmit()
  }

  return (
    <form onSubmit={callHandleSubmit}>
      <input
        value={title.value}
        name="title"
        placeholder="Enter todo's title"
        onChange={handleInputChange}/>
      <input
        value={body.value}
        name="body"
        placeholder="Enter todo's body"
        onChange={handleInputChange}/>
      <button type="submit">Confirm</button>
      <button type="button" onClick={clearTodoForm}>Clear</button>
    </form>
  )
}

export default connect(
  store => ({
    form: store.todos.form
  }),
  { changeFormValue }
)(TodoForm)
