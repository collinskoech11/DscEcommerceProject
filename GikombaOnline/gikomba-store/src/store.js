import {createStore, combineReducers} from 'import { connect } from' ;import { compose } from 'redux';
react-redux;
import thunk from 'redux-thunk';
import { productsPageReducer} from './reducers/productReducers';


const initialState= {};
const reducer = combineReducers({
    productsPage: productsPageReducer, 
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;

