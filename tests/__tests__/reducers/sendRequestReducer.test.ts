import { sendRequestBegin, sendRequestError, sendRequestSuccess, showRequestResult } from '../../../src/store/actions/sendRequestActions';
import { sendRequestReducer } from '../../../src/store/reducers/sendRequestReducer';
import { SendRequestState } from '../../../src/types/sendRequestTypes';

let stateAllFalse: SendRequestState;
let stateLoadingTrue: SendRequestState;
let stateSuccess: SendRequestState;
let stateError: SendRequestState;
let stateFatal: SendRequestState;
beforeEach(() => {
    stateAllFalse = {
        isRequestLoading: false,
        isRequestSuccess: false,
        isRequestFatal: false,
        isRequestError: false,
        requestSuccessText: 'Форма отправлена',
        requestErrorText: 'Something went wrong...',
        errorCode: null,
        shownRequestResult: 'Ahn',
    };
    stateLoadingTrue = {
        isRequestLoading: true,
        isRequestSuccess: false,
        isRequestFatal: false,
        isRequestError: false,
        requestSuccessText: 'Форма отправлена',
        requestErrorText: 'Something went wrong...',
        errorCode: null,
        shownRequestResult: '',
    };

    stateSuccess = {
        isRequestLoading: false,
        isRequestSuccess: true,
        isRequestFatal: false,
        isRequestError: false,
        requestSuccessText: 'Форма отправлена',
        requestErrorText: 'Something went wrong...',
        errorCode: null,
        shownRequestResult: '',
    };

    stateError = {
        isRequestLoading: false,
        isRequestSuccess: false,
        isRequestFatal: false,
        isRequestError: true,
        requestSuccessText: 'Форма отправлена',
        requestErrorText: 'Something went wrong...',
        errorCode: 500,
        shownRequestResult: '',
    };

    stateFatal = {
        isRequestLoading: false,
        isRequestSuccess: false,
        isRequestFatal: true,
        isRequestError: false,
        requestSuccessText: 'Форма отправлена',
        requestErrorText: 'Something went wrong...',
        errorCode: null,
        shownRequestResult: '',
    };
});

describe('send request reducer', () => {
    test('begin', () => {
        const newState = sendRequestReducer(
            stateAllFalse,
            sendRequestBegin(),
        );
        expect(newState).toStrictEqual({
            ...stateAllFalse,
            isRequestLoading: true,
        });
    });

    test('success', () => {
        const newState = sendRequestReducer(
            stateLoadingTrue,
            sendRequestSuccess(),
        );
        expect(newState).toStrictEqual({
            ...stateLoadingTrue,
            isRequestSuccess: true,
            isRequestLoading: false,
            isRequestFatal: false,
            isRequestError: false,
        });
    });

    test('error', () => {
        const newState = sendRequestReducer(
            stateLoadingTrue,
            sendRequestError(500),
        );
        expect(newState).toStrictEqual({
            ...stateLoadingTrue,
            isRequestError: true,
            errorCode: 500,
            isRequestLoading: false,
            isRequestSuccess: false,
            isRequestFatal: false,
        });
    });

    test('show result - fatal', () => {
        const newState = sendRequestReducer(
            stateFatal,
            showRequestResult(true),
        );
        expect(newState).toStrictEqual({
            ...stateLoadingTrue,
            shownRequestResult: 'Something went wrong...',
        });
    });

    test('show result - error', () => {
        const newState = sendRequestReducer(
            stateError,
            showRequestResult(true),
        );
        expect(newState).toStrictEqual({
            ...stateLoadingTrue,
            shownRequestResult: 'Something went wrong... code: 500',
        });
    });

    test('show result - success', () => {
        const newState = sendRequestReducer(
            stateSuccess,
            showRequestResult(true),
        );
        expect(newState).toStrictEqual({
            ...stateSuccess,
            shownRequestResult: 'Форма отправлена',
        });
    });

    test('show result - edit mode is turned off', () => {
        const newState = sendRequestReducer(
            stateAllFalse,
            showRequestResult(false),
        );
        expect(newState).toStrictEqual({
            ...stateAllFalse,
            shownRequestResult: '',
        });
    });
});
