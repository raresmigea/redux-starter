import { createStore } from 'redux';
import reducer from './reducer';
import * as actions from './actionTypes';

const store = createStore(reducer);

const unsubsribe = store.subscribe(() => {
  console.log('state changed: ', store.getState());
});

store.dispatch({
  type: actions.BUG_ADDED,
  payload: {
    description: 'Bug1',
  },
});

store.dispatch({
  type: actions.BUG_ADDED,
  payload: {
    description: 'Bug2',
  },
});

store.dispatch({
  type: actions.BUG_ADDED,
  payload: {
    description: 'Bug3',
  },
});

unsubsribe();

store.dispatch({
  type: actions.BUG_REMOVED,
  payload: { id: 2 },
});

console.log('store ', store.getState());
export default store;
