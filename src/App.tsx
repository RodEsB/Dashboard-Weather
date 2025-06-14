import { useState, useEffect } from 'react';
import './App.css';
import WeatherCard from './Components/WeatherCard';
import WeatherContainer from './Components/WeatherContainer';
import OtherCountries from './Components/OtherCountries';
import Search from './Components/Search';

function App() {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);  // <-- estado para error
  const apiKey = '73cc44eaae4d46dca89195102251306';

  const fetchWeather = async (city: string) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=es`
      );
      const data = await response.json();

      if (data.error) {
        setError('Por favor ingresa un nombre de ciudad válido.');
        setWeatherData(null);
      } else {
        setError(null);
        setWeatherData(data);
      }
    } catch (error) {
      console.error('Error fetching weather:', error);
      setError('Error al buscar el clima. Intenta nuevamente.');
      setWeatherData(null);
    }
  };

  useEffect(() => {
    fetchWeather('San Andres Cholula');
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
          {/* Pasamos el error también */}
          <WeatherCard weather={weatherData} error={error} />
        </div>
        <div className="card-stack-countries">
          <OtherCountries />
        </div>
        <WeatherContainer weather={weatherData} />
      </div>
    </div>
  );
}

export default App;
