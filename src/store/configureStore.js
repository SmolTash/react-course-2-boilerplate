import {createStore , combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import authReduser from '../redusers/auth';

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Store creation
export default () => {
    const store = createStore (
        combineReducers ({         
            auth: authReduser
        }), 
        composeEnhancers (applyMiddleware(thunk))       
    ) ;
    return store;
};