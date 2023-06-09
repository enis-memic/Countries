import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { searchByCode } from '../../redux/countries/countriesAction';
import { reset } from '../../redux/countries/countriesSlice';
import './CountryDetail.css';

const CountryDetail = () => {
  const { error, countrySearched } = useSelector((state) => state.country);
  const dispatch = useDispatch();
  const { code } = useParams();
  useEffect(() => {
    if (code) {
      dispatch(searchByCode(code.toLowerCase()));
    }

    if (error) {
      dispatch(error);
    }
    return () => {
      dispatch(reset());
    };
  }, [dispatch, code, error]);
  return (
    <section className="country-detail-container">
      <div className="country-detail-content">
        {countrySearched.length > 0 ? (
          <>
            <div className="header-details">
              <img
                src={countrySearched[0].coatOfArms.png}
                alt={countrySearched[0].coatOfArms.alt}
                className="country-detail-image"
              />
              <h1>{countrySearched[0].name.common}</h1>
            </div>

            <div className="country-detail-right">
              <div className="details">
                <h1>
                  {' '}
                  <span>{countrySearched[0].name.official}</span>
                </h1>
                <div className="detail-country">
                  <p>
                    Population:
                    {' '}
                    <span>{countrySearched[0].population}</span>
                  </p>
                  <p>
                    Region:
                    {' '}
                    <span>{countrySearched[0].region}</span>
                  </p>

                  <p>
                    Time Zone:
                    {' '}
                    <span>{countrySearched[0].timezones[0]}</span>
                  </p>
                  <p>
                    Capital:
                    {' '}
                    <span>{countrySearched[0].capital}</span>
                  </p>

                  <p>
                    Top Level Domain:
                    {' '}
                    <span>{countrySearched[0].tld[0]}</span>
                  </p>

                  <p>
                    Languages:
                    <span>
                      {Object.values(countrySearched[0].languages)
                        .map((item) => item)
                        .join(',')}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div>No details found</div>
        )}
      </div>
    </section>
  );
};

export default CountryDetail;
