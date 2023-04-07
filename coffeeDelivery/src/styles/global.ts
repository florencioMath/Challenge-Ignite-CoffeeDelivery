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
  display: flex;
  align-items: center;
  justify-content: center;
}

body, input, textarea, button {
  font-family: 'Roboto' sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;
}

h1, h2 {
  font-family: 'Baloo 2', sans-serif;
  line-height: 130%;
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


input[type= 'text'] {
  min-height: 42px;
  border-radius: 4px;
  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  padding: 0.75rem;
  
  &::placeholder {
      color: ${(props) => props.theme['base-label']};
  }

  &:focus {
  outline: 1px solid ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme['base-text']};
  }

}

`;
