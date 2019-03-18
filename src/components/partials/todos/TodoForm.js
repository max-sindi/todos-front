import React from 'react'
import { connect } from 'react-redux'
import { changeFormValue, clearTodoForm, resetEditing } from 'store/todos/actions'

const TodoForm = ({
  clearTodoForm,
  changeFormValue,
  handleSubmit,
  resetEditing,
  isEditMode,
  form: {
    title,
    body,
  }
}) => {
  const firstInput = React.createRef()
  const handleInputChange = ({ target: { name, value } }) => changeFormValue({
    name, value
  })

  const callHandleSubmit = e => {
    e.preventDefault()
    handleSubmit()
      // BUG: when form in CreateNewTodo, current === null
      .then(res => firstInput.current && firstInput.current.focus())
  }

  return (
    <form onSubmit={callHandleSubmit}>
      <input
        ref={firstInput}
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
      {
        isEditMode && (
          <button type="button" onClick={resetEditing}>Reset Editing</button>
        )
      }
    </form>
  )
}

export default connect(
  store => ({
    form: store.todos.form
  }),
  { changeFormValue, clearTodoForm, resetEditing }
)(TodoForm)
