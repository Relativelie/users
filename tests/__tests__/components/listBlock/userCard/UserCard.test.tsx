import { screen } from '@testing-library/dom';
import { MemoryRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { UserCard } from '../../../../../src/components/listBlock/userCard/UserCard';
import { render } from '../../../../testsSetup/test-utils';

let openCard: Function;
beforeEach(() => {
    openCard = jest.fn();
});

describe('user card component', () => {
    test('snapshot - user card component', () => {
        const tree = render(
            <Router>
                <UserCard
                    key={1}
                    id={3}
                    name="Alla"
                    company={{ name: 'Lala' }}
                    openCard={openCard}
                    address={{ city: 'Kazan' }}
                />
            </Router>,
        );
        expect(tree).toMatchSnapshot();
    });

    test('click to link More..', () => {
        render(
            <Router>
                <UserCard
                    key={1}
                    id={3}
                    name="Alla"
                    company={{ name: 'Lala' }}
                    openCard={openCard}
                    address={{ city: 'Kazan' }}
                />
            </Router>,
        );
        const editButton = screen.getByText(/подробнее/i);
        userEvent.click(editButton);
        expect(openCard).toHaveBeenCalledTimes(1);
    });
});
