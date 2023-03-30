import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

import { CustomThemeProvider } from './contexts/ThemeContext';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <>
      <CustomThemeProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>

        <GlobalStyle />
      </CustomThemeProvider>
    </>
  );
}
