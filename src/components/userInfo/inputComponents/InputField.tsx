import { useEffect, FormEvent, useState, MutableRefObject, useRef, FC } from 'react';
import './InputField.scss';

type Props = {
    labelText: string;
    type: string;
    required: boolean;
    filledValue: string;
    catchInputValueChange: Function;
};

export const InputField: FC<Props> = ({ labelText, required, type, filledValue, catchInputValueChange }) => {
    const inputValue = useRef() as MutableRefObject<HTMLInputElement>;
    const [isEmptyInput, setIsEmptyInput] = useState(false);
    const warningClass = isEmptyInput
        ? 'inputFieldContainer__input_warning-for-emptiness'
        : '';

    // Differences for the comment field.
    const placeholderText = labelText === 'Comment' ? '' : labelText;
    const commentClass = labelText === 'Comment' ? 'inputFieldContainer__input_comment' : '';

    useEffect(() => {
        inputValue.current.value = filledValue;
    }, []);

    useEffect(() => {
        if (labelText !== 'Comment') {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            validateValue();
        }
    }, []);

    const validateValue = () => {
        const { value } = inputValue.current;
        if (value.length === 0) setIsEmptyInput(true);
        else setIsEmptyInput(false);
    };

    const switchByEnter = (event: any) => {
        const formElements = event.target.form;
        const index = [...formElements].indexOf(event.target);
        formElements.elements[index + 1].focus();
        event.preventDefault();
    };

    const valueProcessing = (event: FormEvent<HTMLInputElement>, eventType: string) => {
        if ((eventType === 'blur' || eventType === 'Enter') && required) {
            validateValue();
        }
        if (eventType === 'Enter') {
            switchByEnter(event);
        }
        catchInputValueChange();
    };

    return (
        <div className="inputFieldContainer">
            <label className="inputFieldContainer__label" htmlFor={labelText}>
                {labelText}
            </label>
            <input
                className={(`inputFieldContainer__input ${commentClass} ${warningClass}`).trim()}
                type={type}
                placeholder={placeholderText}
                ref={inputValue}
                onBlur={(e) => valueProcessing(e, e.type)}
                onKeyUp={(e) => valueProcessing(e, e.key)}
                data-inputname={labelText.toLocaleLowerCase()}
            />
        </div>
    );
};
