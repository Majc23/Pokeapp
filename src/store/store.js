import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducer } from '../reducers/reducers';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    redu: reducer

});


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);