import styled from 'styled-components';

export const ShoppingCartWrapper = styled.div`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  position: relative;

  &:hover {
    color: ${(props) => props.theme['yellow']};
  }
`;

export const CartAmount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: calc(-1.25rem / 2);
  right: calc(-1.25rem / 2);
  background: ${(props) => props.theme['yellow']};
  color: ${(props) => props.theme['white']};
  padding: 0.175rem;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  font-size: 0.75rem;
  font-weight: 700;
`;
