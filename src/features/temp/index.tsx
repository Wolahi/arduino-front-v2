import LoadingSmall from '../../shared/LoadingSmall';
import useGetTemp from '../../shared/hooks/useGetTemp';
import style from './styles.module.scss';

const Temp = () => {
  const { temp } = useGetTemp();

  return (
    <div className={style.FullInfo__temp}>
      {temp ? `${temp.value}°C` : <LoadingSmall />}
      <div className={style.FullInfo__tempFeels}>
        Feels like:
        <span>{temp ? `${Number(temp.value - 4)}°C` : <LoadingSmall />}</span>
      </div>
    </div>
  );
};

export default Temp;
