import {ADD_NEW_CARD, CLOSE_CARD_EXTENDED, OPEN_CARD_EXTENDED, EDIT_CARD} from "./types";

let initCards = {
    cardsID: 2,
    cards: [
        {
            id: 0,
            name: 'New Card Name',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
            stage: 'todo',
            color: 'lightyellow'
        },
        {
            id: 1,
            name: 'Other Card Name',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            stage: 'todo',
            color: 'lightpink'
        },
        {
            id: 2,
            name: 'Other Name',
            text: 'Lorem ipsum dolor sit amet',
            stage: 'done',
            color: 'lightgreen'
        },
    ],
    cardExtendedOpen: false
};

export function cardsReducer(state = initCards, action) {
    switch (action.type) {
        case OPEN_CARD_EXTENDED:
            return {
                ...state,
                cardExtendedOpen: true
            };
        case CLOSE_CARD_EXTENDED:
            return {
                ...state,
                cardExtendedOpen: false
            };
        case ADD_NEW_CARD:
            let payload = action.payload,
                cardId = state.cardsID + 1,
                newCard = {
                    id: cardId,
                    ...payload
                };
            return {
                ...state,
                cardsID: cardId,
                cards: [
                    ...state.cards.concat(newCard)
                ]
            };
        case EDIT_CARD:
            let id = action.payload.id,
                index = state.cards.findIndex(x => x.id === id);

            const newState = state.cards[index] = Object.assign(action.payload);
        default: return state
    }
}