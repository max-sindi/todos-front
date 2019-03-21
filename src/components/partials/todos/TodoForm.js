import React from 'react'
import { connect } from 'react-redux'
import { changeFormValue, clearTodoForm, resetEditing } from 'store/todos/actions'

const TodoForm = ({
  clearTodoForm,
  changeFormValue,
  handleSubmit,
  isEditMode,
  resetEditing,
  form: {
    body,
    isDone,
    title,
  }
}) => {
  const firstInput = React.createRef()
  const handleInputChange = ({ target: { name, value } }) => changeFormValue({
    name, value
  })

  const handleCheckboxChange = ({ target: { name, checked }}) => changeFormValue({
    name, value: checked
  })

  const callHandleSubmit = e => {
    e.preventDefault()
    handleSubmit()
      // BUG: when form called in TodoNewPage, current === null
      .then(res => firstInput.current && firstInput.current.focus())
  }

  return (
    <form onSubmit={callHandleSubmit}>
      <input
        ref={firstInput}
        value={title.value}
        name="title"
        placeholder="Enter todo's title"
        onChange={handleInputChange} />
      <input
        value={body.value}
        name="body"
        placeholder="Enter todo's body"
        onChange={handleInputChange} />
      <input
        name="isDone"
        type="checkbox"
        checked={isDone.value}
        onChange={handleCheckboxChange} />

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
