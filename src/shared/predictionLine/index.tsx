import dayjs from 'dayjs';
import style from './predictionLine.module.scss';
import CloudyWeather from '../assets/cloudy-weather.png';

const PredictionLine = ({
  value,
}: {
  value: { id: number; value: number; data: string };
}) => (
  <div className={style.PredictionLine}>
    <div className={style.PredictionLine__image}>
      <img src={CloudyWeather} alt="" />
    </div>
    <div className={style.PredictionLine__temp}>{`${value.value} °C`}</div>
    <div className={style.PredictionLine__date}>
      {dayjs(value.data).format('ddd, D MMM hh:mm')}
    </div>
  </div>
);

export default PredictionLine;
