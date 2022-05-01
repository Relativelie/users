import { UserInfoState, UserInfoAction, UserInfoActionTypes } from '../../types/userInfoTypes';

const initialState: UserInfoState = {
    isDisabledForm: true,
    isDisabledSendBtn: false,
};

export const userInfoReducer = (state = initialState, action: UserInfoAction): UserInfoState => {
    switch (action.type) {
        case UserInfoActionTypes.TURN_ON_EDIT_MODE: {
            return {
                ...state,
                isDisabledForm: false,
            };
        }
        case UserInfoActionTypes.TURN_OFF_EDIT_MODE: {
            return {
                ...state,
                isDisabledForm: true,
            };
        }
        case UserInfoActionTypes.CHANGE_BUTTON_AVAILABILITY: {
            return {
                ...state,
                isDisabledSendBtn: action.value,
            };
        }
        default:
            return state;
    }
};
