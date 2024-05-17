import classNames from 'classnames';
import style from './HourlyForecastColumn.module.scss';
import CloudyWeather from '../assets/cloudy-weather.png';
import LoadingSmall from '../LoadingSmall';

const HourlyForecastColumn = ({
  isDay,
  time,
  temp,
}: {
  isDay: boolean;
  time: string;
  temp: number | undefined;
}) => {
  const className = classNames(style.HourlyForecastColumn, {
    [style.day]: isDay,
    [style.night]: !isDay,
  });

  return (
    <div className={className}>
      <div className={style.HourlyForecastColumn__time}>{time}</div>
      <div className={style.HourlyForecastColumn__weatherIcon}>
        <img src={CloudyWeather} alt="" />
      </div>
      <div className={style.HourlyForecastColumn__temp}>
        {temp ? `${temp}°C` : <LoadingSmall />}
      </div>
    </div>
  );
};

export default HourlyForecastColumn;
