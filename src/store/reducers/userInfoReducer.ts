import { UserInfoState, UserInfoAction, UserInfoActionTypes } from '../../types/userInfoTypes';

const initialState: UserInfoState = {
    isDisabled: true,
};

export const userInfoReducer = (state = initialState, action: UserInfoAction): UserInfoState => {
    switch (action.type) {
        case UserInfoActionTypes.TURN_ON_EDIT_MODE: {
            return {
                ...state,
                isDisabled: false,
            };
        }
        case UserInfoActionTypes.TURN_OFF_EDIT_MODE: {
            return {
                ...state,
                isDisabled: true,
            };
        }
        default:
            return state;
    }
};
