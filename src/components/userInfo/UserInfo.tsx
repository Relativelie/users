import { useState, MouseEvent } from 'react';
import { Email } from './inputComponents/Email';
import { Phone } from './inputComponents/Phone';
import { StringInput } from './inputComponents/StringInput';
import { Website } from './inputComponents/Website';
import { ZipCode } from './inputComponents/ZipCode';

import './userInfo.scss';

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
        <section>
            <h3>Профиль пользователя</h3>
            <form action="some url">
                <StringInput labelText="Name" />
                <StringInput labelText="User name" />
                <Email />
                <StringInput labelText="Street" />
                <StringInput labelText="City" />
                <ZipCode />
                <Phone />
                <Website />
                <StringInput labelText="Comment" />
                <button
                    type="button"
                    onClick={(e) => sendUserForm(e)}
                >
                    Отправить
                </button>
            </form>
        </section>
    );
};
