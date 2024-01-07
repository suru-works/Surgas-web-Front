import * as ActionTypes from '../../ActionTypes';

export function ProductDetailReducer(state = { isOpen: false, loading: false, error: false, productData: null}, action) {
    switch (action.type) {
        case ActionTypes.TOOGLE_PRODUCT_DETAIL_MODAL:
            return {
                ...state,
                isOpen: !state.isOpen,                
                productData: action.payload
            };
        default:
            return state;
    }
}