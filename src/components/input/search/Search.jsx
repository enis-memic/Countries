import { useDispatch, useSelector } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
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
        placeholder="Search "
        className="search-input"
        value={searchTerm}
        onChange={handleInputValueChange}
      />
      <FaSearch className="icon" />
    </section>
  );
};

export default Search;
