import { ListBlockAction, ListBlockActionTypes } from '../../types/listBlockTypes';

export const saveList = (data: any[]): ListBlockAction => ({
    type: ListBlockActionTypes.SAVE_LIST,
    data,
});

export const openCard = (id: number): ListBlockAction => ({
    type: ListBlockActionTypes.OPEN_CARD,
    id,
});

export const closeCard = (): ListBlockAction => ({
    type: ListBlockActionTypes.CLOSE_CARD,
});
