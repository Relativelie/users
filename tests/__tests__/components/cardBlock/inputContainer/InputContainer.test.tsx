import { InputContainer } from '../../../../../src/components/cardBlock/InputContainer/InputContainer';
import { render } from '../../../../testsSetup/test-utils';

let addListFunc: Function;
beforeEach(() => {
    addListFunc = jest.fn();
});

describe('Input container component', () => {
    test('snapshot - input container component', () => {
        const tree = render(<InputContainer catchInputValueChange={addListFunc} />);
        expect(tree).toMatchSnapshot();
    });
});
