import { useState, useEffect } from 'react';
import WeatherInfo from './WeatherInfo';
import '/src/Components/OtherCountires.css';

function OtherCountries() {
  const [fixedWeatherData, setFixedWeatherData] = useState<any>(null);
  const apiKey = '73cc44eaae4d46dca89195102251306';

  useEffect(() => {
    const fetchFixedWeather = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Canberra&lang=es`
        );
        const data = await response.json();
        setFixedWeatherData(data);
      } catch (error) {
        console.error('Error fetching fixed weather:', error);
        setFixedWeatherData(null);
      }
    };

    fetchFixedWeather();
  }, []);

  return (
    <div className="otherCountries-container">
      <div className="otherCountries-text">
        <h3>Otros países</h3>
      </div>

      <div className="weatherInfo-centered">
        <WeatherInfo weather={fixedWeatherData} />
      </div>
    </div>
  );
}

export default OtherCountries;
