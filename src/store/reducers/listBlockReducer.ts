import { ListBlockAction, ListBlockActionTypes, ListBlockState } from '../../types/listBlockTypes';

const initialState: ListBlockState = {
    list: [],
    isOpenListCard: false,
    openedCardId: null,
};

export const listBlockReducer = (state = initialState, action: ListBlockAction): ListBlockState => {
    switch (action.type) {
        case ListBlockActionTypes.SAVE_USERS_LIST: {
            return {
                ...state,
                list: action.data,
            };
        }
        case ListBlockActionTypes.OPEN_USER_INFO: {
            return {
                ...state,
                isOpenListCard: true,
                openedCardId: action.id,
            };
        }

        case ListBlockActionTypes.CLOSE_USER_INFO: {
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
