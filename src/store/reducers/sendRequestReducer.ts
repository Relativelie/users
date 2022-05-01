import { SendRequestAction, SendRequestActionTypes, SendRequestState } from '../../types/sendRequestTypes';

const initialState: SendRequestState = {
    isSendFormLoading: false,
    isSendFormSuccess: false,
    isSendFormFatal: false,
    isSendFormError: false,
    sendFormSuccessText: 'Форма отправлена',
    sendFormErrorText: 'Something went wrong...',
    errorCode: null,
};

export const sendRequestReducer = (state = initialState, action: SendRequestAction): SendRequestState => {
    switch (action.type) {
        case SendRequestActionTypes.SEND_REQUEST_BEGIN: {
            return {
                ...state,
                isSendFormLoading: true,
            };
        }
        case SendRequestActionTypes.SEND_REQUEST_SUCCESS: {
            return {
                ...state,
                isSendFormSuccess: true,
                isSendFormLoading: false,
                isSendFormFatal: false,
                isSendFormError: false,
            };
        }
        case SendRequestActionTypes.SEND_REQUEST_ERROR: {
            return {
                ...state,
                isSendFormError: true,
                errorCode: action.value,
                isSendFormLoading: false,
                isSendFormSuccess: false,
                isSendFormFatal: false,
            };
        }
        case SendRequestActionTypes.SEND_REQUEST_FATAL: {
            return {
                ...state,
                isSendFormFatal: true,
                isSendFormLoading: false,
                isSendFormSuccess: false,
            };
        }
        default:
            return state;
    }
};
