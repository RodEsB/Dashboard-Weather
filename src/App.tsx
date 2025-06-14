import { useState, useEffect } from 'react';
import './App.css';
import WeatherCard from './Components/WeatherCard';
import WeatherContainer from './Components/WeatherContainer';
import OtherCountries from './Components/OtherCountries';
import Search from './Components/Search';

function App() {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true); // estado para mostrar cargando
  const apiKey = '73cc44eaae4d46dca89195102251306';

  const fetchWeather = async (cityOrCoords: string) => {
    try {
      setLoading(true); // mostrar cargando cada vez que se hace fetch
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityOrCoords}&lang=es`
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
    } finally {
      setLoading(false); // ocultar cargando al terminar
    }
  };
  //Geologalización
  useEffect(() => {
    if (navigator.geolocation) { 
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather(`${latitude},${longitude}`);
        },
        (error) => {
          console.error('Error al obtener ubicación:', error);
          fetchWeather('San Andres Cholula');
        }
      );
    } else {
      console.warn('Geolocalización no soportada por el navegador');
      fetchWeather('San Andres Cholula'); //En caso que no funcione o no acepte usa el default
    }
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
          {/* Mostrar mensaje si está cargando */}
          {loading ? (
            <p className="loading-message">Obteniendo clima basado en tu ubicación...</p>
          ) : (
            <WeatherCard weather={weatherData} error={error} />
          )}
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
