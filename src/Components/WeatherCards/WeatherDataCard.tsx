import React from 'react';
import './WeatherDataCard.css';

interface WeatherDataCardProps {
  icon: React.ReactNode; 
  title: string;
  value?: string | number;
  unit?: string;
}

const WeatherDataCard = ({ icon, title, value, unit }: WeatherDataCardProps) => {
  return (
    <div className="weather-data-card">
      <div className="icon-container">
        {icon} {/* Aquí se renderiza el ícono */}
      </div>
      <div className="data-content">
        <h4>{title}</h4>
        <p>
          {value} {unit && <span>{unit}</span>}
        </p>
      </div>
    </div>
  );
};

export default WeatherDataCard;