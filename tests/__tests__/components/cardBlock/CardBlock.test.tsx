import { fireEvent, screen } from '@testing-library/dom';
import { MemoryRouter as Router } from 'react-router-dom';
import { CardBlock } from '../../../../src/components/cardBlock/CardBlock';
import { render } from '../../../testsSetup/test-utils';

describe('Card block component', () => {
    test('snapshot - card block component', () => {
        const tree = render(
            <Router>
                <CardBlock />
            </Router>,
        );
        expect(tree).toMatchSnapshot();
    });

    test('click to edit button', () => {
        render(
            <Router>
                <CardBlock />
            </Router>,
        );
        const editButton = screen.getByText(/редактировать/i);
        expect(editButton).toHaveClass('cardBlock__editBtn');
        fireEvent.click(editButton);
        expect(editButton).toHaveClass('cardBlock__editBtn cardBlock_editBtn_isActive');
        fireEvent.click(editButton);
        expect(editButton).toHaveClass('cardBlock__editBtn');
    });
});
