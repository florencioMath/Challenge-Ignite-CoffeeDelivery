import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: ${(props) => props.theme['background']};
  color: ${(props) => props.theme['base-text']};
  -webkit-font-smoothing: antialiased;
  padding: 0 10rem;
}

body, input, textarea, button {
  font-family: 'Roboto' sans-serif;
  font-weight: 400;
  font-size: 1rem;
}

h1 {
  font-family: 'Baloo', sans-serif;
  font-weight: 400;
  font-size: 1.125rem;
}

@media (max-width: 768px) {
  html {
    font-size: 87.5%;
  }
  body {
    padding: 0 5rem;
  }
}

button {
  all: unset;
}

`;
