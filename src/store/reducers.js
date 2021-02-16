import {combineReducers} from 'redux';
import { switchReducer } from './switchReducer';
import { cardsReducer } from './cardReducer';


export const rootReducer = combineReducers({
    switch: switchReducer,
    cards: cardsReducer
});

