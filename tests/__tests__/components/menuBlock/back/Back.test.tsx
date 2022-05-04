import { Back } from '../../../../../src/components/menuBlock/back/Back';
import { render } from '../../../../testsSetup/test-utils';

describe('Card block component', () => {
    test('snapshot - card block component', () => {
        const tree = render(<Back />);
        expect(tree).toMatchSnapshot();
    });
});
