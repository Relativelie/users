export interface ListBlockState {
    list: any[],
    isOpenListCard: boolean,
    openedCardId: null | number
}

export enum ListBlockActionTypes {
    OPEN_CARD = 'OPEN_CARD',
    CLOSE_CARD = 'CLOSE_CARD',
    SAVE_LIST = 'SAVE_LIST',
    LOADING_LIST = 'LOADING_LIST',
}

interface LoadingList {
    type: ListBlockActionTypes.LOADING_LIST,
    value: boolean
}

interface SaveList {
    type: ListBlockActionTypes.SAVE_LIST,
    data: any[]
}
interface OpenCard {
    type: ListBlockActionTypes.OPEN_CARD,
    id: number
}

interface CloseCard {
    type: ListBlockActionTypes.CLOSE_CARD,
}

export type ListBlockAction =
    | OpenCard
    | CloseCard
    | SaveList
    | LoadingList;
