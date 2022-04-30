import { combineReducers } from 'redux';
import { listOfUsersReducer } from './listOfUsersReducer';
import { userInfoReducer } from './userInfoReducer';

export const reducers = {
    listOfUsersReducer,
    userInfoReducer,
};

export const rootReducer = combineReducers(
    reducers,
);
export type RootState = ReturnType<typeof rootReducer>;
