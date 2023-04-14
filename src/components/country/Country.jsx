/*eslint-disable*/
import './country.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  searchByRegion,
  showAllCountries,
} from '../../redux/countries/countriesAction';
// import { reset } from '../../redux/countries/countriesSlice';

const Country = () => {
  const { countriesData, loading, success, error, region } = useSelector(
    (state) => state.country
  );

  const dispatch = useDispatch();
  // const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    dispatch(showAllCountries());

    if (region) {
      dispatch(searchByRegion(region));
    }

    if (error) {
      console.log(error);
    }
  }, [dispatch, error, success, region]);

  return (
    <section className="country-container">
      {loading ? (
        <h1>Loading</h1>
      ) : (
        countriesData.length > 0 &&
        countriesData.map((item, index) => (
          <Link
            // onClick={() => dispatch(searchByName(item.cioc.toLowerCase()))}
            className="country-card"
            key={index}
            to={`/${item.cioc}`}
          >
            <img
              src={item.flags.png}
              alt={item.flags.alt}
              className="country-image"
            />
            <div className="country-content">
              <h3>{item.name.common} </h3>
              <p>
                Population: <span>{item.population}</span>
              </p>
              <p>
                Region: <span>{item.region}</span>
              </p>
              <p>
                Capital: <span>{item.capital}</span>
              </p>
            </div>
          </Link>
        ))
      )}
    </section>
  );
};

export default Country;
