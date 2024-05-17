import style from './predictionLine.module.scss';
import CloudyWeather from '../assets/cloudy-weather.png';

const PredictionLine = () => (
  <div className={style.PredictionLine}>
    <div className={style.PredictionLine__image}>
      <img src={CloudyWeather} alt="" />
    </div>
    <div className={style.PredictionLine__temp}>20°C</div>
    <div className={style.PredictionLine__date}>Friday, 1 Sep</div>
  </div>
);

export default PredictionLine;
