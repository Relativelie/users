import {
    useState, FC, SyntheticEvent, useEffect, MutableRefObject, useRef,
} from 'react';

export const Email: FC = () => {
    const [rule] = useState(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    const [isCorrect, setIsCorrect] = useState(true);
    const [incorrectClass, setIncorrectClass] = useState('');
    const inputValue = useRef() as MutableRefObject<HTMLInputElement>;

    useEffect(() => {
        if (!isCorrect) setIncorrectClass('incorrectInputValue');
        else setIncorrectClass('');
    });

    const checkEmail = (eventType: string, event: SyntheticEvent<EventTarget>) => {
        if (eventType === 'blur' || eventType === 'Enter') {
            const elem = event.target as HTMLInputElement;
            setIsCorrect(rule.test(elem.value));
            elem.blur();
        } else return;
    };

    return (
        <div className="">
            <label htmlFor="">
                E-mail
            </label>
            <input
                className={`feedback_input ${incorrectClass}`}
                name="email"
                type="email"
                data-testid="form-field-email"
                placeholder="Email"
                ref={inputValue}
                onBlur={(e) => checkEmail(e.type, e)}
                onKeyUp={(e) => checkEmail(e.key, e)}
            />
        </div>

    );
};
