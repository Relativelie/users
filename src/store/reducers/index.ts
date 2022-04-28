import { combineReducers } from 'redux';
import { listOfUsersReducer } from './listOfUsersReducer';

export const reducers = {
    listOfUsersReducer,
};

export const rootReducer = combineReducers(
    reducers,
);
export type RootState = ReturnType<typeof rootReducer>;
