import { FC } from 'react';

type Props = {
    sendUserForm: Function,
    checkBtnAvailability: Function,
};

export const SendButton:FC<Props> = ({ sendUserForm, checkBtnAvailability }) => {
    return (
        <button
            className="userInfo__sendForm"
            type="button"
            onClick={(e) => sendUserForm(e)}
            disabled={checkBtnAvailability()}
        >
        Отправить
        </button>
    );
};
