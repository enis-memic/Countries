import './country.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import {
  searchByRegion,
  showAllCountries,
} from '../../redux/countries/countriesAction';

const Country = () => {
  const {
    countriesData, loading, success, error, region, searchTerm,
  } = useSelector((state) => state.country);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showAllCountries());

    if (region) {
      dispatch(searchByRegion(region));
    }

    if (error) {
      dispatch(error);
    }
  }, [dispatch, error, success, region]);

  const data = countriesData.filter((item) => item.name.common.toLowerCase().includes(searchTerm));

  return (
    <section className="country-container">
      {loading ? (
        <h1>Loading</h1>
      ) : (
        data.length > 0
        && data.map((item, index) => (
          <Link className="country-card" key={index} to={`/${item.cioc}`}>
            <p className="more">
              {' '}
              <BsFillArrowRightCircleFill className="icon-more" />
            </p>
            <img
              src={item.flags.png}
              alt={item.flags.alt}
              className="country-image"
            />
            <div className="country-content">
              <h3>
                {item.name.common}
                {' '}
              </h3>
              <p>
                {' '}
                <span>{item.population}</span>
              </p>
            </div>
          </Link>
        ))
      )}
    </section>
  );
};

export default Country;
