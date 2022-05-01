import { UserInfoAction, UserInfoActionTypes } from '../../types/userInfoTypes';

export const turnOnEditMode = ():UserInfoAction => ({
    type: UserInfoActionTypes.TURN_ON_EDIT_MODE,
});

export const turnOffEditMode = ():UserInfoAction => ({
    type: UserInfoActionTypes.TURN_OFF_EDIT_MODE,
});

export const changeBtnAvailability = (value:boolean):UserInfoAction => ({
    type: UserInfoActionTypes.CHANGE_BUTTON_AVAILABILITY,
    value,
});

