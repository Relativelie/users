import { UserInfoState, UserInfoAction, UserInfoActionTypes } from '../../types/userInfoTypes';

const initialState: UserInfoState = {
    isEditingMode: false,
    isEmptyField: [],
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
        case UserInfoActionTypes.ACCUMULATE_CHECKING_VALUES: {
            const emptyFields = state.isEmptyField;
            emptyFields.push(action.value);
            return {
                ...state,
                isEmptyField: emptyFields,
            };
        }
        default:
            return state;
    }
};
