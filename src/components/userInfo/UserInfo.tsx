import { useState, MouseEvent } from 'react';
import { InputField } from './inputComponents/InputField';

import './UserInfo.scss';
import { userInfoContent } from './UserInfoContent';

export const UserInfo = () => {
    const [isCorrectForm, setIsCorrectForm] = useState(true);
    const checkValueForEmpty = (value: string) => {
        if (value.length === 0) return false;
        else return true;
    };
    const sendUserForm = (e: MouseEvent<HTMLButtonElement>) => {
        const elem = e.target as HTMLFormElement;
        let numberOfValues = elem.form.length - 1;
        let checkingResult = true;
        while (numberOfValues >= 0 && checkingResult) {
            checkingResult = checkValueForEmpty(elem.form[numberOfValues]);
            numberOfValues -= 1;
        }
        if (checkingResult) setIsCorrectForm(true);
        else setIsCorrectForm(false);
    };

    return (
        <section className="userInfo">
            <h3 className="userInfo__header">Профиль пользователя</h3>
            <form action="some url">
                <div className="userInfo__form">
                    {userInfoContent.map((inputField) => {
                        const { id, name, type, required } = inputField;
                        return (
                            <InputField
                                key={`inputField-${id}`}
                                labelText={name}
                                required={required}
                                type={type}
                            />
                        );
                    })}
                </div>

                <button type="button" onClick={(e) => sendUserForm(e)}>
                    Отправить
                </button>
            </form>
        </section>
    );
};
