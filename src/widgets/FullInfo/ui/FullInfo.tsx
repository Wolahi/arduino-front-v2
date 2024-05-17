import style from './FullInfo.module.scss';
import CloudyWeather from '../../../shared/assets/cloudy-weather.png';
import SunRiseBlack from '../../../shared/assets/sun-rise.png';
import SunSetBlack from '../../../shared/assets/sun-set.png';
import SunRiseWhite from '../../../shared/assets/sun-rise_white.png';
import SunSetWhite from '../../../shared/assets/sun-set_white.png';
import Temp from '../../../features/temp';

// eslint-disable-next-line import/prefer-default-export
export const FullInfo = () => (
  <div className={style.FullInfo}>
    <div className={style.FullInfo__left}>
      <Temp />
      <div className={style.FullInfo__sun}>
        <div className={style.FullInfo__sunRise}>
          <div className={style.FullInfo__sunImage}>
            <img src={SunRiseWhite} alt="" />
            <img src={SunRiseBlack} alt="" />
          </div>
          <div>
            <div className={style.FullInfo__sunTitle}>Sunrise</div>
            <div className={style.FullInfo__sunTime}>06:37 AM</div>
          </div>
        </div>
        <div className={style.FullInfo__sunSet}>
          <div className={style.FullInfo__sunImage}>
            <img src={SunSetWhite} alt="" />
            <img src={SunSetBlack} alt="" />
          </div>
          <div>
            <div className={style.FullInfo__sunTitle}>Sunset</div>
            <div className={style.FullInfo__sunTime}>20:37 AM</div>
          </div>
        </div>
      </div>
    </div>
    <div className={style.FullInfo__center}>
      <div className={style.FullInfo__weatherImage}>
        <img src={CloudyWeather} alt="" />
        <div className={style.FullInfo__weatherTitle}>Sunny</div>
      </div>
    </div>
  </div>
);
