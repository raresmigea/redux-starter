// reducer is a function with 2 parameters: current state, action

let lastId = 0;

function reducer(state = [], action) {
  // return a new state based on action
  if (action.type === 'bugAdded') {
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      },
    ];
  } else if (action.type === 'bugRemoved') {
    // return all bugs but the bug with the given id
    return state.filter((bug) => bug.id !== action.payload.id);
  }

  // if dispatch an action that doesn't exist - return current state
  return state;
}
