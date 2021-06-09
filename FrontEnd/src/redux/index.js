import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import authReducer from './Reducers/authReducer';
import productReducer from './Reducers/ProductReducer';


const rootReducer = combineReducers({
    productReducer,
    authReducer
});

const middleware = [thunk];
const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default Store;