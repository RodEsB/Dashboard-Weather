import React from 'react';
import './WeatherCard.css';
import sunny from '/src/assets/sunny.svg'; // Asegúrate de tener este icono

const WeatherCard: React.FC = () => {
  return (
    <div className="weather-card">
      <div className="weather-header">
        <div className="weather-header-row">
          <span className="location">
          <i className="fa-solid fa-location-dot"></i> Ciudad de México
          </span>
          <span className="unit">°C</span>
        </div>
      </div>

      <div className="weather-body">
        <div className="weather-info">
          <h3>Martes</h3>
          <p>10 de Mayo, 2025</p>
        </div>
        <div className="temperature">28°</div>
      </div>

      <div className="weather-footer">
        <img src={sunny} alt="Sunny" className="sun-icon" />
        <p>Soleado</p>
      </div>
    </div>
  );
};

export default WeatherCard;
