import './App.css'
import WeatherCard from './Components/WeatherCard';

function App() {
  return (
    <div className="dashboard-container">
      {/* Aquí irán tus componentes del dashboard */}
      <h3>Hola que tal!</h3>
      <h2>Bienvenido al Dashboard</h2>
      {/* Ejemplo de componente interno */}
      <WeatherCard />
    </div>
  )
}

export default App
