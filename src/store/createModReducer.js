import {CREATE_MODAL_CLOSE, CREATE_MODAL_SHOW} from "./types";

let initModState = {
    createModalShow: false
};

export function createModReducer(state = initModState, action) {
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
        default: return state
    }
}