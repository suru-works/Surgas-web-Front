import * as ActionTypes from '../../ActionTypes';

export function EditProductReducer(state = { isOpen: false, loading: false, error: false, productData: null}, action) {
    switch (action.type) {
        case ActionTypes.TOOGLE_EDIT_PRODUCT_MODAL:
            return {
                ...state,
                isOpen: !state.isOpen,
                productData: action.payload
            };
        default:
            return state;
    }
}