import { useLayoutEffect, useState } from 'react';

const useTheme = () => {
  const [{ theme, themeText }, setTheme] = useState({
    theme: localStorage.getItem('app-theme') || 'dark',
    themeText: localStorage.getItem('app-theme-text') || 'Dark mode',
  });

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('app-theme', theme);
    localStorage.setItem('app-theme-text', themeText);
  }, [theme, themeText]);

  return { theme, setTheme, themeText };
};

export default useTheme;
