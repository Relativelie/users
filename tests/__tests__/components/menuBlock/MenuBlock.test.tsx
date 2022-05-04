import { MenuBlock } from '../../../../src/components/menuBlock/MenuBlock';
import { render } from '../../../testsSetup/test-utils';
import { data } from '../../../testValues/data';

describe('Card block component', () => {
    test('snapshot - card block component', () => {
        const tree = render(<MenuBlock list={data} />);
        expect(tree).toMatchSnapshot();
    });
});
