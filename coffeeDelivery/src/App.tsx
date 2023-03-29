import { createContext, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';
import { darkTheme } from './styles/themes/dark';
import { lightTheme } from './styles/themes/light';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  currentTheme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextType);

export function App() {
  const [currentTheme, setCurrentTheme] = useState<Theme>('dark');

  function toggleTheme() {
    currentTheme === 'dark'
      ? setCurrentTheme('light')
      : setCurrentTheme('dark');
  }
  return (
    <>
      <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
        <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>

          <GlobalStyle />
        </ThemeContext.Provider>
      </ThemeProvider>
    </>
  );
}
