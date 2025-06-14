import { useState, useEffect} from 'react';
import './App.css';
import WeatherCard from './Components/WeatherCard';
import WeatherContainer from './Components/WeatherContainer';
import OtherCountries from './Components/OtherCountries';
import Search from './Components/Search';

function App() {
  const [weatherData, setWeatherData] = useState<any>(null);
  const apiKey = '73cc44eaae4d46dca89195102251306'; 

  const fetchWeather = async (city: string) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=es`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather:', error);
      setWeatherData(null);
    }
  };

  // Búsqueda automática al cargar la página
  useEffect(() => {
    fetchWeather('Cholula');
  }, []);

  return (
    <div className="dashboard-container">
      <div className="top-bar">
        <div className="greetings">
          <h3 className="friendly-greetings">Hola que tal!</h3>
          <h2 className="title">Bienvenido al Dashboard</h2>
        </div>
        <Search onSearch={fetchWeather} />
      </div>

      <div className="weather-components">
        <div className="card-stack">
          <WeatherCard weather={weatherData} />
        </div>
        <div className="card-stack-countries">
          <OtherCountries weather={weatherData} />
        </div>
        <WeatherContainer weather={weatherData} />
      </div>
    </div>
  );
}

export default App;
