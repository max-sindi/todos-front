export const types = {
  FETCH_TODOS: 'FETCH_TODOS',
  FETCH_TODO_SINGLE: 'FETCH_TODO_SINGLE',
  DELETE_TODO_SIGNLE: 'DELETE_TODO_SIGNLE',
  UPDATE_TODO_SINGLE: 'UPDATE_TODO_SINGLE'
}

export const fetchTodos = (params = {}) => ({
  type: types.FETCH_TODOS,
  request: {
    url: '/todos'
  }
})

export const fetchTodoById = id => ({
  type: types.FETCH_TODO_SINGLE,
  request: {
    url: `/todos/${id}`
  }
})

export const updateTodoById = (id, data) => ({
  type: types.UPDATE_TODO_SINGLE,
  request: {
    url: `/todos/${id}`,
    method: 'put',
    data,
  }
})

export const deleteTodoById = id => ({
  type: types.UPDATE_TODO_SINGLE,
  request: {
    url: `/todos/${id}`,
    method: 'delete'
  }
})