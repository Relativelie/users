import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import { InputContainer } from './InputContainer/InputContainer';
import { SendForm } from './sendForm/SendForm';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import './UserInfo.scss';

export const UserInfo = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { userId } = useParams();
    const [inputValueChange, setInputValueChange] = useState(false);
    const {
        isDisabledForm,
    } = useTypedSelector((userInfoState) => userInfoState.userInfoReducer);
    const {
        turnOffEditMode,
        turnOnEditMode,
        changeBtnAvailability,
    } = useActions();

    useEffect(() => {
        checkForEmptiness();
    }, [inputValueChange]);

    const checkForEmptiness = () => {
        const errorClass = '.inputFieldContainer__input_warning-for-emptiness';
        const errorField = document.querySelector(errorClass);
        if (errorField !== null) changeBtnAvailability(true);
        else changeBtnAvailability(false);
    };

    const catchInputValueChange = () => {
        setInputValueChange(!inputValueChange);
    };

    const editMode = () => {
        if (isDisabledForm) turnOnEditMode();
        else turnOffEditMode();
        checkForEmptiness();
    };

    return (
        <section className="userInfo">
            <h3 className="userInfo__header">Профиль пользователя</h3>
            <button onClick={() => editMode()} type="button">
                Редактировать
            </button>
            <form action="some url">
                <InputContainer catchInputValueChange={catchInputValueChange} />
                <SendForm />
            </form>
        </section>
    );
};
