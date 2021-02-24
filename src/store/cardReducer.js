import {ADD_NEW_CARD, CLOSE_CARD_EXTENDED, OPEN_CARD_EXTENDED, EDIT_CARD, CHANGE_ORDER} from "./types";
const arrayMove = require('array-move');


let initCards = {
    cardsID: 2,
    cards: {
        todo: [
            {
                id: 'werg',
                name: 'New Card Name',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
                color: 'lightyellow'
            },
            {
                id: 'wqefv',
                name: 'Other Card Name',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                color: 'lightpink'
            }
        ],
        doing: [],
        done: [
            {
                id: 'pokpoj',
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
                    id: data.name.toLowerCase().replace(/ /g, "_") + cardId,
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
        case CHANGE_ORDER:
            let src_i = action.payload.src_i,
                dst_i = action.payload.dst_i,
                src_stage = action.payload.src_stage,
                dst_stage = action.payload.dst_stage,
                quantity = state.cards[dst_stage].length,
                changeCard = state.cards[src_stage][src_i];
            if (src_stage == dst_stage) {
                return {
                    ...state,
                    cards: {
                        ...state.cards,
                        [src_stage]: arrayMove(state.cards[src_stage], src_i, dst_i)
                    }
                };
            } else {
                state.cards[src_stage].splice(src_i, 1);
                return {
                    ...state,
                    cards: {
                        ...state.cards,
                        [dst_stage]: arrayMove([...state.cards[dst_stage].concat(changeCard)], quantity, dst_i)
                    }
                };
            }
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
            if (edit_stage != new_stage) {
                state.cards[edit_stage].splice(index, 1);
                return {
                    ...state,
                    cards: {
                        ...state.cards,
                        [new_stage]: [...state.cards[new_stage].concat(editCard)]
                    }
                };
            } else {
                state.cards[edit_stage][index] = Object.assign(editCard);
            }


        default: return state
    }
}