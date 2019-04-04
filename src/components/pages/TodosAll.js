import React, {Component} from 'react'
import {connect} from "react-redux"
import {Loader, TodoItem, links, Search, TodosFilters} from "components/partials"
import {Button, Card} from "antd"
import styled from 'styled-components'
import {fetchTodos, fetchTodosWithFiltersAndSearch} from "store/todos/todosActions"
import {clearFilter} from "store/todosFilters/todosFiltersActions"
import {clearSearchString} from "store/search/searchActions"


const CreateNewTodoLink = links.CreateNewTodo
const Container = styled.div`
  margin-bottom: 20px;
`

class TodosAll extends Component {
  componentDidMount() {
    this.props.fetchTodosWithFiltersAndSearch()
  }

  componentWillUnmount() {
    this.props.clearFilter()
    this.props.clearSearchString()
  }

  searchChangeCb = () => {
    this.props.fetchTodosWithFiltersAndSearch()
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
        <Container>
          <Search afterChangeAction={this.searchChangeCb}/>
        </Container>
        <Container>
          <TodosFilters fetchAction={this.props.fetchTodosWithFiltersAndSearch}/>
        </Container>
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
  {fetchTodos, fetchTodosWithFiltersAndSearch, clearFilter, clearSearchString}
)(TodosAll)