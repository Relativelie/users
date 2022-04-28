export interface UserInfoState {
    isEditingMode: boolean
}

export enum UserInfoActionTypes {
    TURN_ON_EDIT_MODE = 'TURN_ON_EDIT_MODE',
    TURN_OFF_EDIT_MODE = 'TURN_OFF_EDIT_MODE',
}

interface TurnOnEditMode {
    type: UserInfoActionTypes.TURN_ON_EDIT_MODE
}

interface TurnOffEditMode {
    type: UserInfoActionTypes.TURN_OFF_EDIT_MODE
}

export type UserInfoAction =
    TurnOnEditMode
    | TurnOffEditMode;
