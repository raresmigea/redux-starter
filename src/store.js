import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

store.dispatch({
  type: 'bugAdded',
  payload: {
    description: 'Bug1',
  },
});
console.log('store ', store.getState());
export default store;
