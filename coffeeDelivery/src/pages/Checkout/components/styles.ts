import styled from "styled-components";

export const CoffeeCardCheckoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  img {
    height: 64px;
    width: 64px;
  }
`;

export const CoffeeCardCheckoutTitleCoffee = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 1rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
`;

export const CoffeeShopAmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 4px;
  background: ${(props) => props.theme['base-button']};
  height: 32px;
  width: 72px;
  border-radius: 6px;
`;

export const CoffeeAmountAndRemoveContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 8px;
`;

export const CoffeeShopQuantity = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme['base-title']};
`;

export const CoffeeShopQuantityMinusAndPlus = styled.div`
  color: ${(props) => props.theme['purple']};
  cursor: pointer;

  div {
    display: flex;
  }
`;

export const CoffeeRemoveButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 91px;
  height: 31px;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};

  border-radius: 6px;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-family: Roboto, sans-serif;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};
  }
`;

export const IconTrash = styled.div`
  display: flex;
  color: ${(props) => props.theme['purple']};
`;
