import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux'
import { store } from './redux/store'

test('renders App Component', () => {
  render(<Provider store={store}>
    <App />
  </Provider>);
  const linkElement = screen.getByText(/Fetching Universities.../i);
  expect(linkElement).toBeInTheDocument();
});
