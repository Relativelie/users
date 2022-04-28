export interface ListOfUsersState {
    list: any[],
    defaultFilter: string,
    activeFilter: string,
    allFilters: any,
    isFiltered: boolean,
    isOpenListCard: boolean,
    openedCardId: null | number
}

export enum ListOfUsersActionTypes {
    OPEN_USER_INFO = 'OPEN_USER_INFO',
    CLOSE_USER_INFO = 'CLOSE_USER_INFO',
    SAVE_USERS_LIST = 'SAVE_USERS_LIST',
    TURN_OFF_FILTER = 'TURN_OFF_FILTER',
    TURN_ON_FILTER = 'TURN_ON_FILTER',
}

interface SaveUsersList {
    type: ListOfUsersActionTypes.SAVE_USERS_LIST,
    data: any[]
}

interface TurnOffFilter {
    type: ListOfUsersActionTypes.TURN_OFF_FILTER,
}

interface TurnOnFilter {
    type: ListOfUsersActionTypes.TURN_ON_FILTER,
    filterBy: string
}

interface OpenUserInfo {
    type: ListOfUsersActionTypes.OPEN_USER_INFO,
    id: number
}

interface CloseUserInfo {
    type: ListOfUsersActionTypes.CLOSE_USER_INFO,
}

export type ListOfUsersAction =
    TurnOnFilter
    | TurnOffFilter
    | OpenUserInfo
    | CloseUserInfo
    | SaveUsersList;
