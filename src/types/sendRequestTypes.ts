export interface SendRequestState {
    isSendFormLoading: boolean,
    isSendFormSuccess: boolean,
    isSendFormFatal: boolean,
    isSendFormError: boolean,
    sendFormSuccessText: string,
    sendFormErrorText: string,
    errorCode: null | number
}

export enum SendRequestActionTypes {
    SEND_REQUEST_BEGIN = 'SEND_REQUEST_BEGIN',
    SEND_REQUEST_SUCCESS = 'SEND_REQUEST_SUCCESS',
    SEND_REQUEST_FATAL = 'SEND_REQUEST_FATAL',
    SEND_REQUEST_ERROR = 'SEND_REQUEST_ERROR',
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

export type SendRequestAction =
    | SendRequestBegin
    | SendRequestSuccess
    | SendRequestError
    | SendRequestFatal;
