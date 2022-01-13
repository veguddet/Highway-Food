import {createStore, combineReducers, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import {counterReducer} from './Reducer';

// if multiple reducer available combine them into a single reducer

const rootReducer = combineReducers({
    counterReducer,
   });
   
   // used to create store enhance
   
   export const store = createStore(rootReducer,
       // store enhancer applies middleware to Redux Store
       applyMiddleware(thunk));