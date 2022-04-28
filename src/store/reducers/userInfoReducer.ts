import { UserInfoState, UserInfoAction, UserInfoActionTypes } from '../../types/userInfoTypes';

const initialState: UserInfoState = {
    isEditingMode: false,
};

export const userInfoReducer = (state = initialState, action: UserInfoAction): UserInfoState => {
    switch (action.type) {
        case UserInfoActionTypes.TURN_ON_EDIT_MODE: {
            return {
                ...state,
                isEditingMode: true,
            };
        }
        case UserInfoActionTypes.TURN_OFF_EDIT_MODE: {
            return {
                ...state,
                isEditingMode: false,
            };
        }
        default:
            return state;
    }
};
