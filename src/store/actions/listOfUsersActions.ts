import {
    ListOfUsersAction,
    ListOfUsersActionTypes,
} from '../../types/listOfUsersTypes';

export const saveUsersList = (data: any[]): ListOfUsersAction => ({
    type: ListOfUsersActionTypes.SAVE_USERS_LIST,
    data,
});

export const turnOnFilter = (filterBy: string): ListOfUsersAction => ({
    type: ListOfUsersActionTypes.TURN_ON_FILTER,
    filterBy,
});

export const turnOffFilter = (): ListOfUsersAction => ({
    type: ListOfUsersActionTypes.TURN_OFF_FILTER,
});

export const openUserInfo = (id: number): ListOfUsersAction => ({
    type: ListOfUsersActionTypes.OPEN_USER_INFO,
    id,
});

export const closeUserInfo = (): ListOfUsersAction => ({
    type: ListOfUsersActionTypes.CLOSE_USER_INFO,
});
