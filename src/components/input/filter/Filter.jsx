import './filter.css';

const Filter = () => (
  <section className="filter-container">
    <div className="filter">
      <input
        type="text"
        readOnly
        placeholder="Filter by Region"
        value=""
        className="filter-input"
      />

      <i className="fa-solid fa-angle-down" />
    </div>
  </section>
);

export default Filter;
