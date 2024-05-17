import PredictionLine from '../../../shared/predictionLine';
import style from './Prediction.module.scss';
import useGetListTemp from '../../../shared/hooks/useGetListTemp';
// eslint-disable-next-line import/prefer-default-export
export const Prediction = () => {
  const { tempList } = useGetListTemp();
  return (
    <div className={style.prediction}>
      <div className={style.prediction__title}>5 Last Days:</div>
      <div className={style.prediction__content}>
        {tempList && tempList.map((temp) => <PredictionLine value={temp} />)}
      </div>
    </div>
  );
};
