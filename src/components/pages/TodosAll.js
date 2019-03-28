import React, {Component} from 'react'
import {fetchTodos} from "store/todos/todosActions"
import {connect} from "react-redux"
import {Loader, TodoItem, links, Search} from "components/partials"
import {Button, Card} from "antd"
import styled from 'styled-components'
import {fetchTodosBySearchString} from "store/todos/todosActions"


const CreateNewTodoLink = links.CreateNewTodo
const SearchContainer = styled.div`
  margin-bottom: 20px;
`

class TodosAll extends Component {
  componentDidMount() {
    this.props.fetchTodos()
  }

  searchChangeCb = () => {
    this.props.fetchTodosBySearchString()
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
        <SearchContainer>
          <Search onChangeCb={this.searchChangeCb}/>
        </SearchContainer>
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
    isFetching: store.todos.isFetching
  }),
  {fetchTodos, fetchTodosBySearchString}
)(TodosAll)