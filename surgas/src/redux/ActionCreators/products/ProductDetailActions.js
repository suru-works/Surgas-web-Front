import * as ActionTypes from '../../ActionTypes';

import store from '../../store';

export const toogleProductDetailModal = () => {
    store.dispatch({
        type: ActionTypes.TOOGLE_PRODUCT_DETAIL_MODAL
    });
}

export const setSelectedProduct = (selectedProduct) => {
    store.dispatch({
        type: ActionTypes.SET_SELECTED_PRODUCT,
        payload: selectedProduct
    });
}