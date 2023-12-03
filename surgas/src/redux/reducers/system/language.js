import * as ActionTypes from '../../ActionTypes';
import { SPANISH } from "../../../languages/languages";

export function languageReducer(state = { languaje: SPANISH }, action) {
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