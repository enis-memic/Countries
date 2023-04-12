import { Routes, Route } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import Home from './pages/home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
