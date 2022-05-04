import { sendRequestBegin, sendRequestError, sendRequestFatal, sendRequestSuccess, showRequestResult } from '../../../src/store/actions/sendRequestActions';
import { SendRequestActionTypes } from '../../../src/types/sendRequestTypes';

describe('send request actions', () => {
    test('action to send request begin', () => {
        expect(sendRequestBegin()).toEqual({
            type: SendRequestActionTypes.SEND_REQUEST_BEGIN,
        });
    });

    test('action to send request success', () => {
        expect(sendRequestSuccess()).toEqual({
            type: SendRequestActionTypes.SEND_REQUEST_SUCCESS,
        });
    });

    test('action to send request error', () => {
        expect(sendRequestError(404)).toEqual({
            type: SendRequestActionTypes.SEND_REQUEST_ERROR,
            value: 404,
        });
    });

    test('action to send request fatal', () => {
        expect(sendRequestFatal()).toEqual({
            type: SendRequestActionTypes.SEND_REQUEST_FATAL,
        });
    });

    test('action to show request result - edit mode false', () => {
        expect(showRequestResult(false)).toEqual({
            type: SendRequestActionTypes.SHOW_REQUEST_RESULT,
            editMode: false,
        });
    });

    test('action to show request result - edit mode true', () => {
        expect(showRequestResult(true)).toEqual({
            type: SendRequestActionTypes.SHOW_REQUEST_RESULT,
            editMode: true,
        });
    });
});
