import { MemoryRouter as Router } from 'react-router-dom';
import { Back } from '../../../../../src/components/menuBlock/back/Back';
import { render } from '../../../../testsSetup/test-utils';

describe('Card block component', () => {
    test('snapshot - card block component', () => {
        const tree = render(
            <Router>
                <Back />
            </Router>,
        );
        expect(tree).toMatchSnapshot();
    });
});
