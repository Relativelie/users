import { combineReducers } from 'redux';
import { listBlockReducer } from './listBlockReducer';
import { filterReducer } from './filterReducer';
import { userInfoReducer } from './userInfoReducer';
import { sendRequestReducer } from './sendRequestReducer';

export const reducers = {
    listBlockReducer,
    filterReducer,
    userInfoReducer,
    sendRequestReducer,
};

export const rootReducer = combineReducers(
    reducers,
);
export type RootState = ReturnType<typeof rootReducer>;
