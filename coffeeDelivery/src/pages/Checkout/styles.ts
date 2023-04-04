import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  margin-top: 104px;
  display: flex;
  justify-content: space-between;
  gap: 32px;
  max-width: calc(100vw - 20rem);
  width: 1440px;
  padding: 5.75rem 10rem;

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
  height: 300px;
`;

export const FinishOrderPaymentCard = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  width: 100%;
  height: 200px;
`;

export const SelectedCaffeesContainer = styled.div`
  max-width: 448px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SelectedCaffeesCard = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px 6px 44px;
  width: 100%;
  height: 498px;
`;
