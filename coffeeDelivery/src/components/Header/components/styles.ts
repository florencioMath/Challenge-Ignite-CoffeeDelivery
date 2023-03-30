import styled from 'styled-components';

export const ShoppingCartWrapper = styled.div`
  background: ${(props) => props.theme.colors['yellow-light']};
  color: ${(props) => props.theme.colors['yellow-dark']};
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors['yellow']};
  }
`;

export const CartAmount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-top: -30px;
  margin-left: 20px;
  background: ${(props) => props.theme.colors['yellow']};
  color: ${(props) => props.theme.colors['white']};
  padding: 0.175rem;
  width: 1rem;
  height: 1rem;
  border-radius: 9999px;
  font-size: smaller;
`;
