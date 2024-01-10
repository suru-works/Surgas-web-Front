import * as ActionTypes from '../../ActionTypes';

import store from '../../store';

export const toggleAddProductModal = () => {
    store.dispatch({
        type: ActionTypes.TOOGLE_ADD_PRODUCT_MODAL
    });
}