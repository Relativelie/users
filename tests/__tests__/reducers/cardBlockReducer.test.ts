import { changeBtnAvailability, turnOffEditMode, turnOnEditMode } from '../../../src/store/actions/cardBlockActions';
import { cardBlockReducer } from '../../../src/store/reducers/cardBlockReducer';
import { CardBlockState } from '../../../src/types/cardBlockTypes';

let stateOnEditMode: CardBlockState;
let stateOffEditMode: CardBlockState;
beforeEach(() => {
    stateOnEditMode = {
        isDisabledForm: true,
        isDisabledSendBtn: false,
    };
    stateOffEditMode = {
        isDisabledForm: false,
        isDisabledSendBtn: true,
    };
});

describe('card block reducer', () => {
    test('turn on edit mode', () => {
        const newState = cardBlockReducer(
            stateOnEditMode,
            turnOnEditMode(),
        );
        expect(newState).toStrictEqual({
            ...stateOnEditMode,
            isDisabledForm: false,
        });
    });

    test('turn off edit mode', () => {
        const newState = cardBlockReducer(
            stateOffEditMode,
            turnOffEditMode(),
        );
        expect(newState).toStrictEqual({
            ...stateOffEditMode,
            isDisabledForm: true,
        });
    });

    test('change btn availability - button is disabled', () => {
        const newState = cardBlockReducer(
            stateOnEditMode,
            changeBtnAvailability(true),
        );
        expect(newState).toStrictEqual({
            ...stateOnEditMode,
            isDisabledSendBtn: true,
        });
    });

    test('change btn availability - button is active', () => {
        const newState = cardBlockReducer(
            stateOnEditMode,
            changeBtnAvailability(false),
        );
        expect(newState).toStrictEqual({
            ...stateOnEditMode,
            isDisabledSendBtn: false,
        });
    });
});
