import styled from 'styled-components';

export const ShoppingCartWrapper = styled.div`
  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['white']};
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  width: 38px;
  height: 38px;

  &:hover {
    background: ${(props) => props.theme['purple']};
  }
`;
