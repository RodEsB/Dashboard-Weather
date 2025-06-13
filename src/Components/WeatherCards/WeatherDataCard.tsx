import './WeatherDataCard.css'; 

interface WeatherDataCardProps {
  title: string;
  value?: string | number;
  unit?: string;
}

const WeatherDataCard = ({ title, value, unit }: WeatherDataCardProps) => {
  return (
    <div className="weather-data-card">
      <div className="data-content">
        <h4>{title}</h4>
        <p>
          {value} {unit && <span>{unit}</span>}
        </p>
      </div>
    </div>
  );
};

export default WeatherDataCard;