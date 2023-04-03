import styled from 'styled-components';

export const CoffeesContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  max-width: calc(100vw - 20rem);
  width: 1440px;
  padding: 2rem 10rem;
  height: 100%;

  h1 {
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`;
