import React, {Component} from 'react'
import {fetchTodos} from "store/todos/todosActions"
import {connect} from "react-redux"
import {Loader, TodoItem, links} from "components/partials"
import {Button, Card} from "antd"


const CreateNewTodoLink = links.CreateNewTodo

class TodosAll extends Component {
  componentDidMount() {
    this.props.fetchTodos()
  }

  render() {
    const { todos, isFetching } = this.props
    return (
      <div>
        <h2>Todoshki: </h2>
        <CreateNewTodoLink>
          <Button type={"primary"} icon={"plus"} style={{marginBottom: 20}}>
            Create another one
          </Button>
        </CreateNewTodoLink>
        <Card>
          {/*mapping items*/}
          {isFetching ? <Loader /> : todos.map(
            (item, index) => <TodoItem indexInArray={index} key={item.id} todo={item} />
          )}
        </Card>
      </div>
    );
  }
}

export default connect(
  store => ({
    todos: store.todos.data,
    isFetching: store.todos.pending > 0
  }),
  {fetchTodos}
)(TodosAll)