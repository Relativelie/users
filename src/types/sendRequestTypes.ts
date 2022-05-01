export interface SendRequestState {
    isRequestLoading: boolean,
    isRequestSuccess: boolean,
    isRequestFatal: boolean,
    isRequestError: boolean,
    requestSuccessText: string,
    requestErrorText: string,
    errorCode: null | number,
    shownRequestResult: string,
}

export enum SendRequestActionTypes {
    SEND_REQUEST_BEGIN = 'SEND_REQUEST_BEGIN',
    SEND_REQUEST_SUCCESS = 'SEND_REQUEST_SUCCESS',
    SEND_REQUEST_FATAL = 'SEND_REQUEST_FATAL',
    SEND_REQUEST_ERROR = 'SEND_REQUEST_ERROR',
    SEND_POST = 'SEND_POST',
    SHOW_REQUEST_RESULT = 'SHOW_REQUEST_RESULT',
}

interface SendRequestBegin {
    type: SendRequestActionTypes.SEND_REQUEST_BEGIN
}

interface SendRequestSuccess {
    type: SendRequestActionTypes.SEND_REQUEST_SUCCESS
}

interface SendRequestError {
    type: SendRequestActionTypes.SEND_REQUEST_ERROR,
    value: number
}

interface SendRequestFatal {
    type: SendRequestActionTypes.SEND_REQUEST_FATAL,
}

interface ShowRequestResult {
    type: SendRequestActionTypes.SHOW_REQUEST_RESULT,
}

export type SendRequestAction =
    | SendRequestBegin
    | SendRequestSuccess
    | SendRequestError
    | SendRequestFatal
    | ShowRequestResult;
