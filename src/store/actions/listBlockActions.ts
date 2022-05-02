import { ListBlockAction, ListBlockActionTypes } from '../../types/listBlockTypes';

export const saveUsersList = (data: any[]): ListBlockAction => ({
    type: ListBlockActionTypes.SAVE_USERS_LIST,
    data,
});

export const openUserInfo = (id: number): ListBlockAction => ({
    type: ListBlockActionTypes.OPEN_USER_INFO,
    id,
});

export const closeUserInfo = (): ListBlockAction => ({
    type: ListBlockActionTypes.CLOSE_USER_INFO,
});
