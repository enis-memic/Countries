import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import CountryDetail from '../components/country/CountryDetail';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('CountryDetail', () => {
  let store;
  const initialState = {
    country: {
      error: false,
      loading: false,
      success: true,
      countrySearched: [
        {
          name: { common: 'Country Name' },
          population: 1000000,
          region: 'Test Region',
          capital: 'Test Capital',
          tld: ['.tld'],
          timezones: ['UTC'],
          languages: {
            eng: 'English',
            spa: 'Spanish',
          },
          coatOfArms: {
            png: 'https://test.com/test.png',
            alt: 'Test Alt',
          },
        },
      ],
    },
  };

  beforeEach(() => {
    store = mockStore(initialState);
  });

  test('renders CountryDetail component', () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/code']}>
          <CountryDetail />
        </MemoryRouter>
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
