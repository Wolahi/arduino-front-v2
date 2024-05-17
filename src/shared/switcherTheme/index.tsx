/* eslint-disable jsx-a11y/label-has-associated-control */
import useTheme from './useTheme';
import style from './switcherTheme.module.scss';

const Switcher = () => {
  const { theme, themeText, setTheme } = useTheme();

  const handleSwitchTheme = () => {
    if (theme === 'dark') {
      setTheme({
        theme: 'light',
        themeText: 'Light mode',
      });
    } else {
      setTheme({
        theme: 'dark',
        themeText: 'Dark mode',
      });
    }
  };

  return (
    <div className={style.switcher}>
      <label htmlFor="switcher">
        <input type="button" id="switcher" onClick={handleSwitchTheme} />
      </label>
      <div className={style.switcher__text}>{themeText}</div>
    </div>
  );
};

export default Switcher;
