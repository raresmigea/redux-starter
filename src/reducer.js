import * as actions from './actionTypes';

// reducer is a function with 2 parameters: current state, action

let lastId = 0;

export default function reducer(state = [], action) {
  // return a new state based on action
  if (action.type === actions.BUG_ADDED) {
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      },
    ];
  } else if (action.type === actions.BUG_REMOVED) {
    // return all bugs but the bug with the given id
    return state.filter((bug) => bug.id !== action.payload.id);
  } else if (action.type === actions.BUG_RESOLVED) {
    // resolves a bug
    return state.map((bug) =>
      bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
    );
  }

  // if dispatch an action that doesn't exist - return current state
  return state;
}
