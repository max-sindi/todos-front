import Api from './Api'

class TodosApi extends Api {
  constructor() {
    super()
    this.apiUrl = 'todos'
  }

  saveNewTodo(data) {
    this.createRequest(this.apiUrl, 'post', data)
  }
}

export default TodosApi
