import { fireEvent, screen } from '@testing-library/dom';
import { Filter } from '../../../../../src/components/menuBlock/filter/Filter';
import { render } from '../../../../testsSetup/test-utils';
import { data } from '../../../../testValues/data';

describe('Card block component', () => {
    test('snapshot - card block component', () => {
        const tree = render(<Filter list={data} />);
        expect(tree).toMatchSnapshot();
    });

    test('click to edit button', () => {
        render(<Filter list={data} />);
        const filterBtn = screen.getByText(/по городу/i);
        fireEvent.click(filterBtn);
        expect(filterBtn).toHaveClass('filter__button filter__button_isActive');
    });
});
