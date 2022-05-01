import { SendRequestAction, SendRequestActionTypes, SendRequestState } from '../../types/sendRequestTypes';

const initialState: SendRequestState = {
    isRequestLoading: false,
    isRequestSuccess: false,
    isRequestFatal: false,
    isRequestError: false,
    requestSuccessText: 'Форма отправлена',
    requestErrorText: 'Something went wrong...',
    errorCode: null,
    shownRequestResult: ""
};

export const sendRequestReducer = (state = initialState, action: SendRequestAction): SendRequestState => {
    switch (action.type) {
        case SendRequestActionTypes.SEND_REQUEST_BEGIN: {
            return {
                ...state,
                isRequestLoading: true,
            };
        }
        case SendRequestActionTypes.SEND_REQUEST_SUCCESS: {
            return {
                ...state,
                isRequestSuccess: true,
                isRequestLoading: false,
                isRequestFatal: false,
                isRequestError: false,
            };
        }
        case SendRequestActionTypes.SEND_REQUEST_ERROR: {
            return {
                ...state,
                isRequestError: true,
                errorCode: action.value,
                isRequestLoading: false,
                isRequestSuccess: false,
                isRequestFatal: false,
            };
        }
        case SendRequestActionTypes.SEND_REQUEST_FATAL: {
            return {
                ...state,
                isRequestFatal: true,
                isRequestLoading: false,
                isRequestSuccess: false,
            };
        }

        case SendRequestActionTypes.SHOW_REQUEST_RESULT: {
            let resultOfRequest;
            if (state.isRequestSuccess) resultOfRequest = state.requestSuccessText;
            else if (state.isRequestError) resultOfRequest = `${state.requestErrorText} code: ${state.errorCode}`;
            else if (state.isRequestFatal) resultOfRequest =  state.requestErrorText;
            else resultOfRequest = ""
            return {
                ...state,
                shownRequestResult: resultOfRequest
            }
        }
        default:
            return state;
    }
};
