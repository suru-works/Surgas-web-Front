import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { languageReducer } from "./reducers/system/language";
import { ProductDetailReducer } from "./reducers/products/productDetail";
import { AddProductReducer } from "./reducers/products/addProduct";
import { EditProductReducer } from "./reducers/products/editProduct";
import { ProductsSearchReducer } from "./reducers/products/productsSearch";

const reducers = combineReducers({
    language : languageReducer,
    productDetail : ProductDetailReducer,
    addProduct : AddProductReducer,
    editProduct : EditProductReducer,
    productsSearch : ProductsSearchReducer,
});

const middlewares = [
    // Mis middlewares
];

const enhancers = [
    // Mis enhancers
];

const store = configureStore({
    reducer:reducers,
});
export default store;