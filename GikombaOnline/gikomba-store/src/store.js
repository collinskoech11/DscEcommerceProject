import {createStore, combineReducers} from 'import { connect } from' ;react-redux;
import thunk from 'redux-thunk';
import { productsPageReducer} from './reducers/productReducers';


const initialState= {};
const reducer = combineReducers({
    productsPage: productsPageReducer, 
})

const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));

export default store;

