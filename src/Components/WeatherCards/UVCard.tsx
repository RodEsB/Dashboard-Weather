import WeatherDataCard from './WeatherDataCard';

interface UVCardProps {
  unit?: string;
}

const UVCard = ({ unit = 'UV' }: UVCardProps) => {
  return (
    <WeatherDataCard
      title="Rayos UV"
      unit={unit}
    />
  );
};

export default UVCard;