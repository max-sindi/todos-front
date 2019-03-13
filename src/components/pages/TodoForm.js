import React, { Component } from 'react'

class TodoForm extends Component {

  state = {
    title: '',
    body: '',
  }

  handleSubmit = e => {
    e.preventDefault()
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { fields } = this.props

    return (
      <form action="#" onSubmit={this.handleSubmit}>
        {fields.map(field => {
          return (
            <input value={this.state[field.id]} onChange={this.handleChange} />
          )
        })}
      </form>
    )
  }
}

export default TodoForm
