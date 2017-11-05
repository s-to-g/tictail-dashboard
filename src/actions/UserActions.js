export function FetchUsersAction() {
  return function(dispatch) {
    dispatch({
      type: "FETCH_USERS"
    })
  }
}

export function ReceivedUsersAction(users) {
  return function(dispatch) {
    dispatch({
      type: "RECEIVED_USERS", payload: users
    })
  }
}

export function AddUserAction(newUser) {
  return function(dispatch) {
    dispatch({
      type: "ADD_USER", payload: newUser
    })
  }
}

export function DeleteUserAction(id) {
  return function(dispatch, getState) {
    const {users} = getState();
    const newItems = users.items.filter((item) => { return item.id !== id });
    dispatch({
      type: "DELETE_USER", payload: newItems
    })
  }
}

export function UpdateUserAction(id, updatedUser) {
  return function(dispatch, getState) {
    const {users} = getState();
    let newItems = users.items.map((item) => {
      if(item.id === id ) {
        item = updatedUser;
      }
      return item;
    });
    dispatch({
      type: "UPDATE_USER", payload: newItems
    })
  }
}


export function ErrorAction() {
  return function(dispatch) {
    dispatch({
      type: "ERROR"
    })
  }
}
