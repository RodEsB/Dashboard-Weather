import './WeatherInfo.css';
import sunnyIcon from '../assets/sunny.svg';

type WeatherInfoProps = {
  weather?: any;
};

function WeatherInfo({ weather }: WeatherInfoProps) {
  if (!weather) {
    return <div>Cargando clima...</div>;
  }

  return (
    <div className="weatherInfo-container">
      <div className="weatherInfo-text">
        <h3>{weather.location.country}</h3>
        <h2>{weather.location.name}</h2>
        <p>{weather.current.condition.text}</p>
      </div>

      <div className="weatherInfo-icon">
        <img src={weather.current.condition.icon || sunnyIcon} alt={weather.current.condition.text} />
      </div>

      <div className="weatherInfo-temp">
        <h2>{weather.current.temp_c}°</h2>
      </div>
    </div>
  );
}

export default WeatherInfo;
