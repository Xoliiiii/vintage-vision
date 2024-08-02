import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <HeroSection/>
      <Home/>
    </div>
  );
}

export default App;
