import { MemoryRouter as Router } from 'react-router-dom';
import { ListBlock } from '../../../../src/components/listBlock/ListBlock';
import { render } from '../../../testsSetup/test-utils';

describe('List block component', () => {
    test('snapshot - list block component', () => {
        const tree = render(
            <Router>
                <ListBlock />
            </Router>,
        );
        expect(tree).toMatchSnapshot();
    });
});
