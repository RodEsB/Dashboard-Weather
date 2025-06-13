// src/components/WeatherCards/HumidityCard.tsx
import WeatherDataCard from './WeatherDataCard';
import sunSet from '/src/assets/sunset.svg';

const SunsetCard = ({ value }: { value: string }) => {
  return (
    <WeatherDataCard
      icon={<img src={sunSet} className="sunrise" alt="Ícono de amanecer" />}
      title="Atardecer"
      value={value}
    />
  );
};

export default SunsetCard;