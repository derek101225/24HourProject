import './App.css';
import WeatherAPI from './componets/weather/WeatherApi';
import NasaApi from './componets/nasa/Nasa'


function App() {
  return (
    <div className="App">
      <WeatherAPI />
      <NasaApi />
    </div>
  );
}

export default App;
