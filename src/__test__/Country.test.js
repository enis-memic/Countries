import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Country from '../components/country/Country';
import { store } from '../redux/store';

describe('Navbar rendering', () => {
  test('Navbar rendering', () => {
    const render = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Country />
        </BrowserRouter>
      </Provider>
    );
    expect(render).toMatchSnapshot();
  });
});
