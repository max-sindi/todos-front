import React, {Component} from 'react'
import {Loader} from "components/partials"
import {form} from "components/partials"
import PropTypes from 'prop-types'
import {FieldTitle} from "./TodoItem"
import {Card, Button} from "antd"
import joi from 'joi'

const {Input, Checkbox, TextArea} = form

class TodoForm extends Component {
  static defaultProps = {
    todo: null,
  }

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    isFetching: PropTypes.bool,
    // object with todoData, can't set null as available type
    // todo: PropTypes.oneOf([null, PropTypes.object]).isRequired,
  }

  state = {
    form: {
      title: '',
      body: '',
      isDone: false,
    }
  }

  componentDidUpdate = (prevProps) => {
    // push todo-data to state
    if(this.props.todo !== prevProps.todo) {
      this.setState(state => ({...state, form: {...state.form, ...this.props.todo}}))
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state.form)
  }

  onChangeAction = e => {
    const {name, value} = e.target
    this.updateForm({[name]: value})
  }

  onCheckboxChange = e => {
    const {name, checked} = e.target
    this.updateForm({[name]: checked})
  }

  updateForm = changes => {
    this.setState(state => ({...state, form: {...state.form, ...changes}}))
  }

  isFormValid = () => {
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

  render() {
    const {title, body, isDone} = this.state.form
    return (
      <div>
        {this.props.isFetching ? <Loader /> : (
          <form onSubmit={this.onSubmit}>
            <Card>
              <FieldTitle>Title:</FieldTitle>
              <Input name={"title"} value={title} onChange={this.onChangeAction} />
            </Card>
            <Card>
              <FieldTitle>Body:</FieldTitle>
              <TextArea name={"body"} value={body} onChange={this.onChangeAction} />
            </Card>
            <Card>
              <FieldTitle>Done:</FieldTitle>
              <Checkbox name={"isDone"} checked={isDone} onChange={this.onCheckboxChange}/>
            </Card>
            <Button htmlType={"submit"} icon={"check"} style={{marginTop: 20}}>Update</Button>
          </form>
        )}
      </div>
    );
  }
}

export default TodoForm