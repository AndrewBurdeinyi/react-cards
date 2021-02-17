import {CREATE_MODAL_CLOSE, CREATE_MODAL_SHOW, TOGGLE_CARTE, CLOSE_CARTE} from "./types";

let initModState = {
    createModalShow: false,
    carteShow: false
};

export function switchReducer(state = initModState, action) {
    switch (action.type) {
        case CREATE_MODAL_SHOW:
            return {
                ...state,
                carteShow: false,
                createModalShow: true
            };
        case CREATE_MODAL_CLOSE:
            return {
                ...state,
                createModalShow: false
            };
        case TOGGLE_CARTE:
            return {
                ...state,
                carteShow: (!state.carteShow)
            };
        case CLOSE_CARTE:
            return {
                ...state,
                carteShow: false
            };
        default: return state
    }
}