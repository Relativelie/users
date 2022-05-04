import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { Filter } from '../../../../../src/components/menuBlock/filter/Filter';
import { render } from '../../../../testsSetup/test-utils';
import { data } from '../../../testValues/data';

describe('Card block component', () => {
    test('snapshot - card block component', () => {
        const tree = render(<Filter list={data} />);
        expect(tree).toMatchSnapshot();
    });

    test('click to edit button', () => {
        const tree = render(<Filter list={data} />);
        const filterBtn = screen.getByLabelText(/по городу/i);
        userEvent.click(filterBtn);
        expect(tree).toMatchSnapshot();
    });
});
