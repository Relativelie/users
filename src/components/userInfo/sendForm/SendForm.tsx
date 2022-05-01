import 'regenerator-runtime/runtime';
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

    const prepareFormValues = (e: any) => {
        const formList = e.target.form;
        const formValues = {};
        for (let i = 0; i < formList.length - 1; i++) {
            formValues[formList[i].dataset.inputname] = formList[i].value;
        }
        return formValues;
    };

    const sendUserForm = (e: any) => {
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
                <button
                    className="userInfo__sendForm"
                    type="button"
                    onClick={(e) => sendUserForm(e)}
                    disabled={checkBtnAvailability()}
                >
                    Отправить
                </button>
                <LoadingSpinner isLoading={isRequestLoading} />
            </div>
            <p>
                {shownRequestResult}
            </p>
        </div>
    );
};
