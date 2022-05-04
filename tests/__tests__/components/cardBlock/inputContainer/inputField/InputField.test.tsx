import { fireEvent, screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { InputField } from '../../../../../../src/components/cardBlock/InputContainer/inputField/InputField';
import { render } from '../../../../../testsSetup/test-utils';

let catchChange: Function;
beforeEach(() => {
    catchChange = jest.fn();
});

describe('Input field component', () => {
    test('snapshot - input field component', () => {
        const tree = render(<InputField
            key={1}
            labelText="Name"
            required
            type="text"
            filledValue="Elena"
            catchInputValueChange={catchChange}
        />);
        expect(tree).toMatchSnapshot();
    });

    test('click to edit button', () => {
        render(<InputField
            key={1}
            labelText="Name"
            required
            type="text"
            filledValue="Elena"
            catchInputValueChange={catchChange}
        />);
        const inputField = screen.getByPlaceholderText(/name/i);
        expect(inputField).toHaveClass('inputFieldContainer__input');
        userEvent.click(inputField);
        userEvent.type(inputField, ' Harribo');
        expect(inputField).toHaveValue('Elena Harribo');
        fireEvent.keyUp(inputField, { key: 'Enter', keyCode: 13 });
        expect(inputField).toHaveClass('inputFieldContainer__input');
    });

    test('verify error class - with tab', () => {
        render(<InputField
            key={1}
            labelText="Name"
            required
            type="text"
            filledValue="Elena"
            catchInputValueChange={catchChange}
        />);
        const inputField = screen.getByPlaceholderText(/name/i);
        expect(inputField).toHaveClass('inputFieldContainer__input');
        userEvent.clear(inputField);
        userEvent.tab();
        const warningClass = 'inputFieldContainer__input inputFieldContainer__input_warning-for-emptiness';
        expect(inputField).toHaveClass(warningClass);
    });

    test('verify error class - with enter', () => {
        render(<InputField
            key={1}
            labelText="Name"
            required
            type="text"
            filledValue="Elena"
            catchInputValueChange={catchChange}
        />);
        const inputField = screen.getByPlaceholderText(/name/i);
        expect(inputField).toHaveClass('inputFieldContainer__input');
        userEvent.clear(inputField);
        fireEvent.keyUp(inputField, { key: 'Enter', keyCode: 13 });
        const warningClass = 'inputFieldContainer__input inputFieldContainer__input_warning-for-emptiness';
        expect(inputField).toHaveClass(warningClass);
    });

    test('comment enter - verify class and required=false', () => {
        render(<InputField
            key={1}
            labelText="Comment"
            required={false}
            type="text"
            filledValue="Elena"
            catchInputValueChange={catchChange}
        />);
        const inputField = screen.getByPlaceholderText(/name/i);
        const commentClass = 'inputFieldContainer__input inputFieldContainer__input_comment';
        expect(inputField).toHaveClass(commentClass);
        userEvent.clear(inputField);
        fireEvent.keyUp(inputField, { key: 'Enter', keyCode: 13 });
        expect(inputField).toHaveClass(commentClass);
    });

    test('catch input value change is running', () => {
        render(<InputField
            key={1}
            labelText="Name"
            required
            type="text"
            filledValue="Elena"
            catchInputValueChange={catchChange}
        />);
        const inputField = screen.getByPlaceholderText(/name/i);
        userEvent.type(inputField, ' lala');
        fireEvent.keyUp(inputField, { key: 'Enter', keyCode: 13 });
        expect(catchChange).toHaveBeenCalledTimes(1);
    });

    test('input have error class without change value', () => {
        render(<InputField
            key={1}
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
