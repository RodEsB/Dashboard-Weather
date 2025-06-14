import './WeatherContainer.css';
import { WindSpeedCard, HumidityCard, UVCard, VisibilityCard, SunriseCard, SunsetCard } from './WeatherCards';

type WeatherContainerProps = {
  weather?: any;
};

function WeatherContainer({ weather }: WeatherContainerProps) {
  if (!weather) {
    return <div className="weather-container">Busca una ciudad para ver detalles del clima</div>;
  }

  return (
    <div className="weather-container">
      <div className="weather-data-container">
        <WindSpeedCard speed={weather.current.wind_kph} />
        <HumidityCard value={weather.current.humidity} />
        <UVCard unit={`${weather.current.uv} UV`} />
        <VisibilityCard speed={weather.current.vis_km} />
        <SunriseCard value={weather.forecast?.forecastday?.[0]?.astro?.sunrise || 'N/A'} />
        <SunsetCard value={weather.forecast?.forecastday?.[0]?.astro?.sunset || 'N/A'} />
      </div>
    </div>
  );
}

export default WeatherContainer;
