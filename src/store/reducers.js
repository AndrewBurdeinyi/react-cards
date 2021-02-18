import {combineReducers} from 'redux';
import { switchReducer } from './switchReducer';
import { cardsReducer } from './cardReducer';
import {folderReducer} from "./folderReducer";


export const rootReducer = combineReducers({
    switch: switchReducer,
    cards: cardsReducer,
    fold: folderReducer
});

