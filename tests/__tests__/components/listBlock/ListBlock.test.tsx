import { ListBlock } from '../../../../src/components/listBlock/ListBlock';
import { render } from '../../../testsSetup/test-utils';

describe('List block component', () => {
    test('snapshot - list block component', () => {
        const tree = render(<ListBlock />);
        expect(tree).toMatchSnapshot();
    });
});
