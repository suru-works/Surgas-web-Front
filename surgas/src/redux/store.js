import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { languageReducer } from "./reducers/system/language";

const reducers = combineReducers({
    language : languageReducer,
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