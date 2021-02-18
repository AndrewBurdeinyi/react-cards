import {CREATE_MODAL_CLOSE, CREATE_MODAL_SHOW, TOGGLE_CARTE, CLOSE_CARTE, ADD_FLD_OPEN, ADD_FLD_CLOSE} from "./types";

let initModState = {
    createModalShow: false,
    carteShow: false,
    createFolder: false
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
        case ADD_FLD_OPEN:
            return {
                ...state,
                createFolder: true
            };
        case ADD_FLD_CLOSE:
            return {
                ...state,
                createFolder: false
            };
        default: return state
    }
}