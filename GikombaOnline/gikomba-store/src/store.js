import {createStore, combineReducers} from 'import { connect } from' ;react-redux;
import thunk from 'redux-thunk';
import { productsPageReducer} from './reducers/productReducers';


const initialState= {};
const reducer = combineReducers({
    productsPage: productsPageReducer, 
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));

export default store;

