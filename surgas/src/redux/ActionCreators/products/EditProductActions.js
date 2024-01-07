import * as ActionTypes from '../../ActionTypes';

import store from '../../store';

export const toggleEdiitProductModal = () => {
    store.dispatch({
        type: ActionTypes.TOOGLE_EDIT_PRODUCT_MODAL
    });
}