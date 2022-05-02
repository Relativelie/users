import { Link } from 'react-router-dom';
import { useActions } from '../../../hooks/useActions';
import './Back.scss';

export const Back = () => {
    const { closeCard, turnOffEditMode, showRequestResult } = useActions();

    const backToMain = () => {
        closeCard();
        turnOffEditMode();
        showRequestResult(false);
    };

    return (
        <div>
            <Link to="/" onClick={() => backToMain()}>
                <button
                    type="button"
                    className="menuBlock__backBtn"
                >
                    Назад
                </button>
            </Link>
        </div>
    );
};
