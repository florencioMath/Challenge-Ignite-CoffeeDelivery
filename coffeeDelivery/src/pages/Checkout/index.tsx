import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
} from '@phosphor-icons/react';
import {
  ButtonOrderConfirm,
  CheckoutContainer,
  CoffeesAmountAndPrice,
  CoffeesTotalPrice,
  FinishOrderContainer,
  FinishOrderFormCard,
  FinishOrderPaymentCard,
  IconCurrencyDollar,
  IconLabel,
  IconMapPin,
  InfoContainer,
  PaymentMethod,
  PaymentMethodContainer,
  SelectedCaffeesCard,
  SelectedCoffeesCardContainer,
  SelectedCaffeesContainer,
  TotalContainer,
} from './styles';
import { CoffeeCartCard } from './components/CoffeeCardCart';
import { useCart } from '../../contexts/CartContext';
import { CompleteOrderForm } from './components/CompleteOrderForm';

export function Checkout() {
  const { cartItems, cartItemsTotal, cartQuantity } = useCart();
  const cartTotal = 3.5 + cartItemsTotal;

  const formattedItemsTotal = cartItemsTotal.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  });
  const formattedCartTotal = cartTotal.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  });

  return (
    <CheckoutContainer>
      <FinishOrderContainer>
        <h2>Complete seu pedido</h2>
        <FinishOrderFormCard>
          <InfoContainer>
            <IconMapPin>
              <MapPinLine size={22} />
            </IconMapPin>
            <div>
              <p id="subtitle">Endereço de Entrega</p>
              <p id="text">Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </InfoContainer>
          <CompleteOrderForm />
        </FinishOrderFormCard>
        <FinishOrderPaymentCard>
          <InfoContainer>
            <IconCurrencyDollar>
              <CurrencyDollar size={22} />
            </IconCurrencyDollar>
            <div>
              <p id="subtitle">Pagamento</p>
              <p id="text">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </InfoContainer>
          <PaymentMethodContainer>
            <PaymentMethod>
              <input type="radio" name="paymentMethod" id="credit" />
              <label htmlFor="credit">
                <IconLabel>
                  <CreditCard size={16} />
                </IconLabel>
                Cartão de Crédito
              </label>
            </PaymentMethod>
            <PaymentMethod>
              <input type="radio" name="paymentMethod" id="debit" />
              <label htmlFor="debit">
                <IconLabel>
                  <Bank size={16} />
                </IconLabel>
                Cartão de Débito
              </label>
            </PaymentMethod>
            <PaymentMethod>
              <input type="radio" name="paymentMethod" id="money" />
              <label htmlFor="money">
                <IconLabel>
                  <CurrencyDollar size={16} />
                </IconLabel>
                Dinheiro
              </label>
            </PaymentMethod>
          </PaymentMethodContainer>
        </FinishOrderPaymentCard>
      </FinishOrderContainer>
      <SelectedCaffeesContainer>
        <h2>Cafés selecionados</h2>
        <SelectedCaffeesCard>
          <SelectedCoffeesCardContainer>
            {cartItems.map((coffee) => {
              return <CoffeeCartCard key={coffee.id} coffee={coffee} />;
            })}
          </SelectedCoffeesCardContainer>
          <TotalContainer>
            <CoffeesAmountAndPrice>
              <p>Total de itens</p> <span>R$ {formattedItemsTotal}</span>
            </CoffeesAmountAndPrice>
            <CoffeesAmountAndPrice>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </CoffeesAmountAndPrice>
            <CoffeesTotalPrice>
              <p>Total</p>
              <span>R$ {formattedCartTotal}</span>
            </CoffeesTotalPrice>
          </TotalContainer>
          <ButtonOrderConfirm disabled={cartQuantity <= 0}>
            Confirmar pedido
          </ButtonOrderConfirm>
        </SelectedCaffeesCard>
      </SelectedCaffeesContainer>
    </CheckoutContainer>
  );
}
