export const types = {
  FETCH_TODOS: 'FETCH_TODOS',
  FETCH_TODO_SINGLE: 'FETCH_TODO_SINGLE',
}

export const fetchTodos = (params = {}) => ({
  type: types.FETCH_TODOS,
  request: {
    url: '/todos'
  }
})

export const fetchTodoById = (id) => ({
  type: types.FETCH_TODO_SINGLE,
  request: {
    url: `/todos/${id}`
  }
})