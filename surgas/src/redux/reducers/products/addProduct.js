import * as ActionTypes from '../../ActionTypes';

export function AddProductReducer(state = { isOpen: false, loading: false, error: false, productData: null}, action) {
    switch (action.type) {
        case ActionTypes.TOOGLE_ADD_PRODUCT_MODAL:
            return {
                ...state,
                isOpen: !state.isOpen,
            };
        default:
            return state;
    }
}