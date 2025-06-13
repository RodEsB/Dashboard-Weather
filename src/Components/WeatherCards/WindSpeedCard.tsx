// src/components/WeatherCards/WindSpeedCard.tsx
import WeatherDataCard from './WeatherDataCard';

interface WindSpeedCardProps {
  speed: number;
  unit?: string;
}

const WindSpeedCard = ({ speed, unit = 'km/h' }: WindSpeedCardProps) => {
  return (
    <WeatherDataCard
      title="Viento"
      value={speed}
      unit={unit}
    />
  );
};

export default WindSpeedCard;