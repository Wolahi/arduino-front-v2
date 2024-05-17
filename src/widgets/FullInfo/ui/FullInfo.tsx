import style from './FullInfo.module.scss';
import Temp from '../../../features/temp';

// eslint-disable-next-line import/prefer-default-export
export const FullInfo = () => (
  <div className={style.FullInfo}>
    <div className={style.FullInfo__left}>
      <Temp />
    </div>
  </div>
);
