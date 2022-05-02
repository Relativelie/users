import { FC } from 'react';
import './SendButton.scss';

type Props = {
    sendUserForm: Function,
    checkBtnAvailability: Function,
};

export const SendButton:FC<Props> = ({ sendUserForm, checkBtnAvailability }) => {
    return (
        <button
            className="sendForm__sendBtn"
            type="button"
            onClick={(e) => sendUserForm(e)}
            disabled={checkBtnAvailability()}
        >
            Отправить
        </button>
    );
};
