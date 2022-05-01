export const SendButton = ({ sendUserForm, checkBtnAvailability }) => {
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
