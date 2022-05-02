export interface ListBlockState {
    list: any[],
    isOpenListCard: boolean,
    openedCardId: null | number
}

export enum ListBlockActionTypes {
    OPEN_USER_INFO = 'OPEN_USER_INFO',
    CLOSE_USER_INFO = 'CLOSE_USER_INFO',
    SAVE_USERS_LIST = 'SAVE_USERS_LIST',
}

interface SaveUsersList {
    type: ListBlockActionTypes.SAVE_USERS_LIST,
    data: any[]
}
interface OpenUserInfo {
    type: ListBlockActionTypes.OPEN_USER_INFO,
    id: number
}

interface CloseUserInfo {
    type: ListBlockActionTypes.CLOSE_USER_INFO,
}

export type ListBlockAction =
    | OpenUserInfo
    | CloseUserInfo
    | SaveUsersList;
