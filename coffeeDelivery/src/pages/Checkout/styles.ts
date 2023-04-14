import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  margin-top: 104px;
  display: flex;
  justify-content: space-between;
  gap: 32px;
  max-width: calc(100vw - 20rem);
  width: 1440px;
  padding: 5.75rem 10rem;
  
  @media ((min-width: 90px) and (max-width: 960px)) {
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

export const CompleteOrderContainer = styled.form``;


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

  @media ((min-width: 90px) and (max-width: 960px)) {
    flex-wrap: wrap;
  }
`;

export const SelectedCaffeesContainer = styled.div`
  max-width: 448px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SelectedCaffeesCard = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px 6px 44px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem;
  margin-bottom: 2rem;
`;

export const SelectedCoffeesCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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

  &:hover:not([disabled]) {
    background: ${(props) => props.theme['yellow-dark']};
  }

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
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
