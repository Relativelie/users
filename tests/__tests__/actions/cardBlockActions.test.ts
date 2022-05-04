import { changeBtnAvailability, turnOffEditMode, turnOnEditMode } from '../../../src/store/actions/cardBlockActions';
import { CardBlockActionTypes } from '../../../src/types/cardBlockTypes';

describe('card block actions', () => {
    test('action to turn on edit mode', () => {
        expect(turnOnEditMode()).toEqual({
            type: CardBlockActionTypes.TURN_ON_EDIT_MODE,
        });
    });

    test('action to turn off edit mode', () => {
        expect(turnOffEditMode()).toEqual({
            type: CardBlockActionTypes.TURN_OFF_EDIT_MODE,
        });
    });

    test('action to change btn availability - true value', () => {
        expect(changeBtnAvailability(true)).toEqual({
            type: CardBlockActionTypes.CHANGE_BUTTON_AVAILABILITY,
            value: true,
        });
    });

    test('action to change btn availability - false value', () => {
        expect(changeBtnAvailability(false)).toEqual({
            type: CardBlockActionTypes.CHANGE_BUTTON_AVAILABILITY,
            value: false,
        });
    });
});
