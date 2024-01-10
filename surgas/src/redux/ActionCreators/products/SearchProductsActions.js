import * as ActionTypes from '../../ActionTypes';

import store from '../../store';

export const searchProducts = () => {
    store.dispatch({
        type: ActionTypes.PRODUCT_SEARCH_REQUEST
    });
    const products = require('../../../mocks/products.json');
    store.dispatch({
        type: ActionTypes.PRODUCT_SEARCH_SUCCESS,
        payload: products
    });
}