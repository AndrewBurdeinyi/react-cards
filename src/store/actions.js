import {
    CREATE_MODAL_SHOW,
    CREATE_MODAL_CLOSE,
    OPEN_CARD_EXTENDED,
    CLOSE_CARD_EXTENDED,
    ADD_NEW_CARD,
    EDIT_CARD
} from "./types";

export function showCreateModal(params) {
    return {
        type: CREATE_MODAL_SHOW
    }
}

export function closeCreateModal(params) {
    return {
        type: CREATE_MODAL_CLOSE
    }
}

export function openCardExtended() {
    return {
        type: OPEN_CARD_EXTENDED
    }
}

export function closeCardExtended() {
    return {
        type: CLOSE_CARD_EXTENDED
    }
}

export function addNewCard(name, text, stage, color) {
    return {
        type: ADD_NEW_CARD,
        payload: {
            name,
            text,
            stage,
            color
        }
    }
}

export function editCard(id, name, text, stage, color) {
    return {
        type: EDIT_CARD,
        payload: {
            id,
            name,
            text,
            stage,
            color
        }
    }
}
