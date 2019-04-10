import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Input} from 'components/partials/form'

class LoginForm extends Component {
  state = {
    form: {
      email: 'asd',
      password: 'asd'
    }
  }

  handleChange = e => {
    const {name, value} = e.target
    this.setState(state => ({...state, form: {...state.form, [name]: value}}))
  }

  render() {
    const {form} = this.state
    return (
      <div>
        <Input
          onChange={this.handleChange}
          value={form.email}
          name={'email'}
          placeholder={'Email'}
          label={'Email'}
        />
        <Input
          onChange={this.handleChange}
          value={form.password}
          name={'password'}
          label={'Password'}
          placeholder={'Password'}
        />
      </div>
    );
  }
}

export default connect(
  null,
)(LoginForm);
