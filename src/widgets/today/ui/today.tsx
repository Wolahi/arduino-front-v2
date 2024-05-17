import Сity from '../../../features/city';
import Date from '../../../features/currentDate';
import style from './today.module.scss';
// eslint-disable-next-line import/prefer-default-export
export const Today = () => (
  <div className={style.today}>
    <Сity />
    <Date />
  </div>
);
