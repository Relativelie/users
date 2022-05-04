import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { CardBlock } from '../../../../src/components/cardBlock/CardBlock';
import { render } from '../../../testsSetup/test-utils';

describe('Card block component', () => {
    test('snapshot - card block component', () => {
        const tree = render(<CardBlock />);
        expect(tree).toMatchSnapshot();
    });

    test('click to edit button', () => {
        render(<CardBlock />);
        const editButton = screen.getByLabelText(/редактировать/i);
        expect(editButton).toHaveClass('cardBlock__editBtn');
        userEvent.click(editButton);
        expect(editButton).toHaveClass('cardBlock__editBtn cardBlock_editBtn_isActive');
        userEvent.click(editButton);
        expect(editButton).toHaveClass('cardBlock__editBtn');
    });
});
