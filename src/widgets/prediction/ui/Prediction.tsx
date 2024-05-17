import PredictionLine from '../../../shared/predictionLine';
import style from './Prediction.module.scss';
// eslint-disable-next-line import/prefer-default-export
export const Prediction = () => (
  <div className={style.prediction}>
    <div className={style.prediction__title}>5 Days Forecast:</div>
    <div className={style.prediction__content}>
      <PredictionLine />
      <PredictionLine />
      <PredictionLine />
      <PredictionLine />
      <PredictionLine />
    </div>
  </div>
);
