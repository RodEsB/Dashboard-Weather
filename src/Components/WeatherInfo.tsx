import './WeatherInfo.css';

type WeatherInfoProps = {
  weather?: any;
};

function WeatherInfo({ weather }: WeatherInfoProps) {
  if (!weather) {
    return <div className="weatherInfo-container">Cargando clima...</div>;
  }

  const location = weather.location.name;
  const country = weather.location.country;
  const temp = weather.current.temp_c;
  const condition = weather.current.condition.text;
  const icon = weather.current.condition.icon;

  return (
    <div className="weatherInfo-container">
      
      <div className="weatherInfo-text">
        <h3>{country}</h3>
        <h2>{location}</h2>
        <p>{condition}</p>
      </div>

      <div className="weatherInfo-icon">
        <img src={icon} alt={condition} />
      </div>

      <div className="weatherInfo-temp">
        <h2>{temp}°</h2>
      </div>

    </div>
  );
}

export default WeatherInfo;
