import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  margin-top: 104px;
  display: flex;
  justify-content: space-between;
  gap: 32px;
  max-width: calc(100vw - 20rem);
  width: 1440px;
  padding: 5.75rem 10rem;
  
  @media ((min-width: 320px) and (max-width: 960px)) {
    max-width: calc(100vw - 1rem);
    padding: 0px 1rem;
  }

  h2 {
    font-size: 1.125rem;
  }

  @media (max-width: 1440px) {
    flex-direction: column;
  }
`;

export const FinishOrderContainer = styled.div`
  max-width: 640px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FinishOrderFormCard = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem;

  input {
    &#cep {
      max-width: 200px;
    }

    &#numero {
      max-width: 200px;
    }
  }
`;

export const InputLabelContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  position: relative;

  input {
    &#complemento {
      max-width: 348px;
      width: 100%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  #labelComplemento {
    max-width: 340px;
    width: 100%;
    position: absolute;
    font-style: italic;
    margin-left: 75%;
    color: ${(props) => props.theme['base-label']};
  }
`;

export const InputNumeroComplementoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  column-gap: 0.75rem;

  @media ((min-width: 320px) and (max-width: 960px)) {
    gap: .5rem;
    flex-wrap: wrap;
  }
`;

export const InputAddressContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  column-gap: 0.75rem;
  @media ((min-width: 320px) and (max-width: 960px)) {
    gap: .5rem;
    flex-wrap: wrap;
  }

  input {
    &#bairro {
      width: 200px;
    }

    &#cidade {
      width: 276px;
    }

    &#uf {
      width: 60px;
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.688rem;
  margin-bottom: 2rem;
  align-items: flex-start;

  #subtitle {
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 130%;
    font-family: Roboto, sans-serif;
  }

  #text {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
    line-height: 130%;
    font-family: Roboto, sans-serif;
  }
`;

export const IconMapPin = styled.div`
  color: ${(props) => props.theme['yellow-dark']};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconLabel = styled.div`
  display: flex;
  min-width: 16px;
  min-height: 16px;
  color: ${(props) => props.theme['purple']};
`;

export const IconCurrencyDollar = styled.div`
  color: ${(props) => props.theme['purple']};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FinishOrderPaymentCard = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem;
`;

export const PaymentMethodContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 0.75rem;
  width: 100%;

  @media ((min-width: 320px) and (max-width: 960px)) {
    flex-wrap: wrap;
  }
`;

export const PaymentMethod = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;

  input[type='radio'] {
    height: 51px;
    width: 100%;
    width: 180px;
    appearance: none;
    border-radius: 6px;
    background: ${(props) => props.theme['base-button']};
    cursor: pointer;
    position: absolute;
    display: flex;
    align-items: center;
  }

  input[type='radio']:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  input[type='radio']:checked {
    border: 1px solid ${(props) => props.theme['purple']};
  }

  label {
    position: relative;
    height: 51px;
    width: 100%;
    width: 180px;
    text-transform: uppercase;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 1rem;
    font-size: 0.75rem;
    color: ${(props) => props.theme['base-text']};
    font-family: Roboto, sans-serif;
  }
`;

export const SelectedCaffeesContainer = styled.div`
  max-width: 448px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SelectedCaffeesCard = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px 6px 44px;
  width: 100%;
  height: 498px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem;
`;

export const SelectedCoffeesCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

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

export const CoffeeRemoveButton = styled.button`
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

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ButtonOrderConfirm = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 46px;
  background: ${(props) => props.theme['yellow']};
  color: ${(props) => props.theme['white']};
  text-transform: uppercase;
  font-size: 0.875rem;
  line-height: 160%;
  font-family: Roboto, sans-serif;
  border-radius: 6px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`;

export const CoffeesAmountAndPrice = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  font-family: Roboto, sans-serif;
  border-radius: 6px;
  font-size: 0.875rem;
  line-height: 130%;
`;

export const CoffeesTotalPrice = styled(CoffeesAmountAndPrice)`
  font-size: 1.25rem;
  font-weight: 700;
`;

export const TotalAmountOfCoffees = styled.div`
  display: flex;
  align-self: flex-start;

  span {
    font-family: Roboto, sans-serif;
    font-size: 1rem;
    line-height: 130%;
    font-weight: 700;
  }
`;
