import { SendRequestAction, SendRequestActionTypes } from '../../types/sendRequestTypes';

export const sendFormBegin = ():SendRequestAction => ({
    type: SendRequestActionTypes.SEND_REQUEST_BEGIN,
});

export const sendFormSuccess = ():SendRequestAction => ({
    type: SendRequestActionTypes.SEND_REQUEST_SUCCESS,
});

export const sendFormError = (value: number):SendRequestAction => ({
    type: SendRequestActionTypes.SEND_REQUEST_ERROR,
    value,
});

export const sendFormFatal = ():SendRequestAction => ({
    type: SendRequestActionTypes.SEND_REQUEST_FATAL,
});
