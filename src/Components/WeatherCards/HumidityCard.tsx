// src/components/WeatherCards/HumidityCard.tsx
import WeatherDataCard from './WeatherDataCard';
import windIcon from '/src/assets/water_drop_icon.svg';

const HumidityCard = ({ value }: { value: number }) => {
  return (
    <WeatherDataCard
      icon={<img src={windIcon} className="water_drop_icon" alt="Ícono de humedad" />}
      title="Humedad"
      value={value}
      unit="%"
    />
  );
};

export default HumidityCard;