import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../src/store/index';

// eslint-disable-next-line react/prop-types
const Wrapper: React.FC = ({ children }) => <Provider store={store}>{children}</Provider>;

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => render(ui, { wrapper: Wrapper, ...options });

export * from '@testing-library/react';
export { customRender as render };
