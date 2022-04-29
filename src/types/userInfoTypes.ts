export interface UserInfoState {
    isEditingMode: boolean,
    isEmptyField: boolean[]
}

export enum UserInfoActionTypes {
    TURN_ON_EDIT_MODE = 'TURN_ON_EDIT_MODE',
    TURN_OFF_EDIT_MODE = 'TURN_OFF_EDIT_MODE',
    ACCUMULATE_CHECKING_VALUES = 'ACCUMULATE_CHECKING_VALUES',
}

interface TurnOnEditMode {
    type: UserInfoActionTypes.TURN_ON_EDIT_MODE
}

interface TurnOffEditMode {
    type: UserInfoActionTypes.TURN_OFF_EDIT_MODE
}

interface AccumulateCheckingValues {
    type: UserInfoActionTypes.ACCUMULATE_CHECKING_VALUES,
    value: boolean
}

export type UserInfoAction =
    TurnOnEditMode
    | TurnOffEditMode
    | AccumulateCheckingValues;
