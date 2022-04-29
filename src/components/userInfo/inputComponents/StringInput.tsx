import { FC } from 'react';

type Props = {
    labelText: string
};

export const StringInput:FC<Props> = ({ labelText }) => {
    return (
        <div>
            <label htmlFor={labelText}>
                {labelText}
            </label>
            <input
                className={'Comment' && labelText.toLowerCase()}
                type="text"
                placeholder={labelText}
            />
        </div>

    );
};
