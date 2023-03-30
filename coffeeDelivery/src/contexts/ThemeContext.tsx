import { createContext, ReactNode, useCallback, useContext } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { darkTheme } from '../styles/themes/dark';
import { lightTheme } from '../styles/themes/light';

import { usePersistedState } from '../utils/usePersistedState';

export interface ThemeContextProps {
  toggleTheme(): void;
  theme: DefaultTheme;
}

export interface MainProps {
  children: ReactNode | any;
}

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps
);

export const useTheme = () => useContext(ThemeContext);

export const CustomThemeProvider = ({ children }: MainProps) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>(
    'florencioMath-coffeeDelivery:v01.01.01',
    darkTheme
  );

  const toggleTheme = useCallback(() => {
    theme.title === 'light' ? setTheme(darkTheme) : setTheme(lightTheme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
