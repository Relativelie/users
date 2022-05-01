export interface UserInfoState {
    isDisabledForm: boolean,
    isDisabledSendBtn: boolean,
    inputValueChange: string
}

export enum UserInfoActionTypes {
    TURN_ON_EDIT_MODE = 'TURN_ON_EDIT_MODE',
    TURN_OFF_EDIT_MODE = 'TURN_OFF_EDIT_MODE',
    CHANGE_BUTTON_AVAILABILITY = 'CHANGE_BUTTON_AVAILABILITY',
    VALIDATE_INPUT_VALUE = "VALIDATE_INPUT_VALUE",
}

interface TurnOnEditMode {
    type: UserInfoActionTypes.TURN_ON_EDIT_MODE
}

interface TurnOffEditMode {
    type: UserInfoActionTypes.TURN_OFF_EDIT_MODE
}

interface СhangeBtnAvailability {
    type: UserInfoActionTypes.CHANGE_BUTTON_AVAILABILITY,
    value: boolean
}

export type UserInfoAction =
    TurnOnEditMode
    | TurnOffEditMode
    | СhangeBtnAvailability;
