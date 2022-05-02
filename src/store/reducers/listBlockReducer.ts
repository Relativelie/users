import { ListBlockAction, ListBlockActionTypes, ListBlockState } from '../../types/listBlockTypes';

const initialState: ListBlockState = {
    list: [],
    isOpenListCard: false,
    openedCardId: null,
};

export const listBlockReducer = (state = initialState, action: ListBlockAction): ListBlockState => {
    switch (action.type) {
        case ListBlockActionTypes.SAVE_LIST: {
            return {
                ...state,
                list: action.data,
            };
        }
        case ListBlockActionTypes.OPEN_CARD: {
            return {
                ...state,
                isOpenListCard: true,
                openedCardId: action.id,
            };
        }

        case ListBlockActionTypes.CLOSE_CARD: {
            return {
                ...state,
                isOpenListCard: false,
                openedCardId: null,
            };
        }
        default:
            return state;
    }
};
