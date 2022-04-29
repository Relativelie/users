import { MutableRefObject, useRef, FC } from 'react';
import './InputField.scss';

type Props = {
  labelText: string;
  type: string;
  required: boolean;
};

export const InputField: FC<Props> = ({ labelText, required, type }) => {
    const inputValue = useRef() as MutableRefObject<HTMLInputElement>;
    const [warningForEmptiness] = 'warningForEmptiness';
    const placeholderText = labelText === 'Comment' ? '' : labelText;
    const classNameValue = labelText === 'Comment'
        ? 'inputFieldContainer__input comment'
        : 'inputFieldContainer__input';

    const validateValue = (eventType: string) => {
        if ((eventType === 'blur' || eventType === 'Enter') && required) {
        }
    };

    return (
        <div className="inputFieldContainer">
            <label className="inputFieldContainer__label" htmlFor={labelText}>
                {labelText}
            </label>
            <input
                className={classNameValue}
                type={type}
                placeholder={placeholderText}
                ref={inputValue}
                onBlur={(e) => validateValue(e.type)}
                onKeyUp={(e) => validateValue(e.key)}
            />
        </div>
    );
};
