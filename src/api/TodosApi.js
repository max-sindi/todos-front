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

  deleteTodo(id) {
    return this.sendRequest(`${this.apiUrl}/${id}`, 'delete')
  }

  getTodoSingle(id) {
    return this.sendRequest(`${this.apiUrl}/${id}`, 'get')
  }

  saveEdit(id, data) {
    return this.sendRequest(`${this.apiUrl}/${id}`, 'put', data)
  }
}

export default TodosApi
