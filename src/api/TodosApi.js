import Api from './Api'

class TodosApi extends Api {
  constructor() {
    super()
    this.apiUrl = 'todos'
  }

  saveNewTodo(data) {
    return this.sendRequest(this.apiUrl, 'post', data)
  }

  getTodos() {
    return this.sendRequest(this.apiUrl, 'get')
  }
}

export default TodosApi
