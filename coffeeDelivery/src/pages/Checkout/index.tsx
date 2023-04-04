import {
  CheckoutContainer,
  FinishOrderContainer,
  FinishOrderFormCard,
  FinishOrderPaymentCard,
  SelectedCaffeesCard,
  SelectedCaffeesContainer,
} from './styles';

export function Checkout() {
  return (
    <>
      <CheckoutContainer>
        <FinishOrderContainer>
          <h2>Complete seu pedido</h2>
          <FinishOrderFormCard></FinishOrderFormCard>
          <FinishOrderPaymentCard></FinishOrderPaymentCard>
        </FinishOrderContainer>
        <SelectedCaffeesContainer>
          <h2>Cafés selecionados</h2>
          <SelectedCaffeesCard></SelectedCaffeesCard>
        </SelectedCaffeesContainer>
      </CheckoutContainer>
    </>
  );
}
