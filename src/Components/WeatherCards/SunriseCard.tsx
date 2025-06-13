// src/components/WeatherCards/HumidityCard.tsx
import WeatherDataCard from './WeatherDataCard';
import sunRise from '/src/assets/sunrise.svg';

const SunriseCard = ({ value }: { value: string }) => {
  return (
    <WeatherDataCard
      icon={<img src={sunRise} className="sunrise" alt="Ícono de amanecer" />}
      title="Amanecer"
      value={value}
    />
  );
};

export default SunriseCard;