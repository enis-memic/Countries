import { store } from '../redux/store';

describe('store', () => {
  test('should have a default state', () => {
    const expectedState = {
      country: {
        error: null,
        countriesData: [],
        countrySearched: [],
        error: false,
        loading: false,
        message: '',
        region: '',
        searchTerm: '',
        success: false,
      },
    };

    const currentState = store.getState();

    expect(currentState).toEqual(expectedState);
  });
});
