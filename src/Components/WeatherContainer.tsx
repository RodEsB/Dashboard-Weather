import './WeatherContainer.css';
import { WindSpeedCard, HumidityCard, UVCard, VisibilityCard} from './WeatherCards';

type WeatherContainerProps = {
  weather?: any;
};

function WeatherContainer({ weather }: WeatherContainerProps) {
  if (!weather) {
    return <div className="weather-container">Esperando búsqueda para ver detalles</div>;
  }

  return (
    <div className="weather-container">
      <div className="weather-data-container">
        <WindSpeedCard speed={weather.current.wind_kph} />
        <HumidityCard value={weather.current.humidity} />
        <UVCard unit={`${weather.current.uv} UV`} />
        <VisibilityCard speed={weather.current.vis_km} />
      </div>
    </div>
  );
}

export default WeatherContainer;
