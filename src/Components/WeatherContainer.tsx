import './WeatherContainer.css';
import { WindSpeedCard, HumidityCard, UVCard, VisibilityCard, SunriseCard, SunsetCard} from './WeatherCards';

function WeatherContainer() {
  return (
    <div className="weather-container">
      <div className="weather-data-container">
      <WindSpeedCard speed={15} />
      <HumidityCard value={65} />
      <UVCard unit={'65 UV'} />
      <VisibilityCard speed={20} />
      <SunriseCard value={'5:55 AM'} />
      <SunsetCard value={'18:55 PM'} />
    </div>
    </div>
  )
}

export default WeatherContainer
