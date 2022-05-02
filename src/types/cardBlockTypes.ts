export interface CardBlockState {
    isDisabledForm: boolean,
    isDisabledSendBtn: boolean,
}

export enum CardBlockActionTypes {
    TURN_ON_EDIT_MODE = 'TURN_ON_EDIT_MODE',
    TURN_OFF_EDIT_MODE = 'TURN_OFF_EDIT_MODE',
    CHANGE_BUTTON_AVAILABILITY = 'CHANGE_BUTTON_AVAILABILITY',
    VALIDATE_INPUT_VALUE = 'VALIDATE_INPUT_VALUE',
}

interface TurnOnEditMode {
    type: CardBlockActionTypes.TURN_ON_EDIT_MODE
}

interface TurnOffEditMode {
    type: CardBlockActionTypes.TURN_OFF_EDIT_MODE
}

interface ChangeBtnAvailability {
    type: CardBlockActionTypes.CHANGE_BUTTON_AVAILABILITY,
    value: boolean
}

export type CardBlockAction =
    TurnOnEditMode
    | TurnOffEditMode
    | ChangeBtnAvailability;
