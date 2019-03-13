const initialState = {
  todos: {
    data: [],
    fetched: false,
  }
}

export default function(state = initialState, action) {
  const { type, payloads } = action

  switch(type) {
    case 'ENTITIES/GOT': {
      const { data, name } = payloads

      return {
        ...state,
        [name]: {
          ...state[name],
          data,
        }
      }
    }

    default: {
      return state
    }
  }
}
