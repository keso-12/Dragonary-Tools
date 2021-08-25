import { useEffect, useState, useMemo } from 'react';

type themeProps = 'default' | 'dark'
type themeStateProps = { theme: themeProps, isFirstTime: boolean }

const darkMode = () => {
  const [{ theme, isFirstTime }, setTheme] = useState<themeStateProps>({ theme: 'default', isFirstTime: false });
  const prefersDarkMode = useMemo(() => theme.includes('dark'), [theme]);

  const handleThemeChange = (newTheme: themeProps, changeIsFirsTime: boolean = false) => {
    window.localStorage.setItem('theme', newTheme);
    setTheme({ theme: newTheme, isFirstTime: changeIsFirsTime });
  };

  const toggleTheme = () => {
    if (theme === 'default') {
      handleThemeChange('dark');
    } else {
      handleThemeChange('default');
    }
  };

  useEffect(() => {
    const variants = ['default', 'dark'];
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const localTheme = window.localStorage.getItem('theme');

    if (variants.includes(localTheme)) {
      handleThemeChange(localTheme as themeProps);
    } else if (isDarkMode) {
      handleThemeChange('dark', true);
    } else {
      handleThemeChange('default', true);
    }
  }, []);

  return {
    theme,
    isFirstTime,
    prefersDarkMode,
    toggleTheme,
  };
};

export default darkMode;
