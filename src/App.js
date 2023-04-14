import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/HomePage/Home';
import CountryDetail from './components/country/CountryDetail';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:code" element={<CountryDetail />} />
      </Routes>
    </div>
  );
}

export default App;
