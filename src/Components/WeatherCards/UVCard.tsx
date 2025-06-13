import WeatherDataCard from './WeatherDataCard';
import windIcon from '/src/assets/uv_icon.svg';

interface UVCardProps {
  unit?: string;
}

const UVCard = ({ unit = 'UV' }: UVCardProps) => {
  return (
    <WeatherDataCard
        icon={<img src={windIcon} className="uv-icon" alt="Ícono de uv" />}
        title="Rayos UV"
        unit={unit}
    />
  );
};

export default UVCard;