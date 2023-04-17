import world from '../../images/Continents.svg';
import Country from '../country/Country';
import Search from '../input/search/Search';
import Filter from '../input/filter/Filter';
import './Home.css';

const Home = () => (
  <div className="main">
    <img src={world} alt="world" />
    <div className="options-div">
      <Search />
      <Filter />
    </div>

    <h2 className="h2">All Countries</h2>
    <Country />
  </div>
);

export default Home;
