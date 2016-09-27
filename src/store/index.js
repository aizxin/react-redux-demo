'use strict';
import { applyMiddleware, createStore ,compose} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger'
import rootReducer from '../reducers';


export default (initialState) => {
    const store = compose(
        applyMiddleware(
            thunk,
            createLogger()
        ),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore)(rootReducer, initialState);

    return store;
}