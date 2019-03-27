import React, {Component} from 'react';
import {Loader} from "components/partials"
import {form} from "components/partials"
import PropTypes from 'prop-types';

const {Input} = form

class TodoForm extends Component {
  state = {
    form: {
      title: '',
      body: '',
    }
  }

  componentDidUpdate = (prevProps) => {
    // push todo data to state
    if(this.props.todo !== prevProps.todo) {
      this.setState(state => ({...state, form: {...state.form, ...this.props.todo}}))
    }
  }

  static defaultProps = {
    todo: null,
  }

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    isFetching: PropTypes.bool,
    // object with todoData, can't set null as available type
    // todo: PropTypes.oneOf([null, PropTypes.object]).isRequired,
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state.form)
  }

  onChangeAction = e => {
    const {name, value} = e.target
    this.setState(state => ({...state, form: {...state.form, [name]: value}}))
  }

  render() {
    const {title, body} = this.state.form
    return (
      <div>
        {this.props.isFetching ? <Loader /> : (
          <form onSubmit={this.onSubmit}>
            <Input name={"title"} value={title} onChange={this.onChangeAction} />
            <Input name={"body"} value={body} onChange={this.onChangeAction} />
            <button type={"submit"}>Update</button>
          </form>
        )}
      </div>
    );
  }
}

export default TodoForm