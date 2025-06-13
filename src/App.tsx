import './App.css'
import WeatherCard from './Components/WeatherCard';
import WeatherContainer from './Components/WeatherContainer';
import OtherCountries from './Components/OtherCountries';
import Search from './Components/Search';

function App() {
  return (
    <div className="dashboard-container">
      <div className="top-bar">
        <div className="greetings">
        <h3 className="friendly-greetings">Hola que tal!</h3>
        <h2 className="title">Bienvenido al Dashboard</h2>
      </div>
      <Search />
    </div>
    
      <div className="weather-components">
      {/* Contenedor vertical para WeatherCard y OtherCountries */}
      <div className="card-stack">
        <WeatherCard />
        <OtherCountries />
      </div>

      <WeatherContainer />
    </div>
    </div>
  )
}

export default App
