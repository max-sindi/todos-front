import React from 'react'
import { connect } from 'react-redux'
import { fetchTodoSingle, saveEditTodo } from 'store/todos/actions'
import { TodoForm } from 'components/partials'

class TodoEditPage extends React.Component {

  componentDidMount() {
    this.props.fetchTodoSingle(this.props.match.params.id)
  }

  render() {
    return (
      <div>
        <h2>Edit todo: </h2>
        <div className="todos-body">
          <TodoForm handleSubmit={this.props.saveEditTodo} />
        </div>
      </div>
    )
  }
}

export default connect(
  null, { fetchTodoSingle, saveEditTodo }
)(TodoEditPage)
