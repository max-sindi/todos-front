import React from 'react'
import { connect } from 'react-redux'
import { changeFormValue, clearTodoForm, resetEditing } from 'store/todos/actions'
import { createNotification } from 'store/notifications/actions'
import { getFormData } from 'store/_utils'
import joi from 'joi'

const TodoForm = ({
  clearTodoForm,
  changeFormValue,
  handleSubmit,
  isEditMode,
  resetEditing,
  form,
}) => {
  const formData = getFormData(form)
  const { body, title, isDone } = formData
  const firstInput = React.createRef()
  const handleInputChange = ({ target: { name, value } }) => changeFormValue({
    name, value
  })

  const handleCheckboxChange = ({ target: { name, checked }}) => changeFormValue({
    name, value: checked
  })

  // has side effect - pushes notification if not valid (with validation error message)
  const isFormValid = () => {
    let isValid
    const schema = joi.object().keys({
      body: joi.string().required(),
      title: joi.string().required(),
      isDone: joi.boolean(),
    })

    joi.validate(formData, schema, (err) => {
      if(err) {
        isValid = false
        createNotification(false, err.details[0].message)
      } else {
        isValid = true
      }
    })

    return isValid
  }

  const callHandleSubmit = e => {
    e.preventDefault()
    if ( isFormValid() ) {
      handleSubmit()
        // BUG: when form called in TodoNewPage, current === null
        .then(res => firstInput.current && firstInput.current.focus())
    }
  }

  return (
    <form onSubmit={callHandleSubmit}>
      <input
        ref={firstInput}
        value={title}
        name="title"
        placeholder="Enter todo's title"
        onChange={handleInputChange} />
      <input
        value={body}
        name="body"
        placeholder="Enter todo's body"
        onChange={handleInputChange} />
      <input
        name="isDone"
        type="checkbox"
        checked={isDone}
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
