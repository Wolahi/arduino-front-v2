import style from './styles.module.scss';
import SwitcherTheme from '../../shared/switcherTheme';
import { Today } from '../../widgets/today';
import { Prediction } from '../../widgets/prediction';
import { FullInfo } from '../../widgets/FullInfo';

const MainPage = () => (
  <div>
    <div className="inner">
      <section className="section">
        <SwitcherTheme />
      </section>
      <section className="section">
        <div className={style.main__wrapper}>
          <Today />
          <FullInfo />
        </div>
      </section>
      <section className="section">
        <div className={style.main__wrapper}>
          <Prediction />
        </div>
      </section>
    </div>
  </div>
);

export default MainPage;
