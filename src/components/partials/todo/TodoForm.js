import React, {Component} from 'react'
import {Loader} from "components/partials"
import {form} from "components/partials"
import PropTypes from 'prop-types'
import {FieldTitle} from "./TodoItem"
import {Card, Button} from "antd"
import joi from 'joi'
import _ from "lodash"

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

  // maybe this should be defined in constructor?
  static formSchema = joi.object().keys({
    body: joi.string().required(),
    title: joi.string().required(),
    isDone: joi.boolean(),
  })

  state = {
    form: {
      title: '',
      body: '',
      isDone: false,
    },
  }

  componentDidUpdate = (prevProps) => {
    // push todo-data to state
    if(this.props.todo !== prevProps.todo) {
      this.setState(state => ({...state, form: {...takeValuesFromData() }}))
    }
    
    const takeValuesFromData= () => {
      return _.mapValues(this.state.form, (val, key) => this.props.todo[key])
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

    joi.validate(this.state.form, TodoForm.formSchema, (err) => {
      if(err) {
        isValid = false
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
            <Button
              disabled={!this.isFormValid()}
              htmlType={"submit"}
              icon={"check"}
              style={{marginTop: 20}}
            >
                Update
            </Button>
          </form>
        )}
      </div>
    );
  }
}

export default TodoForm