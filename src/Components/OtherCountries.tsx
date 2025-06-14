import { useState, useEffect } from 'react';
import WeatherInfo from './WeatherInfo';
import '/src/Components/OtherCountires.css';

const apiKey = '73cc44eaae4d46dca89195102251306';

const cities = ['Canberra', 'Okinawa']; 

function OtherCountries() {
  const [weatherData, setWeatherData] = useState<any[]>([]);

  useEffect(() => {
    const fetchAllWeather = async () => {
      try {
        const responses = await Promise.all(
          cities.map(async (city) => {
            const response = await fetch(
              `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=es`
            );
            const data = await response.json();
            return data;
          })
        );
        setWeatherData(responses);
      } catch (error) {
        console.error('Error fetching weather for other countries:', error);
      }
    };

    fetchAllWeather();
  }, []);

  return (
    <div className="otherCountries-container">
      <div className="otherCountries-text">
        <h3>Otros países</h3>
      </div>

      <div className="weatherInfo-grid">
        {weatherData.map((data, index) => (
          <WeatherInfo key={index} weather={data} />
        ))}
      </div>
    </div>
  );
}

export default OtherCountries;
