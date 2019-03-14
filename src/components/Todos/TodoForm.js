import React, { Component } from 'react'
import FormPartials from '../partials/Form/'
const { Input } = FormPartials

class TodoForm extends Component {

  state = {
    title: '',
    body: '',
  }

  handleSubmit = e => {
    e.preventDefault()
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { fields } = this.props

    return (
      <form onSubmit={this.handleSubmit}>
        {/* mapping inputs */}
        {fields.map(field => {
          return (
            <input
              name={field.id}
              key={field.id}
              value={this.state[field.id]}
              onChange={this.handleChange}
            />
          )
        })}
      </form>
    )
  }
}

export default TodoForm
