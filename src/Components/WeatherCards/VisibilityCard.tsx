import WeatherDataCard from './WeatherDataCard';

interface VisibilityCardProps {
  speed: number;
  unit?: string;
}

const VisibilityCard = ({ speed, unit = 'km' }: VisibilityCardProps) => {
  return (
    <WeatherDataCard
      title="Visibilidad"
      value={speed}
      unit={unit}
    />
  );
};

export default VisibilityCard;