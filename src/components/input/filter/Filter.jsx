import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FaChevronDown } from 'react-icons/fa';
import { reset, setRegion } from '../../../redux/countries/countriesSlice';
import './Filter.css';

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
          placeholder="Regions"
          value={filter}
          className="filter-input"
        />
        <FaChevronDown className="icon" />
      </div>
      {displayDropDown ? (
        <div className="dropdown">
          {regions.map((item, index) => (
            <div
              className="dropdown-item"
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
