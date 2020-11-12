import { PRODUCT_PAGE_FAIL, PRODUCT_PAGE_REQUEST, PRODUCT_PAGE_SUCCESS } from "../constants/productConstants";

function productPageReducer(state= {products:[]}, action){
    switch (action.type){
        case PRODUCT_PAGE_REQUEST:
            return {loading: true };
        case PRODUCT_PAGE_SUCCESS:
        return {loading:false, products: action.payload };
        case PRODUCT_PAGE_FAIL:
            return {loading:false, error: action.payload }
        default:
            return state;    
    }
}

export { productPageReducer }