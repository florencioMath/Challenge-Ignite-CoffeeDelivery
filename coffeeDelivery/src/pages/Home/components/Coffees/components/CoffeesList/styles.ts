import styled from 'styled-components';

export const CoffeesListContainer = styled.div`
  margin-top: 3.375rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  max-width: 1120px;
  width: 100%;
  margin-bottom: 5rem;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
