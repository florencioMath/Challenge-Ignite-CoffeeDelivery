import styled from 'styled-components';

export const CoffeesContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  max-width: calc(100vw - 20rem);
  width: 1440px;
  padding: 2rem 10rem;

  h1 {
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-top: 2rem;
  }

  @media ((min-width: 320px) and (max-width: 960px)){
    width: 100%;
    padding: 0px 1rem;
    max-width: calc(100vw - 1rem);
  }
`;
