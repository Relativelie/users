import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import { InputContainer } from './InputContainer/InputContainer';
import { SendForm } from './sendForm/SendForm';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import './CardBlock.scss';

export const CardBlock = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { userId } = useParams();
    const [editBtnIsPressed, setEditBtnIsPressed] = useState('');
    const [inputValueChange, setInputValueChange] = useState(false);
    const {
        isDisabledForm,
    } = useTypedSelector((cardBlockState) => cardBlockState.cardBlockReducer);
    const {
        turnOffEditMode,
        turnOnEditMode,
        changeBtnAvailability,
        showRequestResult,
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
        if (isDisabledForm) {
            turnOnEditMode();
            setEditBtnIsPressed('cardBlock_editBtn_isActive');
        } else {
            turnOffEditMode();
            setEditBtnIsPressed('');
            showRequestResult(false);
        }
        checkForEmptiness();
    };

    return (
        <section className="cardBlock">
            <div className="cardBlock__container">
                <h3 className="cardBlock__header">Профиль пользователя</h3>
                <button
                    className={`cardBlock__editBtn ${editBtnIsPressed}`.trim()}
                    onClick={() => editMode()}
                    type="button"
                >
                    Редактировать
                </button>
            </div>
            <form className="cardBlock__form" action="some url">
                <InputContainer catchInputValueChange={catchInputValueChange} />
                <SendForm />
            </form>
        </section>
    );
};
