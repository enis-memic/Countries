import world from '../../images/world.jpg';
import Country from '../country/Country';
// import Search from '../input/search/Search';
import Filter from '../input/filter/Filter';

const Home = () => (
  <div className="main">
    <h2 className="h2">World</h2>

    <img src={world} alt="world" />
    <div>
      {/* <Search /> */}
      <Filter />
    </div>

    <h2>All Continents</h2>
    <Country />
  </div>
);

export default Home;
