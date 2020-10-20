import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

const unsubsribe = store.subscribe(() => {
  console.log('state changed: ', store.getState());
});

store.dispatch({
  type: 'bugAdded',
  payload: {
    description: 'Bug1',
  },
});

store.dispatch({
  type: 'bugAdded',
  payload: {
    description: 'Bug2',
  },
});

store.dispatch({
  type: 'bugAdded',
  payload: {
    description: 'Bug3',
  },
});

unsubsribe();

store.dispatch({
  type: 'bugRemoved',
  payload: { id: 2 },
});

console.log('store ', store.getState());
export default store;
