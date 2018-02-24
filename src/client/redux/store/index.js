import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

var enhancder = null;

if(process.env.NODE_ENV === 'production') {
    enhancder = applyMiddleware(thunk);
} else {
    enhancder = applyMiddleware(thunk, createLogger());
}

const store = createStore(rootReducer, enhancder);

export default store;
