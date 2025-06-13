import './WeatherContainer.css';
import { WindSpeedCard, HumidityCard, UVCard, VisibilityCard} from './WeatherCards';

function App() {
  return (
    <div className="weather-container">
      <div className="weather-data-container">
      <WindSpeedCard speed={15} />
      <HumidityCard value={65} />
      <UVCard unit={'65 UV'} />
      <VisibilityCard speed={20} />
    </div>
    </div>
  )
}

export default App
  