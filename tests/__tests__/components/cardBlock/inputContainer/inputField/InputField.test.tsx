import { fireEvent, screen } from '@testing-library/react';
import { InputField } from '../../../../../../src/components/cardBlock/InputContainer/inputField/InputField';
import { render } from '../../../../../testsSetup/test-utils';

let catchChange: Function;
beforeEach(() => {
    catchChange = jest.fn();
});

describe('Input field component', () => {
    test('snapshot - input field component', () => {
        const tree = render(<InputField
            labelText="Name"
            required
            type="text"
            filledValue="Elena"
            catchInputValueChange={catchChange}
        />);
        expect(tree).toMatchSnapshot();
    });

    test('edit input to incorrect value', () => {
        render(<InputField
            labelText="Name"
            required
            type="text"
            filledValue="Elena"
            catchInputValueChange={catchChange}
        />);
        const inputField = screen.getByPlaceholderText(/name/i);
        expect(inputField).toHaveClass('inputFieldContainer__input');
        fireEvent.change(inputField, { target: { value: 'Elena Harribo' } });
        fireEvent.focusOut(inputField);
        expect(inputField).toHaveValue('Elena Harribo');
        expect(inputField).toHaveClass('inputFieldContainer__input');
    });

    test('verify error class', () => {
        render(<InputField
            labelText="Name"
            required
            type="text"
            filledValue="Elena"
            catchInputValueChange={catchChange}
        />);
        const inputField = screen.getByPlaceholderText(/name/i);
        expect(inputField).toHaveClass('inputFieldContainer__input');
        fireEvent.change(inputField, { target: { value: '' } });
        fireEvent.focusOut(inputField);
        const warningClass = 'inputFieldContainer__input inputFieldContainer__input_warning-for-emptiness';
        expect(inputField).toHaveClass(warningClass);
    });

    test('comment enter - verify class and required=false', () => {
        render(<InputField
            labelText="Comment"
            required={false}
            type="text"
            filledValue="Elena"
            catchInputValueChange={catchChange}
        />);
        const inputField = screen.getByDisplayValue(/elena/i);
        const commentClass = 'inputFieldContainer__input inputFieldContainer__input_comment';
        expect(inputField).toHaveClass(commentClass);
        fireEvent.change(inputField, { target: { value: '' } });
        fireEvent.focusOut(inputField);
        expect(inputField).toHaveClass(commentClass);
    });

    test('catch input value change is running', () => {
        render(<InputField
            labelText="Name"
            required
            type="text"
            filledValue="Elena"
            catchInputValueChange={catchChange}
        />);
        const inputField = screen.getByPlaceholderText(/name/i);
        fireEvent.change(inputField, { target: { value: 'lala' } });
        fireEvent.focusOut(inputField);
        expect(catchChange).toHaveBeenCalledTimes(1);
    });

    test('input have error class without change value', () => {
        render(<InputField
            labelText="Name"
            required
            type="text"
            filledValue=""
            catchInputValueChange={catchChange}
        />);
        const inputField = screen.getByPlaceholderText(/name/i);
        const warningClass = 'inputFieldContainer__input inputFieldContainer__input_warning-for-emptiness';
        expect(inputField).toHaveClass(warningClass);
    });
});
