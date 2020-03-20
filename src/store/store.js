import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import ItemReduser from './reducer';

const store = createStore(ItemReduser, applyMiddleware(thunk));

export default store;