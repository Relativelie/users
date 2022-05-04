import { SendRequestAction, SendRequestActionTypes } from '../../types/sendRequestTypes';

export const sendRequestBegin = (): SendRequestAction => ({
    type: SendRequestActionTypes.SEND_REQUEST_BEGIN,
});

export const sendRequestSuccess = (): SendRequestAction => ({
    type: SendRequestActionTypes.SEND_REQUEST_SUCCESS,
});

export const sendRequestError = (value: number): SendRequestAction => ({
    type: SendRequestActionTypes.SEND_REQUEST_ERROR,
    value,
});

export const sendRequestFatal = (): SendRequestAction => ({
    type: SendRequestActionTypes.SEND_REQUEST_FATAL,
});

export const sendPost = (values: any, url:string, headers:HeadersInit) => {
    return async (dispatch: any) => {
        try {
            dispatch(sendRequestBegin());
            const request = await fetch(
                url,
                {
                    method: 'POST',
                    headers,
                    body: JSON.stringify(values),
                },
            );
            const result = await request.json();
            if (result.status === 'error') {
                dispatch(sendRequestError(result.code));
            } else dispatch(sendRequestSuccess());
        } catch (err) {
            dispatch(sendRequestFatal());
        }
        dispatch(showRequestResult(true));
    };
};

export const showRequestResult = (editMode: boolean):SendRequestAction => ({
    type: SendRequestActionTypes.SHOW_REQUEST_RESULT,
    editMode,
});
