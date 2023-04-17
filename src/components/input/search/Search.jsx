import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../../redux/countries/countriesSlice';
import './Search.css';

const Search = () => {
  const { searchTerm } = useSelector((state) => state.country);
  const dispatch = useDispatch();

  const handleInputValueChange = (event) => {
    dispatch(setSearchTerm(event.target.value.toLowerCase()));
  };
  return (
    <section className="search-container">
      <input
        type="text"
        placeholder="Search for a country"
        className="search-input"
        value={searchTerm}
        onChange={handleInputValueChange}
      />
    </section>
  );
};

export default Search;
