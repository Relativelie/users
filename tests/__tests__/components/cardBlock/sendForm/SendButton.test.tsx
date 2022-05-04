import { fireEvent, screen } from '@testing-library/dom';
import { SendButton } from '../../../../../src/components/cardBlock/sendForm/sendButton/SendButton';
import { render } from '../../../../testsSetup/test-utils';

let sendForm: Function;
let checkAvailabilityTrue: Function;
let checkAvailabilityFalse: Function;
beforeEach(() => {
    sendForm = jest.fn();
    checkAvailabilityTrue = jest.fn(() => true);
    checkAvailabilityFalse = jest.fn(() => false);
});

describe('Send button component', () => {
    test('snapshot - send button component disabled=true', () => {
        const tree = render(<SendButton
            sendUserForm={sendForm}
            checkBtnAvailability={checkAvailabilityTrue}
        />);
        expect(tree).toMatchSnapshot();
    });

    test('snapshot - send button component disabled=false', () => {
        const tree = render(<SendButton
            sendUserForm={sendForm}
            checkBtnAvailability={checkAvailabilityFalse}
        />);
        expect(tree).toMatchSnapshot();
    });

    test('check disabled value', () => {
        render(<SendButton
            sendUserForm={sendForm}
            checkBtnAvailability={checkAvailabilityTrue}
        />);
        const button = screen.getByText(/отправить/i);
        fireEvent.click(button);
        expect(checkAvailabilityTrue).toHaveBeenCalledTimes(1);
        expect(sendForm).not.toHaveBeenCalled();
    });

    test('check enabled value', () => {
        render(<SendButton
            sendUserForm={sendForm}
            checkBtnAvailability={checkAvailabilityFalse}
        />);
        const button = screen.getByText(/отправить/i);
        fireEvent.click(button);
        expect(checkAvailabilityFalse).toHaveBeenCalledTimes(1);
        expect(sendForm).toHaveBeenCalledTimes(1);
    });
});
