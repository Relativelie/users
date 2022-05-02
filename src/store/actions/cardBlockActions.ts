import { CardBlockAction, CardBlockActionTypes } from '../../types/cardBlockTypes';

export const turnOnEditMode = ():CardBlockAction => ({
    type: CardBlockActionTypes.TURN_ON_EDIT_MODE,
});

export const turnOffEditMode = ():CardBlockAction => ({
    type: CardBlockActionTypes.TURN_OFF_EDIT_MODE,
});

export const changeBtnAvailability = (value:boolean):CardBlockAction => ({
    type: CardBlockActionTypes.CHANGE_BUTTON_AVAILABILITY,
    value,
});
