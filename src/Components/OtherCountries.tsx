import './OtherCountires.css';
import WeatherInfo from './WeatherInfo';

type OtherCountriesProps = {
  weather?: any;
};

function OtherCountries({ weather }: OtherCountriesProps) {
  return (
    <div className="otherCountries-container">
      <div className="otherCountries-text">
        <h3>Otros países</h3>
      </div>

      <div className="weatherInfo-centered">
        <WeatherInfo weather={weather} />
      </div>
    </div>
  );
}

export default OtherCountries;
