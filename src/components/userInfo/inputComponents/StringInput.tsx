import { FC } from 'react';

type Props = {
    labelText: string
};

export const StringInput:FC<Props> = ({ labelText }) => {
    return (
        <div>
            <label htmlFor="">
                {labelText}
            </label>
            <input
                type="text"
            />
        </div>

    );
};
