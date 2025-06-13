import './OtherCountires.css';
import WeatherInfo from './WeatherInfo';

function OtherCountires() {
  return (
    <div className="otherCountries-container">
      <div className="otherCountries-text">
        <h3>Otros países</h3>
      </div>

      <div className="weatherInfo-centered">
        <WeatherInfo />
      </div>
    </div>
  )
}

export default OtherCountires;
