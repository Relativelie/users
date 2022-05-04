import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { UserCard } from '../../../../../src/components/listBlock/userCard/UserCard';
import { render } from '../../../../testsSetup/test-utils';

let openCard: Function;
beforeEach(() => {
    openCard = jest.fn();
});

describe('Card block component', () => {
    test('snapshot - card block component', () => {
        const tree = render(<UserCard
            key={1}
            id={3}
            name="Alla"
            company={{ name: 'Lala' }}
            openCard={openCard}
            address={{ city: 'Kazan' }}
        />);
        expect(tree).toMatchSnapshot();
    });

    test('click to link More..', () => {
        render(<UserCard
            key={1}
            id={3}
            name="Alla"
            company={{ name: 'Lala' }}
            openCard={openCard}
            address={{ city: 'Kazan' }}
        />);
        const editButton = screen.getByLabelText(/Подробнее/i);
        userEvent.click(editButton);
        expect(openCard).toHaveBeenCalledTimes(1);
    });
});
