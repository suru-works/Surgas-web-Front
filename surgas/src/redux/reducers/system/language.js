import * as ActionTypes from '../../ActionTypes';
import languajes from "../../../languages/languages.json";

export function languageReducer(state = { languaje: languajes.spanish }, action) {
    switch (action.type) {
        case ActionTypes.CHANGE_LANGUAJE:
            return {
                ...state,
                languaje: action.payload,
            };
        default:
            return state;
    }
}