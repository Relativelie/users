import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'regenerator-runtime/runtime';
import { content } from '../../content';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { InputField } from './inputComponents/InputField';
import { LoadingSpinner } from './loadingSpinner/LoadingSpinner';

import './UserInfo.scss';
import { userInfoContent } from './UserInfoContent';

export const UserInfo = () => {
    const { userId } = useParams();
    const [inputValueChange, setInputValueChange] = useState(false);
    const { openedCardId } = useTypedSelector(
        (listsOfUsersState) => listsOfUsersState.listOfUsersReducer,
    );
    const {
        isDisabledForm,
        isDisabledSendBtn
    } = useTypedSelector((userInfoState) => userInfoState.userInfoReducer);

    const {
        isSendFormLoading,
        sendFormErrorText,
        isSendFormError,
        sendFormSuccessText,
        isSendFormSuccess,
        errorCode,
        isSendFormFatal,
    } = useTypedSelector((requestState) => requestState.sendRequestReducer);

    const {
        turnOffEditMode,
        turnOnEditMode,
        changeBtnAvailability,
        sendFormBegin,
        sendFormSuccess,
        sendFormError,
        sendFormFatal,
    } = useActions();

    useEffect(() => {
        const errorClass = '.inputFieldContainer__input_warning-for-emptiness';
        const errorField = document.querySelector(errorClass);
        if (errorField !== null) changeBtnAvailability(true);
        else changeBtnAvailability(false);
    }, [inputValueChange]);

    const checkBtnAvailability = () => {
        let checkResult: boolean;
        if (isDisabledForm || isDisabledSendBtn) checkResult = true;
        else checkResult = false;
        return checkResult;
    };

    const catchInputValueChange = () => {
        setInputValueChange(!inputValueChange);
    };

    const sendUserForm = async (e: any) => {
        const formValues = prepareFormValues(e);
        await sendRequest(formValues);
    };

    const prepareFormValues = (e: any) => {
        const formList = e.target.form;
        const formValues = {};
        for (let i = 0; i < formList.length - 1; i++) {
            formValues[formList[i].dataset.inputname] = formList[i].value;
        }
        return formValues;
    };

    const sendRequest = async (values: any) => {
        try {
            sendFormBegin();
            const request = await fetch(
                'https://usersediting.free.beeceptor.com/id',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                },
            );

            const result = await request.json();
            console.log(result)
            if (result.status === 'error') {
                sendFormError(result.code);
            } else sendFormSuccess();
        } catch (err) {
            sendFormFatal();
        }
    };

    const findFilledValue = (card: any, inputName: string) => {
        let result = '';
        if (inputName.indexOf(' ') !== -1) {
            const newInputName = inputName.split(' ');
            Object.keys(card).forEach((key) => {
                if (key === newInputName[0]) {
                    Object.keys(card[key]).forEach((secondKey) => {
                        if (secondKey === newInputName[1]) {
                            result = card[key][secondKey];
                        }
                    });
                }
            });
        } else {
            Object.keys(card).forEach((key) => {
                if (key === inputName) {
                    result = card[key];
                }
            });
        }
        return result;
    };

    const editMode = () => {
        if (isDisabledForm) turnOnEditMode();
        else turnOffEditMode();
        console.log(isDisabledForm);
    };

    return (
        <section className="userInfo">
            <h3 className="userInfo__header">Профиль пользователя</h3>
            <button onClick={() => editMode()} type="button">
                Редактировать
            </button>
            <form action="some url">
                <div className="userInfo__form">
                    {userInfoContent.map((inputField) => {
                        const { id, name, type, required, resPath } = inputField;
                        const openedCardContent = openedCardId !== null ? content[openedCardId - 1] : '';
                        const filledValue = findFilledValue(openedCardContent, resPath);
                        return (
                            <InputField
                                key={`inputField-${id}`}
                                labelText={name}
                                required={required}
                                type={type}
                                filledValue={filledValue}
                                catchInputValueChange={catchInputValueChange}
                            />
                        );
                    })}
                </div>
                <div>
                    <button
                        className="userInfo__sendForm"
                        type="button"
                        onClick={(e) => sendUserForm(e)}
                        disabled={checkBtnAvailability()}
                    >
                        Отправить
                    </button>
                    <LoadingSpinner isLoading={isSendFormLoading} />
                </div>

                <p>
                    {(isSendFormSuccess && sendFormSuccessText)
                        || (isSendFormError && `${sendFormErrorText} code: ${errorCode}`)
                        || (isSendFormFatal && sendFormErrorText)}
                </p>
            </form>
        </section>
    );
};
