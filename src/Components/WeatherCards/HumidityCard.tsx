// src/components/WeatherCards/HumidityCard.tsx
import WeatherDataCard from './WeatherDataCard';

const HumidityCard = ({ value }: { value: number }) => {
  return (
    <WeatherDataCard
      title="Humedad"
      value={value}
      unit="%"
    />
  );
};

export default HumidityCard;