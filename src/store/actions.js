import {
    CREATE_MODAL_SHOW,
    CREATE_MODAL_CLOSE,
    OPEN_CARD_EXTENDED,
    CLOSE_CARD_EXTENDED,
    ADD_NEW_CARD,
    EDIT_CARD, CHANGE_ORDER, TOGGLE_CARTE, CLOSE_CARTE, CHANGE_CURRENT_FOLDER, ADD_FLD_CLOSE, ADD_FLD_OPEN, ADD_NEW_FOLDER
} from "./types";

export function showCreateModal() {
    return {
        type: CREATE_MODAL_SHOW
    }
}

export function closeCreateModal() {
    return {
        type: CREATE_MODAL_CLOSE
    }
}

export function toggleCarte() {
    return {
        type: TOGGLE_CARTE
    }
}

export function closeCarte() {
    return {
        type: CLOSE_CARTE
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

export function editCard(id, name, text, stage, newStage, color) {
    return {
        type: EDIT_CARD,
        payload: {
            id,
            name,
            text,
            stage,
            newStage,
            color
        }
    }
}

export function changeOrderCards(src_i, dst_i, src_stage, dst_stage) {
    return {
        type: CHANGE_ORDER,
        payload: {
            src_i,
            dst_i,
            src_stage,
            dst_stage
        }
    }
}

export function changeCurrentFolder(name) {
    return {
        type: CHANGE_CURRENT_FOLDER,
        payload: name
    }
}

export function addFldOpen() {
    return {
        type: ADD_FLD_OPEN
    }
}

export function addFldClose() {
    return {
        type: ADD_FLD_CLOSE
    }
}

export function addNewFolder(name) {
    return {
        type: ADD_NEW_FOLDER,
        payload: name
    }
}
