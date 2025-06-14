import React from 'react';
import './WeatherCard.css';

type WeatherCardProps = {
  weather?: any;
};

const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  // Verificar que weather, weather.location y weather.current existen
  if (
    !weather ||
    !weather.location ||
    !weather.current ||
    !weather.current.condition
  ) {
    return <div className="weather-card">Busca una ciudad para ver el clima</div>;
  }

  return (
    <div className="weather-card">
      <div className="weather-header">
        <span className="location">
          <i className="fa-solid fa-location-dot"></i> {weather.location.name}
        </span>
        <span className="unit">°C</span>
      </div>

      <div className="weather-body">
        <div className="weather-info">
          <h3>{new Date().toLocaleDateString('es-ES', { weekday: 'long' })}</h3>
          <p>{new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        </div>
        <div className="temperature">{weather.current.temp_c}°</div>
      </div>

      <div className="weather-footer">
        <img
          src={weather.current.condition.icon}
          alt={weather.current.condition.text}
          className="sun-icon"
        />
        <p className="weather-climate">{weather.current.condition.text}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
