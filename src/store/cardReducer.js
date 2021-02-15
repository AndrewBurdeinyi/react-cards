import {ADD_NEW_CARD, CLOSE_CARD_EXTENDED, OPEN_CARD_EXTENDED, EDIT_CARD} from "./types";
import {cloneWithoutLoc} from "@babel/types";

let initCards = {
    cardsID: 2,
    cards: {
        todo: [
            {
                id: 0,
                name: 'New Card Name',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
                color: 'lightyellow'
            },
            {
                id: 1,
                name: 'Other Card Name',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                color: 'lightpink'
            }
        ],
        doing: [],
        done: [
            {
                id: 2,
                name: 'Other Name',
                text: 'Lorem ipsum dolor sit amet',
                color: 'lightgreen'
            }
        ]
    },
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
            let data = action.payload,
                stage = data.stage,
                cardId = state.cardsID + 1,
                newCard = {
                    id: cardId,
                    name: data.name,
                    text: data.text,
                    color: data.color
                };
            return {
                ...state,
                cardsID: cardId,
                cards: {
                    ...state.cards,
                    [stage]: [...state.cards[stage].concat(newCard)]
                }
            };
        case EDIT_CARD:
            let id = action.payload.id,
                edit_stage = action.payload.stage,
                new_stage = action.payload.newStage,
                index = state.cards[edit_stage].findIndex(x => x.id === id),
                editCard = {
                    id,
                    name: action.payload.name,
                    text: action.payload.text,
                    color: action.payload.color
                };
            if (edit_stage == new_stage) {
                state.cards[edit_stage][index] = Object.assign(editCard);
            } else {
                state.cards[edit_stage].splice(index, 1);
                return {
                    ...state,
                    cards: {
                        ...state.cards,
                        [new_stage]: [...state.cards[new_stage].concat(editCard)]
                    }
                };
            }

            // const newState = state.cards[index] = Object.assign(action.payload);
        default: return state
    }
}