import WeatherDataCard from './WeatherDataCard';
import windIcon from '/src/assets/visibility_icon.svg';

interface VisibilityCardProps {
  speed: number;
  unit?: string;
}

const VisibilityCard = ({ speed, unit = 'km' }: VisibilityCardProps) => {
  return (
    <WeatherDataCard
        icon={<img src={windIcon} className="visibility_icon" alt="Ícono de visibilidad" />}
        title="Visibilidad"
        value={speed}
        unit={unit}
    />
  );
};

export default VisibilityCard;