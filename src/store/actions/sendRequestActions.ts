import { SendRequestAction, SendRequestActionTypes } from '../../types/sendRequestTypes';

export const sendFormBegin = (): SendRequestAction => ({
    type: SendRequestActionTypes.SEND_REQUEST_BEGIN,
});

export const sendFormSuccess = (): SendRequestAction => ({
    type: SendRequestActionTypes.SEND_REQUEST_SUCCESS,
});

export const sendFormError = (value: number): SendRequestAction => ({
    type: SendRequestActionTypes.SEND_REQUEST_ERROR,
    value,
});

export const sendFormFatal = (): SendRequestAction => ({
    type: SendRequestActionTypes.SEND_REQUEST_FATAL,
});

export const sendPost = (values: any, url:string, headers:HeadersInit) => {
    return async (dispatch) => {
        try {
            dispatch(sendFormBegin());
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
                dispatch(sendFormError(result.code));
            } else dispatch(sendFormSuccess());
        } catch (err) {
            dispatch(sendFormFatal());
        }
        dispatch(showRequestResult(true));
    };
};

export const showRequestResult = (editMode: boolean):SendRequestAction => ({
    type: SendRequestActionTypes.SHOW_REQUEST_RESULT,
    editMode,
});
