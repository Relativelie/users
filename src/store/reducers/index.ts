import { combineReducers } from 'redux';
import { listOfUsersReducer } from './listOfUsersReducer';
import { userInfoReducer } from './userInfoReducer';
import { sendRequestReducer } from './sendRequestReducer';

export const reducers = {
    listOfUsersReducer,
    userInfoReducer,
    sendRequestReducer,
};

export const rootReducer = combineReducers(
    reducers,
);
export type RootState = ReturnType<typeof rootReducer>;
