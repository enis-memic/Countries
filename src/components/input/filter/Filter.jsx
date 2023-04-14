import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { reset, setRegion } from '../../../redux/countries/countriesSlice';

const Filter = () => {
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  const [filter, setFitler] = useState('');
  const [displayDropDown, setDisplayDropDown] = useState(false);
  const dispatch = useDispatch();

  const handleDropDown = () => {
    setDisplayDropDown(!displayDropDown);
  };

  useEffect(() => {
    if (filter !== '') {
      dispatch(setRegion(filter.toLowerCase()));
    }

    return () => {
      dispatch(reset);
    };
  }, [dispatch, filter]);

  return (
    <section className="filter-container">
      <div className="filter" onClick={handleDropDown}>
        <input
          type="text"
          readOnly
          placeholder="Filter by Region"
          value={filter}
          className="filter-input"
        />

        <i className="fa-solid fa-angle-down" />
      </div>
      {displayDropDown ? (
        <div>
          {regions.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setFitler(item);
                handleDropDown();
              }}
            >
              {item}
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
};

export default Filter;
