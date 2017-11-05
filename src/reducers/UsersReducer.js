function getInitialState() {
  return {
    items: [],
    isLoading: false,
    hasError: false
  }
}

export default function users(state = getInitialState(), action) {
  switch (action.type) {
    case "FETCH_USERS":
      return {
        ...state,
        isLoading: true,
      }
    case "RECEIVED_USERS":
      return {
        ...state,
        items: action.payload,
        isLoading: false,
        hasError: false
      }
    case "ADD_USER":
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    case "DELETE_USER":
      return {
        ...state,
        items: action.payload
      }
    case "UPDATE_USER":
      return {
        ...state,
        items: action.payload
      }
    case "ERROR":
      return {
        ...state,
        isLoading: false,
        hasError: true
      }

    default: return state;
  }
}
