import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTodoById, updateTodoById} from "store/todos/todosActions";
import {TodoForm} from "components/partials"


class TodoEdit extends Component {
  componentDidMount() {
    this.props.fetchTodoById(this.props.match.params.id)
  }

  submitAction = (data) => {
    this.props.updateTodoById(this.props.match.params.id, data)
      .then(res => {debugger})
  }

  render() {
    const {isFetching, todo} = this.props
    return (
      <div>
        <TodoForm onSubmit={this.submitAction} todo={todo} isFetching={isFetching}/>
      </div>
    );
  }
}

export default connect(
  store => ({
    todo: store.todo.data,
    isFetching: store.todo.pending > 0
  }), {
    fetchTodoById, updateTodoById
  },
)(TodoEdit);
