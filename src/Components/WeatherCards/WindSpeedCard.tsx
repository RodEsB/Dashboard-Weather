// src/components/WeatherCards/WindSpeedCard.tsx
import WeatherDataCard from './WeatherDataCard';
import windIcon from '/src/assets/air_icon.svg'; // Importa tu SVG

interface WindSpeedCardProps {
  speed: number;
  unit?: string;
}

const WindSpeedCard = ({ speed, unit = 'km/h' }: WindSpeedCardProps) => {
  return (
    <WeatherDataCard
      icon={<img src={windIcon} className="air-icon" alt="Ícono de viento" />}
      title="Viento"
      value={speed}
      unit={unit}
    />
  );
};

export default WindSpeedCard;