const Search = () => (
  <section className="search-container">
    <div className="search-icon">
      <i className="fa-solid fa-magnifying-glass" />
    </div>

    <input
      type="text"
      placeholder="Search for a country"
      className="search-input"
      value=""
    />
  </section>
);

export default Search;
