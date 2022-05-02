import { FC } from 'react';
import { content } from '../../../content';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { InputField } from './inputField/InputField';
import { userInfoContent } from '../UserInfoContent';

type Props = {
    catchInputValueChange: Function,
};

export const InputContainer:FC<Props> = ({ catchInputValueChange }) => {
    const { openedCardId } = useTypedSelector(
        (listsOfUsersState) => listsOfUsersState.listOfUsersReducer,
    );

    const findFilledValue = (card: any, inputName: string) => {
        let result = '';
        if (inputName.indexOf(' ') !== -1) {
            const newInputName = inputName.split(' ');
            Object.keys(card).forEach((key) => {
                if (key === newInputName[0]) {
                    Object.keys(card[key]).forEach((secondKey) => {
                        if (secondKey === newInputName[1]) {
                            result = card[key][secondKey];
                        }
                    });
                }
            });
        } else {
            Object.keys(card).forEach((key) => {
                if (key === inputName) {
                    result = card[key];
                }
            });
        }
        return result;
    };

    return (
        <div className="userInfo__form">
            {userInfoContent.map((inputField) => {
                const { id, name, type, required, resPath } = inputField;
                const openedCardContent = openedCardId !== null ? content[openedCardId - 1] : '';
                const filledValue = findFilledValue(openedCardContent, resPath);
                return (
                    <InputField
                        key={`inputField-${id}`}
                        labelText={name}
                        required={required}
                        type={type}
                        filledValue={filledValue}
                        catchInputValueChange={catchInputValueChange}
                    />
                );
            })}
        </div>
    );
};
