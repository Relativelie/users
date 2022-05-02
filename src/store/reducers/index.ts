import { combineReducers } from 'redux';
import { listBlockReducer } from './listBlockReducer';
import { filterReducer } from './filterReducer';
import { cardBlockReducer } from './cardBlockReducer';
import { sendRequestReducer } from './sendRequestReducer';

export const reducers = {
    listBlockReducer,
    filterReducer,
    cardBlockReducer,
    sendRequestReducer,
};

export const rootReducer = combineReducers(
    reducers,
);
export type RootState = ReturnType<typeof rootReducer>;
