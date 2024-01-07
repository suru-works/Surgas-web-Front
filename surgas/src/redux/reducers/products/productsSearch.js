import * as ActionTypes from '../../ActionTypes';

export function ProductsSearchReducer(state = { loading: false, error: false, products: null }, action) {
    switch (action.type) {
        case ActionTypes.PRODUCT_SEARCH_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
                products: null
            };
        case ActionTypes.PRODUCT_SEARCH_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                products: action.payload
            };
        case ActionTypes.PRODUCT_SEARCH_FAILED:
            return {
                ...state,
                loading: false,
                error: true,
                products: action.payload
            };
        case ActionTypes.PRODUCT_SEARCH_RESET:
            return {
                ...state,
                loading: false,
                error: false,
                products: null
            };
        default:
            return state;
    }
}