import './App.css'
import WeatherCard from './Components/WeatherCard';
import WeatherContainer from './Components/WeatherContainer';

function App() {
  return (
    <div className="dashboard-container">
      <div className="greetings">
        <h3 className="friendly-greetings">Hola que tal!</h3>
        <h2 className="title">Bienvenido al Dashboard</h2>
      </div>
      
      {/* Contenedor flex para alinear horizontalmente */}
      <div className="weather-components">
        <WeatherCard />
        <WeatherContainer />
      </div>
    </div>
  )
}

export default App
