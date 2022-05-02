import 'regenerator-runtime/runtime';
import { MouseEvent } from 'react';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { LoadingSpinner } from './loadingSpinner/LoadingSpinner';
import { SendButton } from './sendButton/SendButton';

export const SendForm = () => {
    const { sendPost } = useActions();
    const {
        isDisabledForm,
        isDisabledSendBtn,
    } = useTypedSelector((userInfoState) => userInfoState.userInfoReducer);

    const {
        isRequestLoading,
        shownRequestResult,
    } = useTypedSelector((requestState) => requestState.sendRequestReducer);

    const prepareFormValues = (e: MouseEvent<HTMLButtonElement>) => {
        // For request body.
        const elem = e.target as HTMLFormElement;
        const formList = elem.form;
        const formValues: Record<string, any> = {};
        for (let i = 0; i < formList.length - 1; i++) {
            formValues[formList[i].inputEl.dataset.inputname] = formList[i].value;
        }
        return formValues;
    };

    const sendUserForm = (e: MouseEvent<HTMLButtonElement>) => {
        const formValues = prepareFormValues(e);
        const url = 'https://usersediting.free.beeceptor.com/id';
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
        sendPost(formValues, url, headers);
    };

    const checkBtnAvailability = () => {
        let checkResult: boolean;
        if (isDisabledForm || isDisabledSendBtn) checkResult = true;
        else checkResult = false;
        return checkResult;
    };

    return (
        <div>
            <div>
                <SendButton sendUserForm={sendUserForm} checkBtnAvailability={checkBtnAvailability} />
                <LoadingSpinner isLoading={isRequestLoading} />
            </div>
            <p>
                {shownRequestResult}
            </p>
        </div>
    );
};
