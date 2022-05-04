import App from '../../../../src/components/app/App';
import { render } from '../../../testsSetup/test-utils';

describe('App component', () => {
    test('snapshot - app component', () => {
        const tree = render(<App />);
        expect(tree).toMatchSnapshot();
    });
});
