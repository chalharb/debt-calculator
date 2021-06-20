import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import ToggleStrategy from './ToggleStrategy';

test('renders Avalanche Label', () => {
    const { getByText } = render(
        <Provider store={store}>
            <ToggleStrategy />
        </Provider>
    );

    expect(getByText(/Avalanche/i)).toBeInTheDocument();
    expect(getByText(/Snowball/i)).toBeInTheDocument();
});

test('renders Snowball Label', () => {
    const { getByText } = render(
        <Provider store={store}>
            <ToggleStrategy />
        </Provider>
    );
    
    expect(getByText(/Snowball/i)).toBeInTheDocument();
});
