import { PRODUCT_FETCHING, DETAIL_PRODUCT_FETCHING, CLOSE_LOADING, SET_LOADING, SEARCH } from "../constant/actionTypes";


const initState = {
    products: [],
    Single_Product: [],
    search_product: '',
    loading: false
}

const productReducer = (state = initState, action) => {
    if (action.type === SET_LOADING) {
        return {
            ...state,
            loading: true
        }
    }
    else if (action.type === CLOSE_LOADING) {
        return {
            ...state,
            loading: false
        }
    }
    else if (action.type === PRODUCT_FETCHING) {
        return {
            ...state,
            products: action.payload
        }
    }
    else if (action.type === DETAIL_PRODUCT_FETCHING) {
        return {
            ...state,
            Single_Product: action.payload
        }
    }
    else if (action.type === SEARCH) {
        return {
            ...state,
            search_product: action.payload
        }
    }
    return state;

}
export default productReducer;