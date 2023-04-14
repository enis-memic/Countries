import world from '../../images/world.jpg';
import Country from '../country/Country';

const Home = () => (
  <div className="main">
    <h2 className="h2">World</h2>

    <img src={world} alt="world" />

    <h2>All Continents</h2>
    <Country />
  </div>
);

export default Home;
