import {combineReducers} from 'redux';
import { createModReducer } from './createModReducer';
import { cardsReducer } from './cardReducer';


export const rootReducer = combineReducers({
    createMod: createModReducer,
    cards: cardsReducer
});

