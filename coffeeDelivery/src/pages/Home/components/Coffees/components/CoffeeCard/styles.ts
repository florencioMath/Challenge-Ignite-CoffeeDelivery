import styled from 'styled-components';

export const CoffeCard = styled.div`
  height: 310px;
  width: 256px;
  background: ${(props) => props.theme['base-card']};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px 36px 6px 36px;
`;

export const ImageContainer = styled.img`
  margin-top: -20px;
  min-height: 120px;
  min-width: 120px;
`;

export const TagContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const TagIten = styled.span`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  padding: 4px 8px;
  border-radius: 100px;
  text-transform: uppercase;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 0.625rem;
`;

export const CoffeeName = styled.h2`
  font-size: 1.25rem;
  font-weight: 800;
  color: ${(props) => props.theme['base-subtitle']};
`;

export const CoffeeDescription = styled.p`
  width: 216px;
  text-align: center;
  font-family: Roboto, sans-serif;
  font-size: 0.875rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-label']};
`;

export const CoffeeShopContainer = styled.div`
  width: 208px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 24px;
`;

export const CoffeePrice = styled.span`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  font-size: 1.5rem;
  color: ${(props) => props.theme['base-text']};
`;

export const CoffeePriceCurrency = styled.span`
  font-family: Roboto, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
`;

export const CoffeeShopAmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 4px;
  background: ${(props) => props.theme['base-button']};
  height: 38px;
  width: 72px;
  border-radius: 6px;
`;

export const CoffeeShopQuantity = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-family: Roboto, sans-serif;
  color: ${(props) => props.theme['base-title']};
`;

export const CoffeeShopQuantityMinusAndPlus = styled.div`
  color: ${(props) => props.theme['purple']};
  cursor: pointer;

  div {
    display: flex;
  }
`;
