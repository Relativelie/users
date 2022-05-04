import { useEffect, useState, MutableRefObject, useRef, FC } from 'react';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import './InputField.scss';

type Props = {
    labelText: string;
    type: string;
    required: boolean;
    filledValue: string;
    catchInputValueChange: Function
};

export const InputField: FC<Props> = ({ labelText, required, type, filledValue, catchInputValueChange }) => {
    const inputValue = useRef() as MutableRefObject<HTMLInputElement>;
    const [isEmptyInput, setIsEmptyInput] = useState(false);
    const [warningClass, setWarningClass] = useState('');
    const { isDisabledForm } = useTypedSelector(
        (cardBlockState) => cardBlockState.cardBlockReducer,
    );

    // Differences for the comment field.
    const placeholderText = labelText === 'Comment' ? '' : labelText;
    const commentClass = labelText === 'Comment' ? 'inputFieldContainer__input_comment' : '';

    useEffect(() => {
        // Filling values when open user card.
        inputValue.current.value = filledValue;
    }, []);

    useEffect(() => {
        // Validate values for emptiness when open user card.
        if (required) {
            validateValue();
        }
    }, []);

    useEffect(() => {
        if (isEmptyInput) {
            setWarningClass('inputFieldContainer__input_warning-for-emptiness');
        } else setWarningClass('');
    });

    useEffect(() => {
        // For disabled send button, if input field is empty.
        catchInputValueChange();
    }, [warningClass]);

    const validateValue = () => {
        const { value } = inputValue.current;
        if (value.trim().length === 0) setIsEmptyInput(true);
        else setIsEmptyInput(false);
    };

    const switchByEnter = (event: any) => {
        if (event.key === 'Enter') {
            const elem = event.target as HTMLFormElement;
            const formElements = elem.form;
            if (formElements !== null) {
                const index = [...formElements].indexOf(event.target);
                formElements.elements[index + 1].focus();
            } else event.target.blur();
            event.preventDefault();
        }
    };

    const valueProcessing = (eventType: string) => {
        if ((eventType === 'blur') && required) {
            validateValue();
        }
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
                onBlur={(e) => valueProcessing(e.type)}
                onKeyPress={(e) => switchByEnter(e)}
                data-inputname={labelText.toLocaleLowerCase()}
                disabled={isDisabledForm}
            />
        </div>
    );
};
