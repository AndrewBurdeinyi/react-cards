import {CREATE_MODAL_CLOSE, CREATE_MODAL_SHOW, TOGGLE_CARTE} from "./types";

let initModState = {
    createModalShow: false,
    carteShow: false
};

export function switchReducer(state = initModState, action) {
    switch (action.type) {
        case CREATE_MODAL_SHOW:
            return {
                ...state,
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
        default: return state
    }
}