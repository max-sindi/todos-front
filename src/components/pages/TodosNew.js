import React from 'react';
import {TodoForm} from 'components/partials'
import {createNewTodo} from 'store/todos/todosActions'
import {connect} from 'react-redux'

function TodosNew(props) {
  function createNewTodo(params) {
    props.createNewTodo(params)
      .then(() => props.history.push('/todos'))
  }
  return (
    <div>
      <h2>Create new Todo</h2>
      <TodoForm onSubmit={createNewTodo}/>
    </div>
  );
}

export default connect(
  null, {createNewTodo}
)(TodosNew)