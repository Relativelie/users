import { UserInfoAction, UserInfoActionTypes } from '../../types/userInfoTypes';

export const turnOnEditMode = ():UserInfoAction => ({
    type: UserInfoActionTypes.TURN_ON_EDIT_MODE,
});

export const turnOffEditMode = ():UserInfoAction => ({
    type: UserInfoActionTypes.TURN_OFF_EDIT_MODE,
});

export const accumulateCheckingValues = (value: boolean):UserInfoAction => ({
    type: UserInfoActionTypes.ACCUMULATE_CHECKING_VALUES,
    value,
});
