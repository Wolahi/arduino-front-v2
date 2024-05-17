import useGeoLocation from '../../shared/hooks/useGeoLocation';
import style from './styles.module.scss';

export default function Сity() {
  const { city } = useGeoLocation();

  return <div className={style.today__city}>{city}</div>;
}
