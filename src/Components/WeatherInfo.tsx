import './WeatherInfo.css';
import sunnyIcon from '../assets/sunny.svg'; // Ajusta la ruta según tu estructura

function WeatherInfo() {
  return (
    <div className="weatherInfo-container">
      
      {/* Parte izquierda: texto del país */}
      <div className="weatherInfo-text">
        <h3>Australia</h3>
        <h2>Canberra</h2>
        <p>Soleado</p>
      </div>

      {/* Parte central: imagen */}
      <div className="weatherInfo-icon">
        <img src={sunnyIcon} alt="Sunny" />
      </div>

      {/* Parte derecha: grados */}
      <div className="weatherInfo-temp">
        <h2>32°</h2>
      </div>

    </div>
  )
}

export default WeatherInfo;
