import styled from 'styled-components';

export const CoffeesListContainer = styled.div`
  margin-top: 3.375rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  column-gap: 2rem;
  row-gap: 2.5rem;
  max-width: 1120px;
  width: 100%;
  margin-bottom: 5rem;

  @media ((min-width: 120px) and (max-width: 960px)){
    width: 100%;
    max-width: calc(100vw - 1rem);
  }
`;
