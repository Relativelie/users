import { CardBlockAction, CardBlockActionTypes, CardBlockState } from '../../types/cardBlockTypes';

const initialState: CardBlockState = {
    isDisabledForm: true,
    isDisabledSendBtn: false,
};

export const cardBlockReducer = (state = initialState, action: CardBlockAction): CardBlockState => {
    switch (action.type) {
        case CardBlockActionTypes.TURN_ON_EDIT_MODE: {
            return {
                ...state,
                isDisabledForm: false,
            };
        }
        case CardBlockActionTypes.TURN_OFF_EDIT_MODE: {
            return {
                ...state,
                isDisabledForm: true,
            };
        }
        case CardBlockActionTypes.CHANGE_BUTTON_AVAILABILITY: {
            return {
                ...state,
                isDisabledSendBtn: action.value,
            };
        }

        default:
            return state;
    }
};
