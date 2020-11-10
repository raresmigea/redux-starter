import { createStore } from 'redux';
import reducer from './reducer';
import { bugAdded, bugRemoved, bugResolved } from './actions';

const store = createStore(reducer);

const unsubsribe = store.subscribe(() => {
  console.log('State changed: ', store.getState());
});

store.dispatch(bugAdded('Bug1'));
store.dispatch(bugAdded('Bug2'));
store.dispatch(bugAdded('Bug3'));

unsubsribe();

store.dispatch(bugRemoved(2));
store.dispatch(bugResolved(1));

console.log('store: ', store.getState());
export default store;
