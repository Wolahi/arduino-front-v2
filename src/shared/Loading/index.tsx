import style from './loading.module.scss';

const Loading = () => (
  <div className={style.loaderWrapper}>
    <span className={style.loader} />
  </div>
);

export default Loading;
