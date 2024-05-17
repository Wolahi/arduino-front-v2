import style from './styles.module.scss';

const BranchingPage = () => (
  <div className={style.branching}>
    <div className="inner">
      <h3 className={style.branching__title}>Страницы: </h3>
      <a className={style.branching__name} href="/main">
        Main Page
      </a>
    </div>
  </div>
);

export default BranchingPage;
